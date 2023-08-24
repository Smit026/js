console.log("Hello world");

// create object
const rect ={
    len:2,
    bth:3,
    dis: function(){
        console.log("rectangle behaviour");
    }
}

//factory function
function createFun(l,b){
    return rectangle={
        length:l,
        breadth:b,
        dis(){
            console.log("rectangle behaviour");
        }
    }
}
let s=createFun(4,5);

//constructor function
function createFun1(){
    this.length=2;
    this.breadth=4;
    this.dis=function(){
        console.log("rect behaviour");
    }
}
var s1= new createFun1();


//dynamic nature of object
s1.color="red";//add property
console.log(s1);
delete s1.color;//delete property
console.log(s1);


let createFun11 = new Function('l','b',
'this.l=l,this.b=b,this.dis=function(){console.log("rect behaviout")}');
let s2 = new createFun11(2,3);
console.log(s2);

//types in js 
//1.primitive or value types :- number, string ,boolean, undef ,null (they are copied by their value)
let a=10;
let b=a;
a++;
console.log("primitive a = "+a);
console.log("primitive b = "+b);
//2.reference type or object type :- function,object,array(they are copied by their address)
let c={value:10};
let d=c;
c.value++;
console.log("refernce c = "+c.value);
console.log("refernce d = "+d.value);



///for-in loop
let number = {
    first :1,
    second:2
};
for(let key in number){
    console.log(key,number[key]);
}


//for-of = on iterables like arrays maps
let number1 = {
    first1 :1,
    second2 :2
};
for(let key of Object.keys(number1)){
    console.log(key);
}
for(let key of Object.entries(number1)){
    console.log(key);
}


//onject cloning
//1. iteration
let src={
    a:10,
    b:12
}
let dest={}
for(let key in src){
    dest[key]=src[key];
}
console.log(dest);
//2.assign
let dest1=Object.assign({},src);
console.log(dest1);
//3.spread
let dest2={...src};
console.log(dest2);