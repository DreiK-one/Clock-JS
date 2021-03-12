 n1 = new Image(); n1.src = "1.png";
 n2 = new Image(); n2.src = "2.png";
 n3 = new Image(); n3.src = "3.png";
 n4 = new Image(); n4.src = "4.png";
 n5 = new Image(); n5.src = "5.png";
 n6 = new Image(); n6.src = "6.png";
 n7 = new Image(); n7.src = "7.png";
 n8 = new Image(); n8.src = "8.png";
 n9 = new Image(); n9.src = "9.png";
 n0 = new Image(); n0.src = "0.png";

 function obrazki(hours, minutes, seconds){

 if (hours < 10) {
 document.images.h1.src = n0.src;
 document.images.h2.src = eval("n"+hours+".src");
 }
 else {
 document.images.h1.src = eval("n"+Math.floor(hours/10)+".src");
 document.images.h2.src = eval("n"+(hours%10)+".src");
 }
 
 if (minutes < 10) {
 document.images.m1.src = n0.src;
 document.images.m2.src = eval("n"+minutes+".src");
 }
 else {
 document.images.m1.src = eval("n"+Math.floor(minutes/10)+".src");
 document.images.m2.src = eval("n"+(minutes%10)+".src");
 }
 
 if (seconds < 10) {
 document.images.s1.src = n0.src;
 document.images.s2.src = eval("n"+seconds+".src");
 }
 else {
 document.images.s1.src = eval("n"+Math.floor(seconds/10)+".src");
 document.images.s2.src = eval("n"+(seconds%10)+".src");
 }

 }



function clock(){

let time = new Date();
let hours = time.getHours();
let minutes = time.getMinutes();
let seconds = time.getSeconds();


obrazki(hours, minutes, seconds);
setInterval(clock, 1);
}

window.onload=clock;
