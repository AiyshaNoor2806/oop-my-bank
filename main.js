var Bankaccount = /** @class */ (function () {
    function Bankaccount(accountbalance) {
        this.accountBalance = accountbalance;
    }
    Bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountBalance += amount;
            console.log("Credit succeccfullu got into new account and your balance is :" + this.accountBalance);
        }
        else {
            console.log("credit unsuccesful");
        }
    };
    Bankaccount.prototype.debit = function (amount) {
        if (amount > 0 && amount < this.accountBalance) {
            this.accountBalance -= amount;
            console.log("debit succesfully share in  new account balance:" + this.accountBalance);
        }
        else {
            console.log("debit unsuccecfully");
        }
    };
    return Bankaccount;
}());
var Customer = /** @class */ (function () {
    function Customer(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    Customer.prototype.display = function () {
        console.log("Name: " + this.person.firstname + "" + this.person.lastname);
        console.log("Age:" + this.age);
        console.log("Gender:" + this.gender);
        console.log("Mobile Number:" + this.mobile_number);
        console.log("Amount in bank:" + this.bankaccount.accountBalance);
        console.log();
    };
    return Customer;
}());
var a1 = new Bankaccount(800);
var c1 = new Customer({ firstname: "aiysha", lastname: "noor" }, 21, "female", 333093149, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
var a2 = new Bankaccount(500);
var c2 = new Customer({ firstname: "haseeb", lastname: "shah" }, 21, "male", 333093148, a2);
c2.display();
c2.bankaccount.debit(200);
console.log();
