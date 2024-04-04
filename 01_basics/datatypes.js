//Js Dynamic language
//Primitive(immutable,store single values, do not have methods, cannot be shared, and have default values when not assigned.)
//***********************7 types: String,null,Number,Symbol(generate unique value),undefined,Boolean,BigInt


//reference type or Non primitive(mutable, store multiple values, have pre-defined methods, can be shared, and their default value is null when not assigned.)
//*************************1.Arrays 2.Objects(master js object and browser events to master js), 3.Functions
/*const bign=48382918395938
console.log(bign)
console.log(typeof bign)
const x1=["hello",45,"hi","Aakash",1721]
console.log(x1);console.log(typeof(x1))
let obj1={
    name1:"Aakash",
    age:45
}
console.log(obj1)
const x=function(){
   
    console.log(obj1)
}
console.log(x())
console.log(typeof null)//object*/
//***************************************************
//Stack*****************
let Name="aa"//if value changed then memory allocated also changes
let y=Name
console.log(y);
//Heap******************
let us1={
    name:"Ravi",
    email:"jakaram@gmail.com"
}
let us2=us1
/*
STACK
*us2------>
*us1------>  {name:...  ,email:...}
*Name
us2.name="Shiva"
console.log(us1.name);//heap shares only reference,hence value can be changed
name="Aakash"
console.log(`hello my name is ${name}`)*/
//js has key value pair storage
const a=new String("Aakash")
console.log(a[4])
console.log(a.__proto__)
console.log(a.length)
console.log(a.toUpperCase())
console.log(a.charAt(3))
console.log(a.lastIndexOf('a'))
let n=a.substring(0,5)
console.log(n)
console.log(a.slice(-3));console.log(a.slice(1,4));console.log(a.slice(-5))//default start=0 of String.slice(start,end)
console.log("  Aakash   ".trim())
console.log("  Aakash   ".trimStart()+"hi")
console.log("  Aakash   ".trimEnd()+"hi")
url="www.hackerrank.com..."
console.log(url.replaceAll('w','#'))
console.log(url.includes('com'))
console.log("Aakash is Slept in Room".split(" "))

