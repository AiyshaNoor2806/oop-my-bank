interface ibankaccount{
    credit (amount:number) : void;
    debit (amount:number) : void;
}

class Bankaccount implements ibankaccount {
    accountBalance : number;
    constructor (accountbalance:number) {
        this.accountBalance=accountbalance
    }

public credit(amount: number) {
    if (amount>0){
        this.accountBalance+=amount
        console.log("Credit succeccfullu got into new account and your balance is :"+this.accountBalance);
        }
        else {
            console.log("credit unsuccesful")
        }
}
public debit(amount: number) {
if (amount>0 && amount<this.accountBalance) {
    this.accountBalance-=amount
    console.log("debit succesfully share in  new account balance:"+this.accountBalance)
}    else {
    console.log("debit unsuccecfully")
}
 }
}

class Customer {
    person : {
        firstname: string;
        lastname: string;
    }
    age:number;
    gender:string;
    mobile_number: number;
    bankaccount: Bankaccount;

    constructor(person: {firstname:string,lastname:string},age:number,gender:string,mobile_number:number,bankaccount:Bankaccount) {
        this.person=person;
        this.age=age;
        this.gender=gender;
        this.mobile_number=mobile_number;
        this.bankaccount=bankaccount;
    }

    public display(){
        console.log("Name: "+this.person.firstname+""+this.person.lastname)
        console.log("Age:" +this.age)
        console.log("Gender:" +this.gender)
        console.log("Mobile Number:" +this.mobile_number)
        console.log("Amount in bank:" +this.bankaccount.accountBalance)
        console.log()    
    }
}

const a1=new Bankaccount(800)
const c1=new Customer ( {firstname:"aiysha",lastname:"noor"},21,"female",333093149,a1);
c1.display()
c1.bankaccount.debit(500)
console.log()


const a2=new Bankaccount(500)
const c2=new Customer ( {firstname:"haseeb",lastname:"shah"},21,"male",333093148,a2);
c2.display()
c2.bankaccount.debit(200)
console.log()
