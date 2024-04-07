const arr=["ravi","shiva","Aakash","Ananth","Ganga"]
const k=arr.forEach((item)=>{
console.log(item)
return 1
})
console.log(k)//return value=undefined
const ar1=[2,12,43,1,3,,112,33]
const a=ar1.filter((i)=> i>2)//In this the Variable-i access each Value of Array.Then,the Filter(i>2) is checked,if its true the value is returned.
console.log(a);console.log(typeof a)
//Another type:
const b=ar1.filter((i)=>{
    return i%2==0//Explicit return
})
console.log(b)
const c=ar1.filter((i)=>(i>2))//implicitly returns i value if filter is Correct
console.log(c)
const hello=(n1,n2)=>({username:"Shiva"})
console.log(hello())//{username: 'Shiva'}
const hel=(n1,n2)=>(username="Aakash")
console.log(hel())//Aakash
//Another type
const nums=[]
ar1.forEach((item)=>{//Not Efficient
    if(item%2==0){
        nums.push(item)
    }
})
console.log(nums)
//***************************************************************************************************************************
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  let usbooks=books.filter((i)=>i.genre==='History')
  console.log(usbooks)
  usbooks=books.filter((i)=>i.publish>2000)
  console.log(usbooks)
  usbooks=books.filter((book)=>book.genre==='History'&&book.publish>1900)
  console.log(usbooks)