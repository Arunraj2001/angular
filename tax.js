function scl(){
    var Age,tax,salary;
    basic=document.getElementById("sal").value;
    document.getElementById("RESULT").value;
    salary=document.getElementById("sal").value;
    Age=document.getElementById("age").value;

    if((Age > 18)){
        tax=(salary*8)/100;
        document.getElementById("RESULT").value=tax;
    }
         else{
             tax=(salary*5)/100;
             document.getElementById("RESULT").value=tax;
         }
}
 
// function sample(){
//     var a = 100;
//     var b = 50;
 
//     var c = a > b ? 100+a : 50;
//     console.log(c);




function terybtn(){
    var a;
    var b;
    var c;
    d = "a is grater than b";
    e = "b is grater than a";
 
    a = document.getElementById("value1").value;
    b = document.getElementById("value2").value;
    c = a > b ? d : e;

    document.getElementById("tery_para").innerHTML=c;
    
}
//............array method...........//

let studentlist= ["201,ram,10,A+"]
console.log(studentlist);

studentlist.push('34');
console.log(studentlist);

studentlist.unshift('arun');
console.log(studentlist);

studentlist.pop();
console.log(studentlist);

studentlist.shift();
console.log(studentlist);

function stringbtn(){
    let text=document.getElementById("string").value;
    console.log(document.getElementById("string").value);

let length=text.length;
document.getElementById("stnglh").innerHTML="text.length"+length;

let newtext=text.replace("learning","working");
document.getElementById("stngrp").innerHTML=newtext;

let text1=text.toUpperCase();
document.getElementById("stnguc").innerHTML=text1;

let lower=text.toLowerCase();
document.getElementById("stnglc").innerHTML=lower;

let text0="in credo system";
let text3=text.concat(text0);
document.getElementById("stngcct").innerHTML=text3;

let text4=text.trim();
document.getElementById("stngtrm").innerHTML=text4;

let text5=text.charAt(3);
document.getElementById("stngcat").innerHTML=text5;

let text6=text.indexOf("a");
document.getElementById("stngidf").innerHTML="the char 'a' posistion is:"+text6;

let text7=text.slice(-3);
document.getElementById("stngsl").innerHTML=text7;

let text8=text.substring(3);
document.getElementById("stngsbst").innerHTML=text8;

let text9=text.split(" ");
document.getElementById("stngspt").innerHTML=text9;
}

function printnumbers(){
    for(var i=1;i<=5;i++){
 
       console.log(i);
    }
}

printnumbers();

function printnumbers1(){
    var a=0;

    while(a<=10){

    console.log(a);
    a++;
    }
}
printnumbers1();

function printnumber3(){
    var i=15;
   do{ console.log(i);
    i++;
    }while(i<15);
}

printnumber3();

function switchbtn(){
    let age=document.getElementById('age').value;

    switch(age){
        case 25:
       age= '25';
       console.log(age);
       document.getElementById('value').innerHTML=age;
       break;
       case 50:
        age= '50';
        console.log(age);
        document.getElementById('value').innerHTML=age;
        break;
        default:
            age='not found';
            console.log(age);
            document.getElementById('value').innerHTML=age;
            break;    
    }
   
}
// switchbtn;

// let testarry = ["banana","mango","apple","grapes","orange","pinaple"];
// console.log( testarry);
console.log("...........for............")
let testarry = ["banana","mango","apple","grapes","orange","pinaple"];
var disPly="";
for(let i=0; i < testarry.length;i++) {
    console.log(testarry[i]);
    disPly +="<li>"+ (i+1) + ". "+ testarry[i]+"</li>";
    document.getElementById("fruitss").innerHTML=disPly;
    console.log(disPly);
}
console.log("...........foreach.............")
testarry.forEach(function(item,x,arr){
    console.log("index is "+ x +" and value is " + item );
    console.log(arr);
})

console.log("...........objects.............")

let studentlst={
name:"ram",
regno:101,
class:"6th",
section:"B",
age:12
}
console.log(studentlst);

console.log("...........accessing objects.............")
console.log("name of the student is"+studentlst["name"])
console.log("student regno"+studentlst["regno"])
console.log("student class"+ studentlst["class"])
console.log("student section"+studentlst["section"])
console.log("student age"+studentlst["age"])

console.log("...........looping  objects properties.............")

for( let prop in studentlst ){


    console.log(studentlst[prop])
    
    
    
}
 console.log(".........array of object..........")

let fourthstudentlst =[
{
name:"ram",
regno:101,
class:"6th",
section:"B",
age:12

},
{
name:"arun",
regno:102,
class:"6th",
section:"B",
age:12
},
{
 name:"madhu",
regno:103,
class:"6th",
section:"B",
age:12
},

{
name:"aravind",
regno:104,
class:"6th",
section:"B",
age:12
},

]
console.log(fourthstudentlst);
console.log(fourthstudentlst[1]);
console.log(fourthstudentlst[1]["regno"]);