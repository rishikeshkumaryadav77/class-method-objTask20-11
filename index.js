//1st question
console.log("1st question")
class Book{
  title;
  author;
  isbn;

  constructor(title, author, isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn;
  }

  checkOut(){
    console.log(this.title, "checked");
  }

  return(){
    console.log("returned");
  }

  updateTitle(newTitle){
    this.title=newTitle
  }
}

var First_Book = new Book("All-in-one", "rishi", "1");
console.log(First_Book);
First_Book.checkOut("yes");
First_Book.return();
First_Book.updateTitle("SIA");
console.log(First_Book);

console.log("-------------------------****************---------------")
//2nd Question
console.log("2nd question")
class Product{
  name;
  price;
  category;

  constructor(name, price, category){
    this.name=name;
    this.price=price;
    this.category=category;
  }
  applyDiscount(amount){
    console.log(amount,"Dicount")
  }

  getPriceAfterDiscount(discount){
    
    console.log("actual price 40/- after 10% Discounct",this.price-discount,"/-")
  }
}


var book_obj=new Product("sprite", "40", "liquid");
console.log(book_obj)
book_obj.applyDiscount("10%");
book_obj.getPriceAfterDiscount(4);

console.log("-------------------------****************---------------")
//3rd Question
console.log("3rd question")
class BankAccount{
  accountHolderName;
  accountNumber;
  balance;

  constructor(accountHolderName, accountNumber, balance){
    this.accountHolderName=accountHolderName;
    this.accountNumber=accountNumber;
    this.balance=balance;
  }

deposite(amount){
  this.balance=this.balance+amount;
  console.log("deposite",amount, "Rupees into AccNo:-", this.accountNumber,"total Balance =", this.balance)
}


withdraw(amount){
  this.balance=this.balance-amount;
  console.log("withdraw",amount, "Rupees from AccNo:-", this.accountNumber,"total Balance =", this.balance)
  
}

getBalance(yes){
  console.log("Name:-",this.accountHolderName,"Acc-No:-", this.accountNumber, "total Balance =", this.balance)
  console.log("total balance = ",this.balance, yes);
}


}

var bank_of_mine = new BankAccount("Rishikesh", "778987676762", 500);
console.log(bank_of_mine);

bank_of_mine.deposite(1000);
console.log(bank_of_mine);
bank_of_mine.withdraw(100);
console.log(bank_of_mine);
bank_of_mine.getBalance("/-");



console.log("-------------------------****************---------------")
//4th question
console.log("4th question")

class Vehicle{
  modal;
  licensePlate;
  mileage;

  constructor(modal, licensePlate, mileage){
    this.modal=modal;
    this.licensePlate=licensePlate;
    this.mileage=mileage;
  }

  drive(miles){
    
    console.log("When u dreive 80kmph then u can go", miles);
  }

  getMileage(currentMileage){
    this.mileage=this.mileage+currentMileage
    console.log("Current Mileage is",this.mileage,"kmph");
  }
}


var Volvo = new Vehicle("Dd24", "TG 08 HB 2332", 15);
console.log(Volvo);

Volvo.drive("14 miles");
Volvo.getMileage(6);


console.log("-------------------------****************---------------")
//5th question
console.log("5th question")
class Student{
  name;
  grade;

  constructor(name, grade){
    this.name=name;
    this,grade=grade;
  }

  setGrade(newGrade){
    this.grade= newGrade
    console.log("updated grade from A+ to", this.grade)
  }

  getGrade(){
    console.log(this.grade)
  }
}


var about_student = new Student("Akash", "A+");
console.log(about_student);

about_student.setGrade("A");
about_student.getGrade()
//console.log(about_student.grade);



console.log("-------------------------END---------------")
