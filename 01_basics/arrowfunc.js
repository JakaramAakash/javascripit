/*const user={// BLOCK CONTEXT
    username:"Aakash",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to the Website`)
        console.log(this)
        return 1
    }
}
console.log(user.welcomeMessage())
user.username="Shiva"
console.log(user.welcomeMessage())
//GLOBAL CONTEXT
console.log(this)
//Initially the Browser is the only Engine,later we built console to Run js LIKE Node,deno...So browser console is different from this
//Browser global object(this value=object) is Window(handle events,forms...)
*/
/*function Tea(){
    let username="Aakash"
    console.log(username)
    console.log(this.username)
}
Tea()
const chai = function(){
 let username="Aakash"
 console.log(this)
}
chai()
const hello=()=>{
    let username="Shiva"
    //console.log(this)
}
hello()
const add=(n1,n2)=>{
    return n1+n2//Explicit Return 
}
console.log(add(3,4))
const sub=(n1,n2)=> (n1-n2)//Implicit Return 
console.log(sub(56,43))*/
//Type1
/*const hel=(n1,n2)=>(username="Aakash")
console.log(hel())//Aakash
//Type2
const hell=(n1,n2)=>(username="Shiva")
console.log(hell())//Shiva
//Type3
const hello=(n1,n2)=>({username:"Shiva"})
console.log(hello())*/
//****************************************Immediately Invoked Function Expression(IIFE)*********************************
//They are typically used to create a local scope for variables to prevent them from polluting the global scope
(function chai(){
    console.log(`DB CONNECTED`);
})();
(function chai2(){
    console.log(`DB CONNECTED`);
})();
(()=>{
    console.log(`DB CONNECTED`);
})();
((num1,num2)=>{
    console.log(num1**num2);
})(3,4);
((username)=>{
    console.log(`Hello ${username}, DB IS CONNECTED`);
})("Aakash");
