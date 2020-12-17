console.log('======================================================')
console.log('DAY -3')
console.log('JavaScript Date Object lets us work with dates:')

// display date
var today = new Date()
console.log(today)

//7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
var otherDate = new Date(2018, 11, 24, 10, 33, 30, 0)
console.log(otherDate)

// get date
let a
a = otherDate.getDate()
console.log(a)

// get minutes
let b
b = otherDate.getMinutes()
console.log(b)

// get hours
let c
c = otherDate.getHours()
console.log(c)

// get year
let d
d = otherDate.getFullYear()
console.log(d)

// get milisecond
let e
e = otherDate.getMilliseconds()
console.log(e)

// set date
let f
f = otherDate.setDate(4)
console.log(otherDate)

// set month
let g
g = otherDate.setMonth(11)
console.log(otherDate)

// set year
let h
h = otherDate.setFullYear(2000)
console.log(otherDate)

console.log('======================================================')
console.log('classes  and object in javaScript')
console.log('static methods')
console.log('inheritance')
// syntex
// class ClassName {
//     constructor() { ... }
// }

class car {
  constructor(name, model, price) {
    this.name = name
    this.model = model
    this.price = price
  }
}
myCar = new car('swift', 2000, 300000)
console.log(myCar)

// example
class student {
  constructor(name, branch, clg) {
    this.name = name
    this.branch = branch
    this.clg = clg
  }
}
studentinfo = new student('heris', 'information technology', 'GIT')
console.log(studentinfo)

// example
class Employee {
  constructor(name, branch, clg, experience) {
    this.name = name
    this.branch = branch
    this.clg = clg
    this.experience = experience
  }

  slogan() {
    return ` I am ${this.name} in ${this.branch} at ${this.clg} in gandhinagr.`
  }

  joiningYear() {
    return 2020 - this.experience
  }

  // static method
  static add(a, b) {
    return a + b
  }
}

// inheritance example

class Programmer extends Employee {
  constructor(name, branch, clg, experience, language, github) {
    super(name, branch, clg, experience)
    this.language = language
    this.github = github
  }

  favoriteLanguage() {
    if (this.language == 'javascript') {
      return 'javascript'
    } else {
      return 'python'
    }
  }

  static multiply(a, b) {
    return a * b
  }
}

heris = new Employee('Heris', 'information technology', 'GIT', 120)
console.log(heris.joiningYear())
console.log(Employee.add(40, 60))

jay = new Programmer('Jay', 'computer', 'ldrp', 30, 'rubby', 'jay1000')
console.log(jay)
console.log(jay.favoriteLanguage())
console.log(Programmer.multiply(1000, 5))

shrey = new Programmer('shrey', 'computer', 'pdpu', 55, 'javascript', 'shrey00')
console.log(shrey)
console.log(shrey.favoriteLanguage())
console.log(Programmer.multiply(1000, 5))

console.log('======================================================')
console.log('Error handling')

let x = ' heris '
x = undefined
if (x != undefined) {
  throw new Error('This is not undefined')
} else {
  console.log('This is undefined')
}

// Error handling using tryCatch
// check()
// bcz of any error our Program can not stop thats y we using trycatch
try {
  console.log('We are inside try block')
  check()
} catch (error) {
  console.log('Are you okay?')
  console.log(error)
  console.log(error.name)
  console.log(error.message)
} finally {
  // error aaye ya na aaye pr finally run hoga
  console.log('Finally we will run this')
}

console.log('======================================================')
console.log('async await Promise')

async function parry() {
  console.log('Inside parry function')
  const response = await fetch('https://api.github.com/users')
  console.log('before response')
  const users = await response.json()
  console.log('users resolved')
  return users

  // return 'parry'
}
console.log('before calling parry')
let veriable = parry()
console.log('after calling parry')
console.log(veriable)
veriable.then((data) => console.log(data))
console.log('last line of parry')
