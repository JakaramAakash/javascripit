const myNums=[1,2,3,4,5,6,7,8,9,10]
//******************MAPS */
let newNums=myNums.map((i)=>i+10)
console.log(newNums)
newNums=myNums.forEach((i)=>(i+10)>i)
console.log(newNums)
newNums=myNums.filter((i)=>{//does not adds 10,because filter(condition) is only checked and returns value if its true
   return i+20})
console.log(newNums)
//*****************************************************
newNums=myNums
           .map((i)=>i*10)
           .map((i)=>i+1)
           .filter((i)=>i>40)
console.log(newNums)
//***********************************REDUCE FUNCTION************************************
const nums=[1,2,13,4]
let myTotal=nums.reduce(function (accumulator,currentValue){//when used function {} is mandatory
    //console.log(accumulator,currentValue)
    return accumulator + currentValue
},0)
console.log(myTotal)//20
 myTotal=nums.reduce((acc,cur)=>acc+cur,0)
console.log(myTotal)//20
//**********************************SHOPPING CART****************************
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const totalPrice=shoppingCart.reduce((accumulator,item)=>accumulator+item.price,0)
console.log(totalPrice)