function btnyear(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    if((year%400==0)||((year%4==0))&&(year%100!=0)){
        document.getElementById("pyear").innerHTML=year+"leap year ";
        document.getElementById("totaldays").innerHTML="total no of days"+year+"is366";
        if (month==1){
            document.getElementById("pmonth").innerHTML="total no of days in janury is 31";
        }
        else if(month==2){
            document.getElementById("pmonth").innerHTML="total no of days in feb is 29";
        }
        else if(month==3){
            document.getElementById("pmonth").innerHTML="total no of days in mar is 31";
        }
        else if(month==4){
            document.getElementById("pmonth").innerHTML="total no of days in april is 31";
        }
        else if(month==5){
            document.getElementById("pmonth").innerHTML="total no of days in may is 31";
        }
        else if(month==6){
            document.getElementById("pmonth").innerHTML="total no of days in june is 30";
        }
        else if(month==7){
            document.getElementById("pmonth").innerHTML="total no of days in july is 31";
        }
        else if(month==8){
            document.getElementById("pmonth").innerHTML="total no of days in aug is 30";
        }
        else if(month==9){
            document.getElementById("pmonth").innerHTML="total no of days in sep is 31";
        }
        else if(month==10){
            document.getElementById("pmonth").innerHTML="total no of days in oct is 29";
        }
        else if(month==11){
            document.getElementById("pmonth").innerHTML="total no of days in nov is 30";
        }
        else if(month==12){
            document.getElementById("pmonth").innerHTML="total no of days in dec is 31";
        }
    }
        else{
            document.getElementById("pyear").innerHTML= year +"is common year";
            document.getElementById("totaldays").innerHTML="total no days"+year+"is 365";       
        }
        if (month==1){
            document.getElementById("pmonth").innerHTML="total no of days in janury is 31";
        }
        else if(month==2){
            document.getElementById("pmonth").innerHTML="total no of days in feb is 29";
        }
        else if(month==3){
            document.getElementById("pmonth").innerHTML="total no of days in mar is 31";
        }
        else if(month==4){
            document.getElementById("pmonth").innerHTML="total no of days in april is 31";
        }
        else if(month==5){
            document.getElementById("pmonth").innerHTML="total no of days in may is 31";
        }
        else if(month==6){
            document.getElementById("pmonth").innerHTML="total no of days in june is 30";
        }
        else if(month==7){
            document.getElementById("pmonth").innerHTML="total no of days in july is 31";
        }
        else if(month==8){
            document.getElementById("pmonth").innerHTML="total no of days in aug is 30";
        }
        else if(month==9){
            document.getElementById("pmonth").innerHTML="total no of days in sep is 31";
        }
        else if(month==10){
            document.getElementById("pmonth").innerHTML="total no of days in oct is 29";
        }
        else if(month==11){
            document.getElementById("pmonth").innerHTML="total no of days in nov is 30";
        }
        else if(month==12){
            document.getElementById("pmonth").innerHTML="total no of days in dec is 31";
        }

    }
