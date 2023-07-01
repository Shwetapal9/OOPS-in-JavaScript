  class BankAccount{
    customerName;
    balance = 0;
    accountNumber = Date.now();

    constructor(customerName, balance ,accountNumber){
        this.customerName = customerName;
        this.accountNumber = Date.now();
        this.balance = balance;
    }

    deposit(amount){
        this.balance +=amount;
    }

    withdraw(amount){
        this.balance -=amount;
    }
  }

  const rakeshAccount = new BankAccount('Rakesh K',1000);
  console.log(rakeshAccount);
  rakeshAccount.deposit(5000);
  console.log(rakeshAccount.balance);
