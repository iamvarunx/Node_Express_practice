const object = {
    name:'Varun A',
    age:'20',
    greet: function(){
        console.log("hi "+this.name)
    }
}
object.greet();

//Array
const array = [10,11,12,13];
for(const ar of array)
{
    console.log(ar)
}

console.log(array.map((ar)=>{
    return ar*2
}))

const hoobies1 =['programming','gamming','playing']
const hoobies2 =[...hoobies1]  //Spread operator
const hoobies3 =hoobies1.splice()
const hoobies4 = hoobies1 // to copy the address , if we change anything or add any new data it get added in hobbies1
hoobies4.push("Hello")

const person = {name:'varun'}
const person1 = {...person,age:10} //Spread operator
console.log(person,person1)

const toArray =(...args)=>{ // rest operator
    return args
}
console.log(toArray(1,2,3,4,5,6))


const ob = {name:"Varun",age:20}
//destruction
const {name,age} = ob;
console.log(name,age)