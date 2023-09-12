import { DioAccount } from "./dioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    } 

    getLoan = (value: number) => {
        if(this.validateStatus()) {
            this.deposit(value);
        } else {
            console.log( 'Conta invalida para fazer emprestimo' );
        }
    };

}