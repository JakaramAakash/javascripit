/*const temp=41
if(temp===41){
    console.log("Equal to 41")
}else{
    console.log("Not equal to 41")
}
score=101
if(score>100){
    const power="fly"
    console.log(`The Player hits ${power}`)
}
balance=3000
if(balance>3000){
    console.log(`Min balance is maintained`)
}else if(balance==3000){
    console.log(`balance=3000`)
}else{
    console.log(`Has Less than Min balance,Please credit ${3000-balance} Rupees `)
}
const userLoggedIn=true
const debitCard=true
const loggedInGoogle=false
const loggedInEmail=true
if(userLoggedIn&&debitCard){
    console.log(`Allowed to buy`)
}
if(loggedInGoogle || loggedInEmail){
    console.log(`User Logged in `)
}
//switch
const month=3
switch(month){
    case 1: console.log("January")
    break;
    case 2: console.log("Feb")
    break;
    case 3: console.log("march")
    break;
    case 4: console.log("april")
    break;
    default: console.log("Invalid input")
}
const userEmail="Aak@gmail.com"
if(userEmail){
    console.log("got email")
}else{
    console.log("no mail")
}
const mail=[]
if(mail){//accepts
    console.log("got mail")
}
//*******Falsy Values--> false,0,-0,null,"",undefined,null,BigInt 0n
//*********Truthy Values-->'false',"0"," ",[],{},function(){}
const user={}
const emptyArray=[]
if(Object.keys(user).length===0&&emptyArray.length===0){
    console.log("User Object is Empty")
}
//Therefore 0==''==false //null==undefined
//Nullish coalescing operator ?? : based null,undefined
let val;
val=5??10
console.log(val)
let val1=null??10
console.log(val1)
let val2=undefined??10
console.log(val2)
let val3=undefined??null
console.log(val3)
console.log(10&&0,10||0);console.log(0&&10,0||10,sep=",");console.log(5&&15,10||5)
let val4=null??undefined??10
console.log(val4)
//ternary****************
val11=32
val11>20?console.log(">20"):console.log("<20")
//Loops
array=[4,5,3,2,4,"hello","hi"]
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(`${element}\t`)
    
}
for(let i=13;i<=14;i++){
    for(let j=1;j<=10;j++){
        console.log(i,"*",j,"=",i*j)
    }console.log()
}
//break and continue
for(let i=0;i<6;i++){
    if(i==0)continue;
    console.log(`${i}`)
    if(i==4)break;
}
for(let i=0;i<6;i++){
    if(i<=4)continue;
    console.log(`${i}`)
    if(i==5)break;
}
//while loop
let i=0
while( i<=10){
    console.log(i)
    i+=2
}
i=0
const myar=["Aakash","Shiva","Prahlad","Ravi"]
while(i<myar.length){
    console.log(`name is`,myar[i])
    i++
}
//do while
i=0
do{console.log(myar[i])
i++}while(i<myar.length)*/
//for of Loop******************************
const myar=["Aakash","Shiva","Prahlad","Ravi"]
for(const i of myar){
    console.log(i)
}
let s="Shiva"
let c=0
for(const i of s){
    c+=1
    console.log(`character ${c} is ${i}`)
}