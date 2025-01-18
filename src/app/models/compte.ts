export interface Compte {
    id: number;
    rib: string;
    balance: number;
    createdDate: Date;
    status: string;
    typeCompte: string;
    decouvert?: number;
    interetRate?: number;
  }
