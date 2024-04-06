const temp=41
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
let val;
val=5??10
console.log(val)
let val1=null??10
console.log(val1)
let val2=undefined??10
console.log(val2)