/*const d=new Date()
console.log(d)
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(d.toLocaleDateString())
console.log(d.toDateString())
let a=new Date(2023,0,24)
console.log(a.toLocaleDateString())
console.log(a.toDateString())*/
/*let c=new Date(2023,0,24,5,3)
console.log(c.toLocaleString())//******
let e=new Date("2023-4-1")
console.log(e.toLocaleDateString())
console.log(e.toDateString())
const f=new Date("1-4-24")
console.log(f.toDateString())
console.log(f.toLocaleDateString())*/
let t=Date.now()
const d=new Date("2024-5-1")
console.log(t)//ms from 1st jan 1970
console.time()
console.timeEnd()
console.log(d.getTime()+" "+d.getMonth()+" "+d.getMinutes()+" "+d.getHours()+" "+d.getDay()+" "+d.getDate()+" "+d.getMilliseconds()+" ")
const cd=new Date()
console.log(cd.getTime()+" "+cd.getMonth()+" "+cd.getMinutes()+" "+cd.getSeconds()+" "+cd.getHours()+" "+cd.getDay()+" "+cd.getDate()+" "+cd.getMilliseconds()+" ")
console.log(cd.setTime(4)+" "+cd.setMonth(11)+" "+cd.setMinutes(45)+" "+cd.setHours(4)+" "+cd.getDay(3)+" "+cd.getDate()+" "+cd.getMilliseconds()+" ")
console.log(`The New Date is ${cd.toDateString()} with day ${cd.getDay()}`)
console.log(cd.toLocaleString('default',
{
    weekday:"long"
}))