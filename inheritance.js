 function BankAccount(customerName, balance){
      this.customerName = customerName;
      this.accountNumber = Date.now();
      this.balance = balance;
 }

 BankAccount.prototype.deposit = function(amount){
    this.balance += amount;
 }

 BankAccount.prototype.withdraw = function(amount){
    this.balance -= amount;
 }

 const rakeshAccount = new BankAccount('Rakesh K',1000);
  console.log(rakeshAccount); 

  function currentAccount(customerName, balance=0){
    // this.customerName = customerName;
    // this.accountNumber = Date.now();
    // this.balance = balance;
    BankAccount.call(this, customerName, balance);
    this.transactionLimit = 50000;
}

// ====Repetiton of code without inheritance
// currentAccount .prototype.takeBusinessLoan = function(amount){
//   console.log('Taking business loan' + amount);
// }

// currentAccount.prototype.deposit = function(amount){
//     this.balance += amount;
//  }

//  currentAccount.prototype.withdraw = function(amount){
//   this.balance -= amount;
// }

//Prototype linking to parent
currentAccount.prototype = Object.create(BankAccount.prototype);

currentAccount .prototype.takeBusinessLoan = function(amount){
      console.log('Taking business loan' + amount);
    }

const rakeshAccount1 = new currentAccount('Rakesh K',1000);
rakeshAccount1.withdraw(200);
console.log(rakeshAccount1); 