
// console.log(this);

// let ar1=["hi","swapnil",null,["Bye",false]]

// console.log(ar1.length);

// console.log(ar1[3][0]);
// console.log(ar1[ar1.length+2]);  undefined
// console.log(ar1[5]);   undefined



// ar1.push("LastElement")

// console.log(ar1);

// console.log("The last elemtn is : " +ar1[ar1.length-1]);

// ar1.pop();
// console.log(ar1);

// ar1.unshift("Helooooooooooooooooooooooo");

// console.log(ar1);

// ar1.unshift("Hiiiiiiiiiiiii");

// console.log();

// console.log("Initially the array is : ");
// console.log(ar1);

// ar1.shift();

// console.log("The resultant array is : ");
// console.log(ar1);


// let ar2=[1,2,3,4,5];

// console.log(ar2);

// let newar2=ar2.slice(1,3);

// console.log(newar2);

// console.log(ar2);
// ar2.splice(1,2);
// console.log(ar2);
// ar2.reverse(); console.log(ar2);
// let starray =ar2.join("_____");
// console.log(starray);

// console.log(ar2.includes(5));

// console.log(ar2.includes(1,-5))

// let s1="swapnil"
// console.log(s1.slice(1,4));

// let s2;
// s2=s1.slice(1,3);
// console.log(s2);

// let s3="level";
// let s4=s3.toLowerCase();
// console.log(s3.toLowerCase());
// console.log(s3.toUpperCase());
// console.log("Original String : "+s3);
// console.log(s4);

// let s5="";
// let i=s3.length;
// while(i>=-1){

//     s5+=s3.charAt(i);
//     i--;
// }

// console.log(s5);
// console.log(s3==s5);
// let a="Ram";
// console.log(`Agent 37 is : ${a}`);

// let b=72;
// console.log(`Swapnil ID is : ${b}`);

// (function (m,n) {
//     let b= m+n;
// }
// (10,20)


/*
=+
*/

// Arrow function :

// let add=(a,b)=>{
//     let x=a+b;
//     console.log("Add function ran successfully and I got x value as : "+x);;
// }
// add(90,1);
//gets the job done without return keyword

// function addition(o,p){
//     return o+p;
// }

// function mul(l,m){
//     return l*m;
// }

// function higherorderfunction2(func2,j,k){
//     return func2(j,k);
// }

// function hofunction(func1,a,b){
//     return func1(a,b); 
// }

// let x=hofunction(mul,7,7);
// console.log(x);

// let ex=higherorderfunction2(addition,12,5);
// console.log(ex);

// Objects //
// creation of objects :

// Directly defining an object
//  let student={
//     id:23,
//     name : "shyam",
//  }
   

//  console.log(student.id);  // reading from student
// console.log(student.name); // reading from student

// student.mail="shyam@gmail.com"; // creating in students


// console.log(student); 

// student.id=72; // updating the data in students object

// console.log(student);

// delete student.mail; // deleting the data in students object

// console.log(student);

// Basically the CRUD Operation can easily be performed on the object in JavaScript

// Creating an Object using function constructor

// function Emp(id,name,sal,phone){
//    this.id=id;
//    this.name=name;
//    this.sal=sal;
//    this.phone=phone;
// }

// let e1= new Emp(727,"ram",8000);
// console.log(e1);

// creating object using class

// class bike{
//     constructor(id,price,color,brand){
//      this.id=id;
//      this.price=price;
//      this.color=color;
//      this.brand=brand;
//     }
// }
// let b1=new bike(727,180000,"black","Yamaha");

// console.log("Level up..!");
// setTimeout(()=>{
//     console.log()
// }    
// )

let ar = cart.map(()=>{
 return i;
 console.log(i.name);
 
})

console.log(arr);

let newCart= car.filter(()=>{
    return i.price>500;
})
console.log(newCart);

let total =cart.reduce{(sum,i)=>sum=sum+i.price,0
    sum=sum+i.price,0
    console.log
}
