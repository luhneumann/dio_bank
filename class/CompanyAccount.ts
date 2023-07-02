import { DioAccount } from "./DioAccount";


export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
        
    }

    getLoan = (loanValue: number): number => {      
        if(this.getStatus()){  
         this.setBalance(loanValue)         
            return loanValue
       }
       throw new Error
    };

    
}