document.getElementById('randtxt').innerHTML ="changing value using document.getelementById Method,document dynamically updating value using JS";
document.getElementById('randtxt').style.backgroundColor="purple";
document.getElementById('randtxt').style.color="#fff";
document.getElementById('randtxt').title="some random text in para element";


function changehdgstyle(){
document.getElementsByClassName('hdg')[0].style.color = "red";
document.getElementsByClassName('hdg')[1].style.color = "yellow";
document.getElementsByClassName('hdg')[2].style.color = "purple";
}
function sbt(){
    document.getElementById("submit").style.color="red";
}

function selectedcity(){
    var value = document.getElementById("cites").value;
    document.getElementById("slctval").innerHTML=value;
}
function mouseoveraction(){
    document.getElementById('btnsubmit').style.backgroundColor ="green";
    document.getElementById('btnsubmit').style.color="white";
}
function mouseoutaction(){
    document.getElementById('btnsubmit').style.backgroundColor ="grey";
    document.getElementById('btnsubmit').style.color="black";
}
function keypressaction(){
    var nm= document.getElementById('nmtxt').value;
    document.getElementById('txt').innerHTML=nm;
 
}