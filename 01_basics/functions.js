//*******************Functions(Used to Pack in Bundle and returned or reused)*********
/*function Myfunc(){
    console.log("A")
    console.log("a")
    console.log("k")
    console.log("a")
    console.log("s")
    console.log("h")

}
Myfunc//This is Reference
Myfunc()//Execution 
console.log(Myfunc)
function add(n1,n2){//function definition has PARAMETERS
    console.log(n1+n2)
}
add(1,2)//function call has arguments
add("Aakash"," is beautiful")
add(3,null);add(4,true);add(4,false)
function sub(n1,n2){
    let r=n1-n2
    return r//scope in function
}
const r=sub(40,true)//scope out
console.log("The Result is : ",r)
function loginmessage(username){
    console.log(typeof username)
    return `The User ${username} just has logged in..`
}
console.log(loginmessage(""));console.log(loginmessage("Aakash"));console.log(loginmessage());
function loginmessage1(username="Shiva"/*default user name(if no value passed)
){
    if(!username){
        return `Please Enter username`
    }
    return `The User ${username} just has logged in..`
}
console.log(loginmessage1());console.log(loginmessage1(""));console.log(loginmessage1("Aakash"));*/
//REST OR SPREAD OPERATOR*************************
function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(100,300,203.304,304))
function calculateCartPrice2(val1,val2,...num1){
    console.log(`The id of user is : ${val1}`)
    console.log(`The age of user is ${val2}`)
    return num1
}
console.log(calculateCartPrice2(100,30,203,304,304))
const user={
    username: "Aakash",
    price: 345
}
function handleObject(anyObject){//handles any Object********************88
    console.log(`The user is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject(user)
handleObject({
    username:"Shiva",
    price:Infinity
})
const myNewArray=[30,230,304,304]
function return2val(getArray){
    return getArray[1]
}
console.log(return2val(myNewArray))
console.log(return2val([2,3,4,2,5]))