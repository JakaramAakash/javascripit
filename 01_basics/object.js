//singleton


//object Literals
  //+++++++++++Symbol++++++++++++++
/*const s=Symbol("key1")
console.log(typeof s)
const a={
    name: "Aakash",
    rno:456,
    [s]:"mykey1",//referring symbol "key1"
    email:"jakaram@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["monday","tuesday"],
    "last name":"jakaram"
}
console.log(typeof a[s],a[s])
console.log(a);console.log(a.lastLoginDays+" "+a.isLoggedIn);console.log(a.lastLoginDays[1])
//String Interpolation
console.log(`The user named ${a.name},rollno ${a.rno} is logged on ${a.lastLoginDays} with email:${a.email}`)
console.log(`The user named ${a["name"]},rollno ${a["rno"]} is logged on ${a["lastLoginDays"]} with email:${a["email"]}`)
a.lastLoginDays=["friday","saturday"]
console.log(a.lastLoginDays)
//**********freeze(Stops Accessing or manipulating values) 
//Object.freeze(a)
a.email="jakAa@gmail.com"
console.log(a.email)
//Object.seal(a)
a.email="jakAa@gmail.com"
console.log(a.email)
 a.f1=function(){
    console.log(`The user name is ${this.name} and his email is ${this.email}`)
}
console.log(a.f1())
console.log(a.f1)*/
//*********************************SINGLETON********************************
//const user=new Object()
const user={}
user.id=45
user.name="Aakash"
user.isLoggedIn=false
//console.log(user)
const rUser={
  email:"jakaramaakash@gmail.com",
  fullname:{
    userfullname:{
      fname:"Aakash",
      lname:"jakaram"
    }
  }
}
console.log(rUser.fullname.userfullname.fname)
const o1={ 1:"a",2:"b"}
const  o2={ 3:"c" ,4:"d"}
//const o3={o1,o2}
const o3=Object.assign({},o1,o2);console.log(o3)//stored in {}
const o4=Object.assign(o1,o2,o3)//stored in o1
console.log(o1)
console.log(o4)
console.log(o3==o1)
//*************SPREAD OPERATOR******
const x={o1,o2,o3,o4}
console.log(x)
const y={...o1,...o2,...o3,...o4}
console.log(y)//****************
const ar=[1,2,3,4];const a2=["aakas",4,5,3,1];const a3=[4,5,"Aa",1]
const ar4=[1,2,3,4,...ar,...a2,...a3]
console.log(ar4)
console.log(ar4.flat(Infinity))
