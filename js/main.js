function startTime() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    minutes = checkTime(minutes);
    seconds = checkTime(seconds);
    //this variable contains the time as a string
    var string = hours + ":" + minutes + ":" + seconds;
    //this converts string to a set of HTML img tags containing images
    var img = stringToImage(string);
    //this puts the time on the website
    document.getElementById('txt').innerHTML =
      string + "<br>" + img;
    //this loops the function every 1000 milliseconds (1 second)
    var t = setTimeout(startTime, 1000);
    if (hours < 0) {
        hours = hours * -1;
    } else if (hours == 00) {
        hours = 12;
    } else {
        hours = hours;
    }
    
  }
  
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i
    } // add zero in front of numbers < 10
    return i;
  }
  
  //This function takes each letter of an array and pairs it to an image of the img array 
  function stringToImage(s) {
    //create a temporary blank variable to hold HTML images
    var temp = ""
    for (var i = 0; i < s.length; i++) {
      //we take the URL from array img and shove it into an HTML img tag
      //also append it to the temporary variable
      temp = temp + "<img src='" + img[s[i]] + "'/>"
    }
    //uncomment below line to see what the temporary variable says
    console.log(temp)
    return temp
  }
  
  
  //all image URLs are put into this array. feel free to change URLs
  var img = {
    "1": "img/1.jpg",
    "2": "img/2.jpg",
    "3": "img/3.jpg",
    "4": "img/4.jpg",
    "5": "img/5.jpg",
    "6": "img/6.jpg",
    "7": "img/7.jpg",
    "8": "img/8.jpg",
    "9": "img/9.jpg",
    "0": "img/0.jpg",
    ":": "img/colon.jpg",
  }


  
function addZero(time) {

    return (time < 10) ? "0" + time : time;

}

function hoursMenu(){

var select = document.getElementById('alarmhrs');
var hrs = 12

for (i=1; i <= hrs; i++) {
    select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
    
}
}
hoursMenu();

function minMenu(){

var select = document.getElementById('alarmmins');
var min = 59;

for (i=0; i <= min; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
minMenu();

function secMenu(){

var select = document.getElementById('alarmsecs');
var sec = 59;

for (i=0; i <= sec; i++) {
    select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
}
}
secMenu();


function alarmSet() {

var hr = document.getElementById('alarmhrs');

var min = document.getElementById('alarmmins');

var sec = document.getElementById('alarmsecs');

var ap = document.getElementById('ampm');


var selectedHour = hr.options[hr.selectedIndex].value;
var selectedMin = min.options[min.selectedIndex].value;
var selectedSec = sec.options[sec.selectedIndex].value;
var selectedAP = ap.options[ap.selectedIndex].value;

var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP;
console.log('alarmTime:' + alarmTime);

document.getElementById('alarmhrs').disabled = true;
document.getElementById('alarmmins').disabled = true;
document.getElementById('alarmsecs').disabled = true;
document.getElementById('ampm').disabled = true;


//when alarmtime is equal to currenttime then play a sound
var h2 = document.getElementById('clock');

/*function to calcutate the current time 
then compare it to the alarmtime and play a sound when they are equal
*/

setInterval(function(){

var date = new Date();

var hours = (12 - (date.getHours()));
// var hours = date.getHours();

var minutes = date.getMinutes();

var seconds = date.getSeconds();

var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';


//convert military time to standard time

if (hours < 0) {
    hours = hours * -1;
} else if (hours == 00) {
    hours = 12;
} else {
    hours = hours;
}

var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;


if (alarmTime == currentTime) {
    sound.play();
    alert(`Alarm! Alarm!`);
    }

},1000);


// console.log('currentTime:' + currentTime);	

}


function alarmClear() {

document.getElementById('alarmhrs').disabled = false;
document.getElementById('alarmmins').disabled = false;
document.getElementById('alarmsecs').disabled = false;
document.getElementById('ampm').disabled = false;
sound.pause();
}



  

  


  
  
  function alarmClear() {
  
      document.getElementById('alarmhrs').disabled = false;
      document.getElementById('alarmmins').disabled = false;
      document.getElementById('alarmsecs').disabled = false;
      document.getElementById('ampm').disabled = false;
      sound.pause();
  }
  
  
  