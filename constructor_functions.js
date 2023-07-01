// OOPS in javaScript
// JavaScript is a High-Level, prototype-based object oriented, multi-paradigm, 
//interpreted or just-in-compiled, dynamic, single threaded, garbage-collected 
// programming language with first-class functions and a non-blocking event-loop
//concurrency Model


//Constructor functions named must start with UpperCase

function BankAccount(customerName, balance = 0){
    this.customerName = customerName 
    this.accountNumber = Date.now();
    this.balance = balance

    //methods
    this.deposit = function(amount){
        this.balance += amount;
    }
    this.withdraw = (amount)=>{
        this.balance -= amount;
    }
}

//object from constructor function

const rakeshAccount = new BankAccount("Rakesh", 1000);
const johnAccount = new BankAccount("John")

rakeshAccount.deposit(5000);
johnAccount.deposit(4000);
rakeshAccount.withdraw(2000);
johnAccount.withdraw(100);
console.log(rakeshAccount, johnAccount);

//===========================================================================================

//Inheriting Person for Employee Jobs
// Create a constructor function called Person that takes two arguments: name and age.
// Add a method to the Person prototype called greet() that logs a greeting with the person's name and age: Hello, my name is <name>, I am <age> years old.
// Create a constructor function called Employee that takes three arguments: name, age, and jobTitle.
// Inherit the Person prototype in the Employee prototype
// Add a method to the Employee prototype called jobGreet() that logs a greeting with the person's job title: Hello, my name is <name>, I am <age> years old, and my job title is <jobTitle>.

function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  };
  
  function Employee(name, age, jobTitle) {
        Person.call(this, name, age);
        this.jobTitle = jobTitle;
  }
  
  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  
  Employee.prototype.jobGreet = function() {
    console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`);
  };