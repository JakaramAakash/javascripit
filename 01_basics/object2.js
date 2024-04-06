
//array of Objects
const users=[
    {
        id:2,
        email:"j@gmai.com"
    },
    {
        id:2,
        email:"j@gmai.com"
    },
    {
        id:2,
        email:"j@gmai.com"
    },
    {
        id:2,
        email:"j@gmai.com"
    }
]
//console.log(users)
//console.table([users])
console.log(users[0].email)
const x=Object.keys(users[0])
console.log(x)/*****IMP */
console.log(Object.values(users[0]))
const us1={
   id:4,
   name:"Aakash",
   email:"ja@gmail.com",
   rank:33519
}
console.log(us1.hasOwnProperty("rank"))
console.log(us1.hasOwnProperty("isLoggedIn"))
 us1.a=function(){
console.log(this.rank)
return 0
}
console.log(us1.a())
const course={
name:"js",
cinstructor: "Aakash",
price:"999"
}
//OBJECT DESTRUCTURING(It is to destructure keys in object to access values in it only with keys as{key_name} instead of object_name.key_name,Mostly used in Reactjs)
//course.cinstructor
const {cinstructor:ins }=course
console.log(ins)