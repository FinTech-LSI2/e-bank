export interface CreditResponse {
  email: string;         // Email address of the recipient
  creditResponse: string; // Status of the credit application (e.g., "Accepted" or "Rejected")
  idCreditDemand: number;
  name:string; // ID of the credit demand (loan application)
}
