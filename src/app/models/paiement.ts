import { Transaction } from "./transaction";

  
export interface Paiement extends Transaction {
    numFacture: string;
}
  
 