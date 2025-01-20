export interface LoanApplication {
    id: number;
    name: string;
    cin: string;
    personAge: number;
    personIncome: number;
    personHomeOwnership: string;  // Enum value as a string
    personEmpLength: number;
    loanIntent: string;  // Enum value as a string
    loanAmnt: number;
    cbPersonDefaultOnFile: string;
    cbPersonCredHistLength: number;
    status?: string;  // Enum value as a string (e.g., 'PENDING')
    email:string;
  }
