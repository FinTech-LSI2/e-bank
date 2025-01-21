Data and ML Components in Fintech Credit Risk Project

Project Overview

This project focuses on assessing credit risk using advanced data preprocessing techniques and machine learning models. It is implemented as a system comprising:

Data preprocessing to clean and balance data.

Machine learning models for credit risk classification.

A Flask microservice for model deployment.

A Loan Application microservice for managing credit requests and communicating predictions.

Data Preprocessing

The data preprocessing pipeline includes:

1. Cleaning the Data

Handling Null Values: Removing rows or imputing missing values using statistical methods (mean, median, etc.).

Removing Duplicates: Identifying and deleting duplicate records.

2. Balancing the Data

 Undersampling: Using techniques like SMOTE to balance the dataset and ensure an even distribution across classes.
![image](https://github.com/user-attachments/assets/3ccce19d-f29f-4559-b8d7-3c4e0c48547a)


3. Outlier Removal

Identifying Outliers: Using statistical methods (e.g., Z-scores, IQR) to detect and remove anomalous data points.

4. Feature Engineering

Feature Importance: Calculating and ranking feature importance using methods like Random Forests.
![image](https://github.com/user-attachments/assets/4a256777-083f-4519-b305-c427a557adfe)

Machine Learning Pipeline

The machine learning pipeline includes:

1. Classifiers Used

Random Forest
![image](https://github.com/user-attachments/assets/411a6a31-bba7-4bfd-8f6d-a572d91850c6)


Gradient Boosting (e.g., XGBoost, LightGBM)
![image](https://github.com/user-attachments/assets/054b0f0c-3aea-4076-8359-928c2b9d0929)


KNN:
![image](https://github.com/user-attachments/assets/37c4b663-cdbe-466e-9e1f-d719079267c6)


Decision Tree:
![image](https://github.com/user-attachments/assets/badf162d-5700-40db-8afb-6d25e663dee3)



2. Evaluation Metrics

Accuracy

Precision

Recall

F1-Score

AUC-ROC


3. Model Deployment

The best-performing model is deployed in a Flask microservice for real-time predictions.

Flask Microservice

The Flask microservice handles:

Loading the trained machine learning model.

Providing RESTful API endpoints for:

Prediction: Accepting input data and returning predictions (credit approved or not approved).

Endpoints:

POST /predict – Accepts JSON input and returns the prediction.

Loan Application Microservice

This microservice, built with Spring Boot, manages credit requests and integrates with the Flask microservice via a gateway to fetch predictions.

Features:

Credit Application Storage: Saves user credit applications.

Communication with Flask Microservice: Sends user data for prediction and retrieves the result.

API Gateway Integration: Facilitates communication between the Loan Application microservice and the Flask microservice.

Workflow:

User submits a credit application.

Loan Application microservice communicates with the Flask microservice through the gateway.

Prediction (approved/not approved) is returned to the user .



4.Docker Integration

To facilitate deployment and integration, Docker is used for containerizing the microservices.

Installation

Clone the repository:

git clone [https://github.com/your-repo/fintech-credit-risk.git](https://github.com/FinTech-LSI2/e-bank)



Author:

EL KOUAZE  SIHAM
![image](https://github.com/user-attachments/assets/a22228da-77ac-4005-a581-38865e4d59ca)


![image](https://github.com/user-attachments/assets/8641f45d-6014-49f8-b9c3-b4b2fd53033f)




