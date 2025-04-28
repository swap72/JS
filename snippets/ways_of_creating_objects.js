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
