/*const ar=["Ravinder","shiva","ravi","eshwar","ravinder"]
console.log(ar);
const ar3=[1,2,2,"Hello"]
ar.push(ar3);console.log(ar)
console.log(ar[5][2])
ar.splice(5)
console.log(ar)
ar.concat(ar3);
ar.concat(ar3)
console.log(ar)
const a=[1,2,3,1]
const b=[4,3,2,3]
let y=a.concat(b)//cannot be used to change the values of base array
console.log(y,a)
console.log(a.concat(b))
const z=a.concat(ar,ar3,b);console.log(z)
//***********Join @ or more Arrays 
const t=[...a,...ar,...ar3,...b]
console.log(t)*/
//*******arrays in array */
const z=[2,3,54,[3,4,31],4,5,2,[4,5,3,5,[3,54,32,22],7,8]]
console.log(z)
console.log(z[7][4][2])
//flat function
const z1=z.flat(Infinity);console.log(z1)
console.log(Array.isArray(z1))
const a="Aakash"
console.log(Array.isArray(a))
b=a.split();console.log(b)
t=Array.from(a);
console.log(t)
let score1=345
let s2=56
let s3=564
let t1=Array.of(score1,s2,s3,a,z)
console.log("Array t1=")
console.log(t1)
console.log("Array t=")
console.log(Array.of(score1,s2,s3))
