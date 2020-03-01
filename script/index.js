const url = 'https://api.spacexdata.com/v3/launches/upcoming';

fetch(url)
.then(function(launchdate) {
    return launchdate.json();    
})
.then(function(launchdate) {
    return launches(launchdate);
})
.catch(error => console.log(error));


function launches(nextLaunch){
    LaunchData(nextLaunch[0]);
}

function LaunchData(launchdate) {
   var unixtimestamp = (launchdate.launch_date_unix);


 var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


 var date = new Date(unixtimestamp*1000);


 var year = date.getFullYear();


 var month = months_arr[date.getMonth()];


 var day = date.getDate();


 var hours = date.getHours();

 
 var minutes = "0" + date.getMinutes();


 var seconds = "0" + date.getSeconds();


 var convdataTime = month+' '+day+' '+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    console.log(convdataTime)
 
    


document.getElementById("launch").innerHTML = convdataTime + ' CET';


}




var modal = document.getElementById("myModal");


var btn = document.getElementById("myBtn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function validateForm() {
    

    var email = document.getElementById("email").value;


    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    var emailCheck = emailPattern.test(email); 


    var eerror = document.getElementById('emailError');

    var succ = document.getElementById('ThankYou');


    if (emailCheck === false) {
    eerror.style.display = 'block';}

    else {
    modal.style.display = "none";
    succ.style.display = "block";}
    
    };
   
