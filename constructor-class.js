// 1 Create a Car class or function constructor that has the following properties: 
//The Car class or function constructor should also have a method called toggleAvailability 
//that changes the isAvailable property to its opposite value (true to false, false to true) 
class Car {
    constructor(make, model, year, isAvailable) {
      this.make = make;
      this.model = model;
      this.year = year;
      this.isAvailable = isAvailable;
    }
  toggleAvailability() {
    this.isAvailable = !this.isAvailable;
  }
}
const toyota = new Car("Subaru", "Impreza", 2005, true);
console.log(toyota.isAvailable);
toyota.toggleAvailability();
console.log(toyota.isAvailable);


//2.  Create a Rental class or function constructor that has the following properties: 
class Rental extends Car{
    constructor(make,model,year,isAvailable,rentalName,rentalStartDate,rentalEndDate){
    super(make,model,year,isAvailable)
    this.rentalName=rentalName
    this.rentalEndDate=rentalEndDate
    this.rentalStartDate=rentalStartDate
}
caculateRentalDuration(){
    console.log(`The rental duration is${this.rentalEndDate-this.rentalStartDate}`)

 }
}
const rentalCar=new Rental("toyota","camry",2020,"The car is available for rent","Rental Households",20,30)
console.log(rentalCar.make)
rentalCar.calculateRentalDuration()




//class Question2


class Question{
    constructor(text,options,correctAnswer){
        this.text=text
        this.options
        this.correctAnswer
    }
    checkAnswer(userAnswer){
        return userName === this.correctAnswer;
    }
}
const questions = new Question(
    "Who is the second president?",
 ["Jomo Kenyatta","Daniel Arap moi","Kibaki","Uhuru kenyata"],
   "Daniel Arap moi"
);
console.log(ques.checkAnswer("Daniel Arap moi"));
console.log(ques.checkAnswer("Kibaki"));


class ques {
    constructor (){
        this.questions = [];
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    addQuestion(question) {
        this.questions.push(question)
    }
    nextQuestion(){
        this.currentQuestionIndex++;
    }
    submitAnswer(userAnswer){
        const currentQuestion = this.questions[this.currentQuestionIndex];
        if(currentQuestion.checkAnswer(userAnswer)){
            this.score++;
        }
    }
   }






