import { CompanyAccount } from "./class/CompanyAccount"
import { PeopleAccount } from "./class/PeopleAccount"
import { StudentAccount } from "./class/StudentAccount"

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(250)
peopleAccount.withdraw(200)
console.log(peopleAccount)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.getLoan(200)
companyAccount.deposit(120)
companyAccount.withdraw(100)
console.log(companyAccount)

const studentAccount: StudentAccount = new StudentAccount('Luh', 15)
studentAccount.deposit(100)
studentAccount.deposit(100)
studentAccount.withdraw(60)
console.log(studentAccount)

