// Constructor function

function car(){
    this.brand="BMW";
    this.top_speed=200;
    this.color="Silver";
    this.move=function(){
        console.log("Moving...");
    };
}

const c1=new car();
console.log(c1);
c1.move();


// Classes
class Person{
    constructor(){
        this.name="Swapnil";
        this.age=27;
        this.complexion="Drak";
        this.greet=function(){
            console.log("Hello I am Swapnil");
        };
    }
    greet
}

const p1=new Person();
console.log(p1);
p1.greet();
