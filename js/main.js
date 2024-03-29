function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    //this variable contains the time as a string
    var string = h + ":" + m + ":" + s;
    //this converts string to a set of HTML img tags containing images
    var img = stringToImage(string);
    //this puts the time on the website
    document.getElementById('txt').innerHTML =
      string + "<br>" + img;
    //this loops the function every 1000 milliseconds (1 second)
    var t = setTimeout(startTime, 1000);
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
    //console.log(temp)
    return temp
  }
  
  
  //all image URLs are put into this array. feel free to change URLs
  var img = {
    "1": "img/1.jpg"
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
  