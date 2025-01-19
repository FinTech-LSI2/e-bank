import { Transaction } from "./transaction";

  
  export interface Virement extends Transaction {
    destinationRib: string;
  }