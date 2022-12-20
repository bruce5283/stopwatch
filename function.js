// https://www.chartjs.org/
window.function = function (seq,userID,bearer) {

  // data
  seq = seq.value ?? "0";
  userID = userID.value ?? "NA";
  bearer = bearer.value ?? "NA";
  fweight = "600";
  align = "center";
  fsize = "20";
  width = "100";
  height = "5";
  let ht = `<!DOCTYPE html>
<html>
  <head>
    <title>JavaScript StopWatch</title>
    <style> 
    #stopwatch-container {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 100px auto 0;
      width: fit-content;
      padding: 10px 20px;
      box-shadow: 1px 0px 4px 2px #9c9a9a;
      border-radius: 5px;
    }
 
    #stopwatch {
      margin: 0 auto;
      text-align: center;
      font-size: 60px;
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
      background-color:#000;
      border: none;
      border-radius: 5px;
      font-size: 20px;
      margin: 0 10px;
      padding: 3px 8px;
    }
 
    #buttons-container button:active {
      opacity: 0.7;
    }
  </style>
  </head>
  <body>
    <div id="stopwatch-container">
      <p id="stopwatch">00:00:00:00</p>
      <div id="buttons-container">
        <button onclick="main()" id="main-btn" class="btn">Start</button>
        <button onclick="reset()" id="reset-btn" class="btn">Reset</button>
      </div>
    </div>
    <script>
    //globle variables
    //var user = "${userID}";
    //var id = "${bearer}";
    var stopwatch = document.getElementById('stopwatch');
    var mainButton = document.getElementById('main-btn');
    var startTime=0;
    var elapsedTime=0;
    var timeoutId=null;
 
    //method to operate start and stop function
    function main(){
      if (mainButton.innerHTML.trim() === 'Start') {
      startTime = Date.now();
        startStopwatch();
        mainButton.innerHTML = 'Stop';
      } else {
        elapsedTime += Date.now() - startTime;
        //callAPI(user,elapsedTime,id);
        clearTimeout(timeoutId);
        mainButton.innerHTML = 'Start';
      }
    }
 
    //method to reset the stopwatch
    function reset() {
      elapsedTime = 0;
      startTime = Date.now();
      clearTimeout(timeoutId);
      mainButton.innerHTML = 'Start';
      displayTime(0, 0, 0, 0);  
    }
 
    //method to start the stopwatch
    function startStopwatch() {
      
      //run setTimeout() and save id
      timeoutId = setTimeout(function(){
        //calculate elapsed time
        const time = Date.now() - startTime + elapsedTime;
         
        //calculate different time measurements based on elapsed time
        const milliseconds = parseInt((time%1000)/10)
        const seconds = parseInt((time/1000)%60)
        const minutes = parseInt((time/(1000*60))%60)
        const hour = parseInt((time/(1000*60*60))%24);
        
         
        //display time
        displayTime(hour, minutes, seconds, milliseconds);
         
        //calling same method again recursivaly
        startStopwatch();
      }, 100);
    }
 
    //method to display time in '00:00:00:00' format
    function displayTime(hour, minutes, seconds, milliseconds) {
        hour = hour < 10 ? '0'+hour : hour ;
        minutes = minutes < 10 ? '0'+minutes : minutes ;
        seconds = seconds < 10 ? '0'+seconds : seconds ;
        milliseconds = milliseconds < 10 ? '0'+milliseconds : milliseconds ;
        stopwatch.innerHTML = hour+':'+minutes+':'+seconds+':'+milliseconds;
    }
    
    function callAPI(${userID},elapsedTime,${bearer}){
        const url ='https://api.glideapp.io/api/function/mutateTables';
        const data = {
            "appID": "yx58r6aGlO9tUxUcF6qZ",
            "mutations": [
                {
                    "kind": "set-columns-in-row",
                    "tableName": "native-table-mY7BoOk3lMm8vUckZgrL",
                     "columnValues": {
                            "stopstart": elapsedTime,
                    },
                    "rowID": "${userID}"
                }
            ]
        };
        const headers = {
            "Content-Type":"application/json",
            "Authorization": "${bearer}"
        };

        const options = {
            "method": "post",
            "Content-Type": "application/json",
            "headers": headers,
            "payload": JSON.stringify(data)
        };
        const response = UrlFetchApp.fetch(url,options);

        }


    </script>
  </body>
</html>`
  let enc = encodeURIComponent(ht);
  let index = ht.indexOf('id="stopwatch">');
  let string = ht.slice(index+15,index+26);
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri
}
