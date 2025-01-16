package ma.fstt.email_service;

public class CreditResponse {
    private String email;
    private String creditResponse; // Accepted or Refused
    private Long idCreditDemand;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getCreditResponse() {
        return creditResponse;
    }

    public void setCreditResponse(String creditResponse) {
        this.creditResponse = creditResponse;
    }

    public Long getIdCreditDemand() {
        return idCreditDemand;
    }

    public void setIdCreditDemand(Long idCreditDemand) {
        this.idCreditDemand = idCreditDemand;
    }
}
