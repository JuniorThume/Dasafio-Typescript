export abstract class DioAccount {

    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    deposit = (value: number): void => {
        if(this.validateStatus()) {
            this.balance += value;
        }else {
            console.log( 'Nao foi possivel realizar o deposito' );
        }
    }
    
    withdraw = (value: number): void => {  
        if(value <= this.balance) {
            if(this.validateStatus()){
                this.balance -= value;
            } else {
                console.log( 'Conta desabilitada para saques!' );
            }
        } else {
            console.log( 'Saldo insuficiente para completar o saque' );
        }
    }
    
    getBalance(): void {
        console.log(this.balance);
    }

    protected validateStatus = (): boolean =>  {
        if (this.status) return this.status;
        
        throw new Error("Invalid status");
    }
}

