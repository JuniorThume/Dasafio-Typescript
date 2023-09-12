import {PeopleAccount} from './class/peopleAccount';
import {CompanyAccount} from './class/companyAccount';
import { BonusAccount } from './class/bonusAccount';

const person : PeopleAccount = new PeopleAccount(1093385258, 'Junior', 23423453463);
const company: CompanyAccount = new CompanyAccount('Star Modas', 432423423423);
const bonus: BonusAccount = new BonusAccount("Valmir", 42342356457543);


//PeopleAccount

person.deposit(10);
person.getBalance();
person.getName();
person.withdraw(5);
person.getBalance();
console.log('');

// CompanyAccount

company.deposit(500);
company.getBalance();
company.getName();
company.getLoan(1000);
company.getBalance();
company.withdraw(1250);
company.getBalance();
console.log('');


// BonusAccount

bonus.depositBonus(10);
bonus.getBalance();
bonus.getName();
bonus.withdraw(10);
bonus.getBalance();