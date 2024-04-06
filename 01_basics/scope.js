
var c=90
if(true){
    //block scope
    let a=100
    const b=234
    console.log("Inner: ",a)
}
//global scope
a=19
//console.log(a)
//console.log(b)
//console.log(c)
console.log(a)
//The global scope in browser console(inspecting) is different from the console we run through node
function one(){
    const username="Aakash"
    function two(){
        const website= "github"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()
if(true){
    const username="Aakash"
    if(username==="Aakash"){
        const website=" youtube"
        console.log(username+ website)
    }
    //console.log(website);
}
//console.log(username)
console.log(add1(4,5))
function add1(num1,num2){
    return num1+num2
}
//sub(6,5)---->Cannot be called before declaration
const sub=function(num1,num2){
    return num1-num2
}
console.log(sub(6,5))