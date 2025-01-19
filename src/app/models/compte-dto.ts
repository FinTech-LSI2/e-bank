export interface CompteDTO {
  balance: number; // Initial balance
  typeCompte: string; // Type of account (e.g., "CURRANT" or "SAVING")
  idClient: number; // ID of the client to associate the account with
  decouvert?: number; // Overdraft limit (only for current accounts)
  interetRate?: number; // Interest rate (only for savings accounts)
}
