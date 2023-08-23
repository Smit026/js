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



