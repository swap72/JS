function hof(){
    console.log("This is higher order function...");
    return function(){
        console.log("This is another function which is being returned..");
    };
}


// if we want both the console.log() statements to be executed 
// there are three ways
// assign the hof function to a variable and call that function through a variable


//method 1
/* 
example : 
let f1=hof();
f1();
*/

/*
method 2:
hof()();
*/

/*
method 3 make inner function as IIF

function hof(){
    console.log("This is higher order function...");
    (function(){
        console.log("This is another function which is being returned..");
    })();
}

hof();
*/


