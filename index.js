/*
  EXAMPLE TASK:
    - Write an Airplane class whose constructor initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` property of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property gets set to true.
        + If a plane lands, its `isFlying` property gets set to false.
*/

// EXAMPLE SOLUTION CODE:
class Airplane {
  constructor(name) {
    this.name = name;
    this.isFlying = false;
  }
  takeOff() {
    this.isFlying = true;
  }
  land() {
    this.isFlying = false;
  }
}

/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - X Write a Person class whose constructor initializes `name` and `age` from arguments.
    -  X All instances of Person should also initialize with an empty `stomach` array.
    - X Give instances of Person the ability to `.eat("someFood")`:
        X + When eating an edible, it should be pushed into the `stomach`.
        X + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - X Give instances of Person the ability to `.poop()`:
        X + When an instance poops, its `stomach` should empty.
    - X Give instances of Person a method `.toString()`:
        X + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
    this.stomach = [];
  }
  eat(edible){
    if(this.stomach.length < 10){
      return this.stomach.push(edible);
    }
  }
  poop(){
    this.stomach = [];
  }
  toString(){
    return `${this.name} and ${this.age}`;
  }
}

const personOne = new Person("Matt", 30);

personOne.eat("Pizza");

/*
  TASK 2
    -X Write a Car class whose constructor initializes `model` and `milesPerGallon` from arguments.
    -X All instances built with Car:
        + should initialize with a `tank` at 0
        + should initialize with an `odometer` at 0
    -X Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    -X Give cars ability to `.drive(distance)`. The distance driven:
       X + Should cause the `odometer` to go up.
       X + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - X A car which runs out of `fuel` while driving can't drive any more distance:
        X + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

class Car {
  constructor(model, milesPerGallon){ 
    this.model = 'BatMobile';
    this.milesPerGallon = 20;
    this.tank = 0;
    this.odometer = 0;
  }
  fill(gallons) {
    if (gallons > 0) {
      this.tank = this.tank + gallons;
    }
  };
  drive(distance) {
    if (distance > 0) {
      if (distance <= this.milesPerGallon * this.tank) {
        this.odometer = distance + this.odometer;
        this.tank = this.tank - distance / this.milesPerGallon;
      }
      else {
        this.odometer = this.odometer + this.milesPerGallon * this.tank;
        this.tank = 0;
        return `I ran out of fuel at ${this.odometer} miles`
      }
    }
  }
}

/*
  TASK 3
    - Write a Lambdasian class.
    - Its constructor takes a single argument - an object with the following keys:
        + name
        + age
        + location
    - Its constructor should initialize `name`, `age` and `location` properties on the instance.
    - Instances of Lambdasian should be able to `.speak()`:
        + Speaking should return a phrase `Hello my name is {name}, I am from {location}`.
        + {name} and {location} of course come from the instance's own properties.
*/
class Lambdasian {
  constructor(attributes){
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak(){
    return `Hello my name is ${this.name}, i'm from ${this.location}`
  }
}

/*
  TASK 4
    -X Write an Instructor class extending Lambdasian.
    -X Its constructor takes a single argument - an object with the following keys:
        X + All the keys used to initialize instances of Lambdasian.
        X + `specialty`: what the instance of Instructor is good at, i.e. 'redux'
        X + `favLanguage`: i.e. 'JavaScript, Python, Elm etc.'
        X + `catchPhrase`: i.e. `Don't forget the homies`.
    - X The constructor calls the parent constructor passing it what it needs.
    - X The constructor should also initialize `specialty`, `favLanguage` and `catchPhrase` properties on the instance.
    -X  Instructor instances have the following methods:
        +X  `demo` receives a `subject` string as an argument and returns the phrase 'Today we are learning about {subject}' where subject is the param passed in.
        +X  `grade` receives a `student` object and a `subject` string as arguments and returns '{student.name} receives a perfect score on {subject}'
*/
class Instructor extends Lambdasian{
  constructor(attributes){
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase
  }
  demo(subject){
    return `Today we are learning about ${subject}`
  }
  grade(student, string){
    return `${student.name} recieives a perfect score on ${string}`
  }
}

/*
  TASK 5
    - Write a Student class extending Lambdasian.
    - Its constructor takes a single argument -  an object with the following keys:
        + All the keys used to initialize instances of Lambdasian.
        + `previousBackground` i.e. what the Student used to do before Lambda School
        + `className` i.e. CS132
        + `favSubjects`. i.e. an array of the student's favorite subjects ['HTML', 'CSS', 'JS']
    - The constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `previousBackground`, `className` and `favSubjects` properties on the instance.
    - Student instances have the following methods:
        + `listSubjects` a method that returns all of the student's favSubjects in a single string: `Loving HTML, CSS, JS!`.
        + `PRAssignment` a method that receives a subject as an argument and returns `student.name has submitted a PR for {subject}`
        + `sprintChallenge` similar to PRAssignment but returns `student.name has begun sprint challenge on {subject}`
*/
class Student extends Lambdasian {
  constructor(attributes){

  }
}

/*
  TASK 6
    - Write a ProjectManager class extending Instructor.
    - Its constructor takes a single argument - an object with the following keys:
        + All the keys used to initialize instances of Instructor.
        + `gradClassName`: i.e. CS1
        + `favInstructor`: i.e. Sean
    - Its constructor calls the parent constructor passing to it what it needs.
    - The constructor should also initialize `gradClassName` and `favInstructor` properties on the instance.
    - ProjectManager instances have the following methods:
        + `standUp` a method that takes in a slack channel and returns `{name} announces to {channel}, @channel standy times!`
        + `debugsCode` a method that takes in a student object and a subject and returns `{name} debugs {student.name}'s code on {subject}`
*/
class ProjectManager {

}

/*
  STRETCH PROBLEM (no tests!)
    - Extend the functionality of the Student by adding a prop called grade and setting it equal to a number between 1-100.
    - Now that our students have a grade build out a method on the Instructor (this will be used by _BOTH_ instructors and PM's) that will randomly add or subtract points to a student's grade. _Math.random_ will help.
    - Add a graduate method to a student.
      + This method, when called, will check the grade of the student and see if they're ready to graduate from Lambda School
      + If the student's grade is above a 70% let them graduate! Otherwise go back to grading their assignments to increase their score.
*/

///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Lambdasian) { module.exports.Lambdasian = Lambdasian }
  if (Instructor) { module.exports.Instructor = Instructor }
  if (Student) { module.exports.Student = Student }
  if (ProjectManager) { module.exports.ProjectManager = ProjectManager }
}
