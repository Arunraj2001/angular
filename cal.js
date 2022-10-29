function calculator(actType){
 var num1;
 var num2;
 var ans;

if(actType=='add'){
    num1=document.getElementById("val1").value;
    num2=document.getElementById("val2").value;
    ans=+num1 + +num2;
    document.getElementById("val3").value=ans;
}
else if(actType=='sub'){
    num1=document.getElementById("val1").value;
    num2=document.getElementById("val2").value;
    ans=num1 - num2;
    document.getElementById("val3").value=ans;
}
else if(actType=='mul'){
    num1=document.getElementById("val1").value;
    num2=document.getElementById("val2").value;
    ans=num1*num2;
    document.getElementById("val3").value=ans;
}
else if(actType=='div'){
    num1=document.getElementById("val1").value;
    num2=document.getElementById("val2").value;
    ans=num1/num2;
    document.getElementById("val3").value=ans;
}
}
console.log(".........while........")
function printwhile(){
    vari=0;
    while(i<10){
        console.log(i);
        i++;
    }
}
printnumbers();


    
