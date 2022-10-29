function add(a:number,b:number){
    return a + b;
}
var res =add(30,40);
console.log(res);

console.log("..........variable annotation..........");
var data:string[]=["arun","madhu","aravind","ram"];{

}
let result:string[];
console.log(data);
console.log("..........object annotation..........")
var stdlst:{
    name:string;
    id:number;
    age:number;
    class:string;
    section:string;
    gender:string;
}
stdlst={
    name:"Arun",
    id:204,
    age:22,
    class:"bsc",
    section:"b",
    gender:"m"
}
console.log(stdlst);

console.log("..........template string..........")
let fname:string="arun"
let lname:string="kumar"

let fullname1:string="my first name"+fname + "and last name"+lname;
console.log(fullname1)

let fullname2:string=`my first name ${fname} and last name ${lname}`
console.log(fullname2)

console.log("..........anonyms function..........")

let addanny = function(val1:number,val2:number):number
{
     return val1 + val2;
}
let resanny= addanny(30,90)
console.log(resanny)

console.log("..........fat arrow function..........")
let arranny=(num1:number,num2:number):number=>
{
    return num1 + num2;
}
let resarr=arranny(50,50)
console.log(resarr);
console.log(arranny(30,40));

class employee{
    empid:number=101;
    empname:string="arun";

    constructor(){
        console.log(`fired from constructor`);
    }
 alertname(){
    this.empid=201;
    let name = "priya";
    alert(`student name ${this.empname}and student id is ${this.empid}`)
 }

 findcapital(){
    console.log("student of the selected state is delhi");
    console.log(`student name ${this.empname}and student id is ${this.empid}`)
 }
} 
let objemp = new  employee();
console.log(objemp.empid);
objemp.alertname();
objemp.findcapital();

class dept extends employee{
    constructor(){
        super();
        console.log(`fired from constructor`);
    }
    finddept(){
        console.log(`this student ${this.empid} belongs to cse dept`)
    }
}

let dpt = new dept();
dpt.finddept();
dpt.alertname();

