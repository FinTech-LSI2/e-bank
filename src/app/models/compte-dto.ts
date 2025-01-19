export interface CompteDTO {
  id: number; // ID du compte
  rib: string; // RIB du compte
  balance: number; // Solde du compte
  typeCompte: string; // Type de compte (CURRANT ou SAVING)
  idClient: number; // ID du client associé
  decouvert?: number; // Découvert autorisé (pour les comptes courants)
  interetRate?: number; // Taux d'intérêt (pour les comptes d'épargne)
  status: string; // Statut du compte (ACTIVATED ou SUSPENDED)
}
