// Each object in JavaScript has an associated prototype, which acts as a blueprint for that object.
// Prototypes allow objects to inherit properties and methods from other objects.
// In JavaScript, prototypes are implemented using the prototype-based inheritance model.
//  Every object has a prototype property that refers to its prototype object. 
// The prototype object, in turn, can have its own prototype, forming a prototype chain.
// Prototypes are commonly used in JavaScript to implement inheritance and reuse code.

// Constructor function for creating Person objects
function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // Adding a method to the Person prototype
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  // Creating an instance of Person
  var john = new Person("John", 25);
  
  // Accessing the inherited method from the prototype
  john.greet(); // Output: Hello, my name is John

