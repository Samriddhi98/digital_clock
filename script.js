

function renderTime(){

    //date
    var myDate = new Date();
    var year = myDate.getYear();
    if(year < 1000){
        year += 1900
    }

    var day = myDate.getDay();
    var month = myDate.getMonth();
    var daym = myDate.getDate();

    var dayarray = new Array ("Sunday,","Monday,","Tuesday,","Wednesday,","Thursday,","Friday,","Saturday,");
    var montharray = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");
   // date ended

   //time
   var currentTime = new Date();
   var h = currentTime.getHours();
   var m = currentTime.getMinutes();
   var s = currentTime.getSeconds();

   if(h == 24){
       h = 0;
   }else if(h<12){
       h = h-0;
   }

   if(h < 10){
       h = "0" + h;
   }

   if(m<10){
       m = "0" + m;
   }

   if(s<10){
    s = "0" + s;
   }

   var myClockTime = document.getElementById("timeDisplay");
   myClockTime.textContent = "" +h+ ":" +m+ ":" +s;
   myClockTime.innerText = "" +h+ ":" +m+ ":" +s;

   var myClockDate = document.getElementById("dateDisplay");
   myClockDate.textContent = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year;
   myClockDate.innerText = "" +dayarray[day]+ " " +daym+ " " +montharray[month]+ " " +year




   setTimeout("renderTime()",1000);


}

