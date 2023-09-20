//Datatypes in javascript
//2types
//primitive datatype(7types):String,Number,Boolean,Null,undefined,Symbol,BigInt
const score=100;
const scorevalue=100.3;
const isloggedin=false;
const outsideTemp=null;
let useremail;
const id=Symbol('123');
const anotherid=Symbol('123');
console.log(id==anotherid);//output =>false
const bigNumber=2454545466n;//BigInt
//refernce datatype or nonprimitive datatype
//Array,Object,Function
const heros=["shaktiman","naagraaj","doga"];//return datatypes =>object
let myobj={
    name:"hitesh",
    age:22,
}//return datatype object
const myFunction=function(){
    console.log("hello world");
}// datatypes return objectfunction
console.log(typeof myFunction);