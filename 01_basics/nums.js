/*const a=new Number(100)//object of type Number
console.log(a)
console.log(a.toString().length)
console.log(a.toFixed(5))//precision value(use pv=2 in e-commerce websites)
const b=23.456
console.log(b.toFixed(2))//>=5(ceil)<5(floor)
console.log(b.toPrecision(2))
const c=10000000
console.log(c.toLocaleString())
console.log(c.toLocaleString('en-IN'))//Indian Standard
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.isFinite)
console.log(Number.isNaN)*/
/***************************************Maths*************************************** */
/*console.log(Math)
let a=22
console.log(Math.round(4.5))
console.log(Math.sqrt(a))
console.log(a**a)
console.log(Math.max(a,34))
console.log(Math.floor(5.6));console.log(Math.ceil(4.6))
console.log(Math.max(3,4,23,12,4))
console.log(Math.min(45,34,2,4,2))*/
console.log(Math.random())//values between 0 and 1
//for dice game
console.log(((Math.random()*100)%7).toFixed(0))
//between values
const max=20
const min=10
console.log((Math.floor(Math.random()*(max-min+1)))+min)
console.log(Math.floor(Math.random()*(20-10+1))+10)//gives from 10 to 20
console.log(Math.abs(-1.2))