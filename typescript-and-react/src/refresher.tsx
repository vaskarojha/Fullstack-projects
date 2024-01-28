let var1 = 'hello' // var1 have to be only string datatype
let num1 = 10 // num1 datatype can be only number

let var2 :string = 'Hi' // another way of creating string variable
let num2 :number= 11 // another way of creating number

let bool1 : boolean 

let alfaNum : string | number // '|' symbole is or operator it means the alfanum variable can be only either string or number


// Array

let myArray= ["item1", "item2", "item3"]
myArray.push("item4")

// myArray.push(1) => this will give error because by default myArray accepts string items only

let myStringArray : string[]
let myNumberArray : number[]

let stringOrNumberArray : (string | number)[] // array that accepts string or number only

// objects
//  While creating object, TS automatical takes the initially used  variable data type
let user={          
    username:"user1",
    userId: 123,
    isActive: false
}

let userObject :{
    username:string,
    userID: number,
    isActive:boolean
}

userObject= {
    username:"user1",
    userID:123,
    isActive: true
    //passowrd : "pass1" // It throws an error because it was not defined while creating userObject 
}

let userObject2 :{
    username:string,
    userID: number,
    isActive:boolean,
    password?: string    // "?" symbole is used for conditional variable 
}

userObject2={
    username: "username2",
    userID: 123,
    isActive:true,
    password: "pass1"    // IT IS OPTIONAL 
}

userObject2={
    username: "username2",
    userID: 123,
    isActive:true,
    // password: "pass1"  // IT IS OPTIONAL 
}


//ANY

let varAny ;
varAny = 11
varAny = 'abc'
varAny = true
varAny = {}
varAny = []

// function

let myFun  =()=>{                    //  void  function, returns nothing
    console.log("Hello world!!")
}
            //function param d-type          //return d-type
let myFunc2 = (num11 :number, num12: number) :number=>{
    return num11+num12
}

myFunc2(1,1)


let myFunc3 = (var1: string) :void=>{
    var1.toUpperCase()
}


//  adding optional paramater in function

let myFunc4 = (num1:number, num2:number, num3?: number):number =>{
    return num1+num2
}

// obj as paramater
let func5 = (user:{username:string, userId : number, isActive: true, password?:string})=>{
    user.userId
}

//type aliases
type UserType ={
    username: string,
    userId :number,
    isActive: boolean,
    password?:string
}

const user11:UserType = {
    username: 'user11',
    userId: 123,
    isActive: true,
    password: "pass2"
}

let myFunc6 = (user1:UserType)=>{
    user1.username
    user1.userId,
    user1.isActive
}

let myFunc7 = (user1:UserType)=>{
    user1.username
    user1.userId,
    user1.isActive,
    user1.password
}

// function type
type func1 = (a: string, b: string) => void

type func2 = (a:number, b:string) => string


//Interface

interface IUser{
    username: string,
    isActive:boolean
}


//Extends all the property of IUser Interface, and this is major difference between type and interface
interface IEmployee extends IUser{
    employeeId : string
}

//creating emp1 object using IEmployee data type
const emp1 :IEmployee={
    username:"user1",
    isActive:true,
    employeeId:"123"
}

//creating user1 object using IUser employee
const user1:IUser={
    username: "user1",
    isActive: false
}

//Generics

interface author{
    name: string,
    nationality: string
}

interface book<author>{
    title:string,
    pages:number,
    pubish:string
    author:author
}

const book1 = {
    title: "title1",
    pages: 101,
    pubish: "date",
    author: {
        name: "name1",
        nationality:"nationality"
    }
}

interface ITest1<T> {
    key1: string,
    key2:number,
    key3: T[]
}

const Test11 :ITest1<number>={
    key1: "abc",
    key2: 123,
    key3:[1,2,3,4]
}

const Test22 :ITest1<string>={
    key1:"def",
    key2:456,
    key3:["a", "b", "c"]
}


// more 
let userAny: any // this turns off the typescript variable check
let varUnknown : unknown // if the variable type couldnot determinde initially.


interface IUser {
    userId: number,
    name: string,
    age:number,
    image: string
}

interface IAdmin extends IUser{
    token:string,
    addNewUser:()=> void
}

function isAdminUser(object:unknown) :object is IAdmin{
    if(object !== null && typeof object === "object"){
        return "token" in object
    }
    return false
}

async  function fetchUser (){
    const response = await fetch("some url");

    // not a good practice
    const someUser : IUser = await response.json();

    // a better practice
    const someUser1 :unknown = await response.json()

    if (isAdminUser(someUser1)){
        someUser1.userId
    }

}











