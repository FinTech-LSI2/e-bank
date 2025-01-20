export interface Transaction {
    id?: number;
    rib: string;
    amount: number;
    transactionDate: Date;
    description?: string;
}