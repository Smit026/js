console.log('hello');

//=>math properties

//=>string
//1.primitive
let lname='patel';
//2.object
let fname=new String('smit');


//=>string properties

//=>if we use template literals (backtiks = ` xyz `)then escape sequence like \n \t \' \" etc. is not needed
let message =`this is mess,hello
how r u // 
byye`;
console.log(message);

//object literal = { } ,string literal= ' ',template literal = ` `

//array insert and remove
let arr1=[1,2,3,4];
 arr1.push(5);//insert at end
 arr1.unshift(6);//insert at begin
 arr1.splice(2,0,'a','b','c');//insert at middle
 console.log(arr1);
 arr1.pop();//remove from end
 arr1.shift();//remove from begin
 arr1.splice(3,1); //index 3 and remove 1 item
 console.log(arr1);


//searching an item  1. primitve= indexOf and includes 2. reference/object = call back functions
//1.
console.log(arr1.indexOf(5));//return index
console.log(arr1.indexOf(9));//if not return -1
console.log(arr1.includes(6));//true or false
console.log(arr1.indexOf(4,8));//find 4 from 8 index so return -1 bcoz 4 is on 7
//2.
let course =[{n1:1,name1:'smit'},{n2:2,name2:'patel'}];
let c1 = course.find(function(value){
    return value.name1==='smit';
})
//also write as arrow function
let c2=course.find(value => value.name2==='patel');
console.log(c1);
console.log(c2);


//emptying an array 1. number.length=0; 2. number.splice(0,number.length);
let n1=[1,2,3,4];
let n2=n1;
n1.length=0; //or n1.splice(0,n1.length);
console.log(n1);
console.log(n2);

//combining and slicing of array
let first=[1,2,3];
let second=[4,5,6,7,8,9];
console.log(first.concat(second));//1,2,3,4,5,6,7,8,9
console.log(second.slice(1,4));//5,6,7
console.log(second.slice(2));//6,7,8,9
console.log(second.slice());//4,5,6,7,8,9
//slice and combine object
let f1=[{n1:1,name:'sm'},{n2:2,name:'ptl'},{n3:3,name:'at'}];
let f2=[{n3:3,name:'at'},{n4:4,name:'pi'}];
let com=Object.fromEntries(Object.entries(f1).slice(1,3));
let com1=Object.assign(f1,f2);
console.log(com);
console.log(com1);

//spread operator
let spread=[...first,'a','b',...second];
console.log(spread);

//iteration
let arr2=[2,3,4,5,6,7,7];
arr2.forEach(value => console.log(value));
for(let value of arr2){
    console.log(value);
}

//joining , spliting ,sorting,filtering
let num=[100,5,20,80,40,-4,-5];
//join
console.log(num.join(','));
//split
let num2='hello are you ok';
console.log(num2.split(' '));
//1. alphabetically sorting 
console.log(num.sort());
//2.numerically sorting 
console.log(num.sort(function(a,b){return a-b;}));
//filter
console.log(num.filter(value => value<0 ));



//FUNCTIONS

//function call
r1();

//funciton declaration
function r1(){
    console.log('run');
}

//named function assignment 
let named=function r2(){
    console.log('named');
}
named();

//anonymous function assignment
let anonymous=function(){
    console.log('anonymous');
}
anonymous();

//hoisting => process of moving function declaration to the top of file and done automatically by JS engine

//JS is dynamic language
let x=1;
x='a';
console.log(x);

function sum(a,b){
    return a+b;
}
console.log(sum(1,2));//3
console.log(sum(1));//NaN a=1, b=undefined
console.log(sum());//NaN a=b=undefined
console.log(sum(1,2,3,4,5));//3 a=1,b=2


//adding numbers
function add(){
    let total=0
    for(let value of arguments){
        total += value;
    }
    return total;
}
console.log(add(1,2,3));

//REST op => ...args => array
function arg(num,value,...args){
    console.log('num = '+num);
    console.log('vlaue = '+value);
    console.log('args = '+args);
}
arg(1,2,3,4);

//default parameter
function s1(p,q=5,r=4){
    return p*q*r/100;
}
console.log(s1(1000,2,3));
console.log(s1(1000,2)); //p=1000,q=2,r=4(default)
console.log(s1(1000));//p=1000,q=5(default),r=4(default)


//getter => access properties
//setter => change or mutate properties
let person ={
    fname :'smit',
    lname :'patel',
    get fullname(){
        return `${person.fname}  ${person.lname}`;
    },
    set fullname(value){
        let p= value.split(' ');
        this.fname=p[0];
        this.lname=p[1];
    }
}

console.log(person.fullname);
person.fullname ='raj sharma';
console.log(person.fullname);