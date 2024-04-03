//Js Dynamic language
//Primitive(immutable,store single values, do not have methods, cannot be shared, and have default values when not assigned.)
//***********************7 types: String,null,Number,Symbol(generate unique value),undefined,Boolean,BigInt


//reference type or Non primitive(mutable, store multiple values, have pre-defined methods, can be shared, and their default value is null when not assigned.)
//*************************1.Arrays 2.Objects(master js object and browser events to master js), 3.Functions
const bign=48382918395938
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
console.log(typeof null)//object