function calculate(){
let stname=document.getElementById("name").value;
let stclass=document.getElementById("class").value;
let stsec=document.getAnimations("section").value;
let sbtam=document.getElementById("tamil").value;
let sbeng=document.getElementById("english").value;
let sbmat=document.getElementById("maths").value;
let sbche=document.getElementById("chemistry").value;
let sbphy=document.getElementById("physics").value;
let sbcse=document.getElementById("compsci").value;

document.getElementById("pName").innerHTML = "name"+ stname;
document.getElementById("pClass").innerHTML = "name"+ stclass;
document.getElementById("pSection").innerHTML = "name"+ stsec;

switch (true){

    case (sbtam > "90"):
          document.getElementById("pTamil").innerHTML = "Your tamil subject grade = S";
          break;
    case (sbtam > "80"):
          document.getElementById("pTamil").innerHTML = "Your tamil subject grade = A";
          break;

    case (sbtam > "70"):
          document.getElementById("pTamil").innerHTML = "Your tamil subject grade = B";
          break;
    case (sbtam >= "50"):
          document.getElementById("pTamil").innerHTML = "Your tamil subject grade = C";
          break;
    default:
          document.getElementById("pTamil").innerHTML = "Your tamil subject grade =U";
}

switch (true) {

    case (sbeng > "90"):
          document.getElementById("pEng").innerHTML = "Your English subject grade = S";
          break;
    case (sbeng > "80"):

    document.getElementById("pEng").innerHTML = "Your English subject grade = A";
          break;

    case (sbeng > "70"):
          document.getElementById("pEng").innerHTML = "Your English subject grade = B";
          break;
    case (sbeng >= "50"):
          document.getElementById("pEng").innerHTML = "Your English subject grade = C";
          break;
    default:
          document.getElementById("pEng").innerHTML = "Your English subject grade =U";
}

switch (true) {

    case (sbmat > "90"):
          document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = S";
          break;
    case (sbmat > "80"):
          document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = A";
          break;

    case (sbmat > "70"):
          document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = B";
          break;
    case (sbmat >= "50"):
          document.getElementById("pMat").innerHTML = "Your Mathematics subject grade = C";
          break;
    default:
          document.getElementById("pMat").innerHTML = "Your Mathematics subject grade =U";
}

switch (true) {

    case (sbche > "90"):
          document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = S";
          break;
    case (sbche > "80"):
          document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = A";
          break;

    case (sbche > "70"):
          document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = B";
          break;
    case (sbche >= "50"):
          document.getElementById("pChe").innerHTML = "Your Chemistry subject grade = C";
          break;
    default:
          document.getElementById("pChe").innerHTML = "Your Chemistry subject grade =U";

}
switch (true) {


    case (sbphy > "90"):
          document.getElementById("pPhy").innerHTML = "Your Physis subject grade = S";
          break;
    case (sbphy > "80"):
          document.getElementById("pPhy").innerHTML = "Your Physis subject grade = A";
          break;

    case (sbphy > "70"):
          document.getElementById("pPhy").innerHTML = "Your Physis subject grade = B";
          break;
    case (sbphy >= "50"):
          document.getElementById("pPhy").innerHTML = "Your Physis subject grade = C";
          break;
    default:
          document.getElementById("pPhy").innerHTML = "Your Physis subject grade =U";

}
switch (true) {

    case (sbcse > "90"):
          document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = S";
          break;
    case (sbcse > "80"):
          document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = A";
          break;

    case (sbcse > "70"):
          document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = B";
          break;
    case (sbcse >= "50"):
          document.getElementById("pCs").innerHTML = "Your Computer Science subject grade = C";
          break;
    default:
          document.getElementById("pCs").innerHTML = "Your Computer Science subject grade =U";
}

}