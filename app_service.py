from flask import Flask, request, jsonify
from app_model import AppModel
from flask_cors import CORS

# Initialisation de l'application Flask
app = Flask(__name__)
CORS(app)

# Chargement du modèle
model = AppModel(model_path="credit_risk_model.pkl")

# Liste des caractéristiques attendues (sans "loan_int_rate" dans l'entrée)
EXPECTED_FEATURES = [
    "person_age",
    "person_income",
    "person_home_ownership",
    "person_emp_length",
    "loan_intent",
    "loan_amnt",
    "cb_person_default_on_file",
    "cb_person_cred_hist_length"
]

# Mapping pour les valeurs catégoriques
CATEGORY_MAPPINGS = {
    "person_home_ownership": {"RENT": 0, "OWN": 1, "MORTGAGE": 2, "OTHER": 3},
    "loan_intent": {"EDUCATION": 0, "MEDICAL": 1, "VENTURE": 2, "PERSONAL": 3, "DEBTCONSOLIDATION": 4, "HOMEIMPROVEMENT": 5},
    "cb_person_default_on_file": {"N": 0, "Y": 1}
}

# Loan grade mapping (with numeric values)
LOAN_GRADE_NUMERIC_MAPPING = {
    "G": 0,
    "F": 1,
    "E": 2,
    "D": 3,
    "C": 4,
    "B": 5,
    "A": 6
}

# Example thresholds to determine the loan grade (you may want to adjust this logic)
LOAN_GRADE_THRESHOLDS = {
    0: "G",  # Below 600
    1: "F",  # 600-649
    2: "E",  # 650-699
    3: "D",  # 700-749
    4: "C",  # 750-799
    5: "B",  # 800-849
    6: "A"   # 850 and above
}

def calculate_loan_percent_income(loan_amnt, person_income):
    return loan_amnt / person_income if person_income > 0 else -1

def derive_loan_grade(credit_score):
    # Logic for deriving loan_grade based on credit_score (example logic)
    grade = LOAN_GRADE_THRESHOLDS.get(min(6, max(0, credit_score // 100)), "G")
    return LOAN_GRADE_NUMERIC_MAPPING.get(grade, 0)  # Return numeric value

def preprocess_features(data):
    processed_data = []
    # Calculate derived features
    loan_percent_income = calculate_loan_percent_income(data["loan_amnt"], data["person_income"])
    credit_score = data.get("credit_score", 0)  # Assume credit score is provided
    loan_grade = derive_loan_grade(credit_score)

    # Add derived features to the input data
    data["loan_percent_income"] = loan_percent_income
    data["loan_grade"] = loan_grade

    # Process features (excluding "loan_int_rate" from inputs)
    for feature in EXPECTED_FEATURES + ["loan_percent_income", "loan_grade"]:
        value = data.get(feature)
        if feature in CATEGORY_MAPPINGS:
            value = CATEGORY_MAPPINGS[feature].get(value, -1)
        processed_data.append(value)

    # Internal calculation for loan interest rate (fixed value set by bank, not provided by client)
    # Example: Setting loan_int_rate as a fixed value (this could be based on various factors like credit score)
    loan_int_rate = 5.0  # Example: 5% interest rate fixed by the bank
    processed_data.append(loan_int_rate)  # Append the fixed loan_int_rate value

    return processed_data

@app.route("/")
def index():
    return jsonify({"message": "Service de prédiction de risque de crédit actif."})

@app.route("/api/prediction", methods=["POST"])
def predict():
    try:
        data = request.json
        # Check for missing features
        missing_features = [f for f in EXPECTED_FEATURES if f not in data]
        if missing_features:
            return jsonify({
                "error": "Données manquantes.",
                "missing_features": missing_features
            }), 400

        # Preprocess features
        features = preprocess_features(data)

        # Model prediction
        result = model.predict(features)
        prediction_label = "Approve" if result["prediction"] == 0 else "Not Approve"

        # Return the simplified response
        return jsonify({
            "prediction": prediction_label,
            "status": "success"
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)
