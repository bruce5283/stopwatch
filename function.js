// https://www.chartjs.org/
window.function = function (seq) {

  // data
  seq = seq.value ?? "0";
  fweight = "600";
  align = "center";
  fsize = "20";
  width = "100";
  height = "5";

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
  </head>
  <body>
   <!-- Display the stopwatch in an element -->
<div class = "container">
    <p id="stopwatch">00:00:00:00</p>
        <div id="buttons-container">
            <button onclick="main()" id="main-btn" class="btn">Start</button>
            <button onclick="reset()" id="reset-btn" class="btn">Reset</button>
    </div>
</div>
<style>

#container {
text-align: center;
width: ${width}vw;
height:${height}vh;
}

#buttons-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

#buttons-container button {
outline: none;
cursor: pointer;
color: #fff;
background-color: #000;
border: none;
border-radius: none;
font-size: 15px;
margin: 0 10px;
padding: 3px 8px;

}

#buttons-container button:active {
  opacity: 0.7;
}

#stopwatch {
font-weight: ${fweight};
text-align: ${align};
font-family: verdana;
font-size: ${fsize}px;
}

@media (prefers-color-scheme: dark) {

#stopwatch {
color: #12A89E;
}
}

@media (prefers-color-scheme: light) {

#stopwatch {
color: #12A89E;
}
}

</style>
<script>
// Set sequence
let seq = ${seq};
//Global variables
var stopwatch = document.getElementById("stopwatch");
var mainButton = document.getElementById("main-btn");
var startTime = 0;
var elapsedTime = 0;
var timeoutID = null;

//Start / stop function
function main(){
    stopwatch.innerHTML = "Failed";
    if(mainButton.innerHTML.trim() === "Start"){
        startTime = Date.now();
            stopwatch.innerHTML = "Passed";
            startStopwatch();
            mainButton.innerHTML = "Stop");
    } else{
        elapsedTime += Date.now() -startTime;
        stopwatch.innerHTML = "Failed";
        clearTimeout(timeoutID);
        mainButton.innerHTML = "Start";
    }
}

//reset stopwatch
function reset(){
    elapsedTime =0;
    startTime = Date.now();
    clearTimeout(timeoutID);
    mainButton.innerHTML = "Start";
    displayTime(0,0,0,0);
}

//start the stopwatch
function startStopwatch(){
    timeoutID = setTimeout(function(){
        const time = Date.now()-startTime + elapsedTime;
        const milliseconds = parseInt((time%1000)/10);
        const seconds = parseInt((time/1000)%60);
        const minutes = parseInt((time/(1000*60))%60);
        const hour = parseInt((time/(1000*60*60))%24);
        
        displayTime(hour, minutes, seconds, milliseconds);
        
        startStopwatch();
    }, 100);
}

//display time in format
function displayTime(hour, minutes, seconds, milliseconds){
    hour = hour < 10 ? '0' +hour : hour;
    minutes = minutes < 10 ? '0' +minutes : minutes;
    seconds = seconds < 10 ? '0' +seconds : seconds;
    milliseconds = milliseconds < 10 ? '0' +milliseconds : milliseconds;
    stopwatch.innerHTML = hour +':' + minutes +':' + seconds + ':'+ milliseconds;
}

</script>
  </body>
</html>`

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`
  return uri; 
}
