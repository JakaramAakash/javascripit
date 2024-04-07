//*****************MAPS********************************************
//maintain Insertion order
//No duplicate Values
/*const map=new Map()
map.set("IN","India")
map.set("USA","United state of America")
map.set("UK","United Kingdom")
console.log(map)
const a={
    name: "Aa",
    id:34
}
//for in loop is not Possible for maps
console.log(Object.keys(a),Object.keys(a).length)
for(const key of map){
    console.log(key)
}
//**********************************************ITERABLE FOR MAP(Does not works for Object)*************************
for(const [key,value] of map){
    console.log(`${key} :- ${value}`)
}
//*******************************************************OBJECT ITERATION*************************
const o1={
    js:"javascript",
    cpp:"c++",
    swift:"swift",
    py:"python"
}
//**********for in LOOP******************
for(const key in o1){
    console.log(`${key}:${o1[key]}`)
}*/
const ar1 = ["js", "py", "java", "c", "cpp"]
/*for(const key in ar1){
    console.log(`${key}:-${ar1[key]}`)
}*/
//************************************forEach LOOP********************
/*Type 1:  ar1.forEach(function (val){//consists of call back function(Doesnot has function name)
    console.log(val)
})
//Type 2:ar1.forEach((val)=>{
    console.log(val)
})*/
//Type 3: ar1.forEach((item)=>(console.log(`${item}`)))
//Type 4:
/*function print(val) {
    console.log(`${val}`)
}
ar1.forEach(print)//Giving Only Reference of Function for forEach loop
//********************************************************************************************
ar1.forEach(function (item, index, array) {
    console.log(item, index, array)
})*/
//**************************Array of Objects ITERATION------------->
//[{},{},{},{},{}]
const ar2=[{
       Trainee: "Manogna",
       id:2349,
       Trainer:"Aakash",
       course:"cyber security",
       price:999,gender:false,
       paymentDone:true
},
{
    Trainee: "ganga",
    id:2349,
    Trainer:"Aakash",
    course:"cyber security",
    price:999,gender:false,
    paymentDone:true
},
{
    Trainee: "kaveri",
    id:2349,
    Trainer:"Aakash",
    course:"cyber security",
    price:999,gender:false,
    paymentDone:true
},
{
    Trainee: "Ravi",
    id:2349,
    gender:true,
    Trainer:"Aakash",
    course:"cyber security",
    price:999,
    paymentDone:true
}
]
ar2.forEach((item)=>{
    if(item.paymentDone===true){
        item.gender==true?console.log("Mr",item.Trainee):console.log("Mrs",item.Trainee)
        console.log(` You Can Access  Course ${item.course}`)
    }else{
        console.log(`Please Pay the Course fee, to Access `)
    }
})