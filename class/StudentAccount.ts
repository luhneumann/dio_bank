import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
    
    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
    }

    deposit = (depositValue: number): number => {
        const totalDeposit = depositValue + 10
        this.setBalance(totalDeposit)
        return totalDeposit
    }

    
}