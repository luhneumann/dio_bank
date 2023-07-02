export abstract class DioAccount {
    private readonly name: string
    private readonly accountNumber: number
    private balance: number = 0
    private status: boolean = true

    constructor(name: string, accountNumber: number){
        this.name = name
        this.accountNumber = accountNumber
    }
    
    getName = (): string => {
        return this.name
    }

    getAccountNumber = () => {
        return this.accountNumber
    }

    deposit = (depositValue: number): number => {
        if(this.validateStatus()){
            this.balance += depositValue
            return depositValue       
        } 
        throw new Error
    }

    withdraw = (withdrawValue: number): number => {      
        const newBalance = this.balance - withdrawValue  
        if(this.validateWithdraw(withdrawValue)){
            this.balance -= withdrawValue
            return newBalance 
        }
        throw new Error        
    }    
    getBalance = (): number => {
        return this.balance
    }

    setBalance = (value: number): number => {
        this.balance += value
        return this.balance
    }

    getStatus = (): boolean => {
        return this.status
    }

    private validateStatus = (): boolean => {
        if (this.status) {
            return this.status
        }
        throw new Error('Conta inválida')
    }
   
    private validateWithdraw = (withdrawValue: number): number => {
        if(this.balance >= withdrawValue){
            return this.balance
        }
        throw new Error ('Saldo insuficiente')
    }
}