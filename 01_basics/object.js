//singleton


//object Literals
  //+++++++++++Symbol++++++++++++++
const s=Symbol("key1")
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
Object.freeze(a)
a.email="jakAa@gmail.com"
console.log(a.email)
Object.seal(a)
a.email="jakAa@gmail.com"
console.log(a.email)

