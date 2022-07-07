function showTime() {

  var clockElm = document.querySelector(".timer");

  var date = new Date();
  
  var hours = date.getHours();
  var day = date.getDay();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var period = "PM";
  var button1 = document.querySelectorAll("button")[0];
  var button2 = document.querySelectorAll("button")[1];
  var timer = document.querySelector(".timer");
  let format = timer.getAttribute("data-format");;


  if (day == 0) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }
  if (day == 1) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }
  if (day == 2) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }
  if (day == 3) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }
  if (day == 4) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }
  if (day == 5) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }
  if (day == 6) {
    document.querySelectorAll("h6")[day].classList.add("highlighted");
  }

  button1.addEventListener("click", changeTo12Hr);

 function changeTo12Hr() {

  format = button1.getAttribute("data-format");
  clockElm.setAttribute("data-format", format);

  if (format == 12){
    if (hours >= 12){
      period = "PM";
    } else {
      period = "AM";
    }
  }

  document.querySelector("button").style.color = "#00FF97";
  document.querySelectorAll("button")[1].style.color = "#8A8A8A";
  document.querySelector("h4").innerHTML = " " + period;
}


button2.addEventListener("click", changeTo24Hr);

function changeTo24Hr() {

  format = button2.getAttribute("data-format");
  clockElm.setAttribute("data-format", format);
  document.querySelector("h4").innerHTML = "";

  document.querySelector("button").style.color = "#8A8A8A";
  document.querySelectorAll("button")[1].style.color = "#00FF97";

}


  if (format == 12) {
    if (hours == 0){
      hours = 12;
    }
    if (hours < 12){
      hours = hours % 12;
    }
    if (hours == 12){
      hours = 12;
    }
    if (hours > 12){
      hours = hours % 12;
    }
  }
  
  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  
  let time = hours + ":" + minutes + ":" + seconds;

  document.querySelector("h1").innerHTML = time;

}

setInterval(showTime, 1000);
