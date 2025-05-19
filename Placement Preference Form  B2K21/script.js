let url = "https://script.google.com/macros/s/AKfycbzjsZZ7VB5r1_XZUhWvkyDUDIvQM7qVQYu7gtZhChTMhiAyjfXGuHAQg21flXWsg-IOSg/exec";
let url2 ="https://script.google.com/macros/s/AKfycbzPXrrCtGbkH8SyEO8tgNCOkYXxDV3NlJx8l7SvAd9g-ZH_ztd1wrp1lz-4N_EUCy2YIw/exec";

let fn1 = document.getElementById("fn1");
let u1 = document.getElementById("u1");
let img = document.querySelector("img1");

let c = document.getElementById("bt3");
let load = document.getElementById("load");
let message = document.getElementById("message");
let bfu1 = document.getElementById("bfu1");
let bfd1 = document.getElementById("bfd1");
let n1 = document.getElementById("n1");




document.getElementById("i2").addEventListener('change',clickupload("fileurl2","1MEW5I5YVF6tYur0ClqEjyDzEMLl4GQKD","i2",531,650))

function clickupload(folurl,fol,ii,width,height){
    let file1 = document.getElementById(ii);
    let fileurl1 = document.getElementById(folurl);
    file1.addEventListener('change',()=>{
    let fr = new FileReader();
    let img1 = new Image()
    img1.src = window.URL.createObjectURL(event.target.files[0])
    img1.onload = () => {
       if(img1.width === width && img1.height === height){
            alert(`Nice, image is the right size. It can be uploaded`)
            // upload logic here
            document.getElementById("loader").style.display="block"; 
            document.getElementById("load").style.display="initial";
            document.getElementById("message").textContent="Uploading....";
            fr.addEventListener('loadend',()=>{
                let res = fr.result;
                let v = fileurl1.value.replace("/"+fol,"");
                let folder = "15GgsPpNztp41g7Sw7s7LOT0vhnYnViei";
        
                let spt = res.split("base64,")[1];
                let obj = {
                    base64:spt,
                    type:file1.files[0].type,
                    name:file1.files[0].name,
                    folder,
                    v
        
                }
                fetch(url,{
                    method:"POST",
                    body:JSON.stringify(obj)
                })
                .then(r=>r.text())
          
                .then(data=>fileurl1.value=(data+"/"+fol))
                .then(data=>console.log(fileurl1.value)&(onuploadcomplete (ii)))
                .then(console.log(v))
            })
            fr.readAsDataURL(file1.files[0])
            } else {
            alert(`Sorry, this image doesn't look like the size we wanted. It's 
       ${img1.width} x ${img1.height} pixels but we require ${width} x ${height} pixels size image.`);

   
       }                
    }

}) 

}

function onuploadcomplete (){

    document.getElementById("loader").style.display="none"; 
    document.getElementById("message").textContent="Upload Successful";
    setTimeout(function () { document.getElementById("load").style.display="none"; },2000);
}

function dels () {
let url2 ="https://script.google.com/macros/s/AKfycbxqjblQueqrincM8sidvm2qNENxddM_NUgEmi_oIee61ciJjj06dEoDz2TCxv9HzovU3w/exec";
let f1name= fileurl1.value;
let foldername12= "1afoo9Ehr8BwFBVqCzU44spPjNm3qtE4A";
let obj2 = {
    f1name,
    foldername12
}
fetch(url2,obj2)
.then(data=>console.log(data))
}

// Set the target date and time for the countdown
const targetDate = new Date("Mau 20, 2025 18:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
  // Get the current date and time
  const now = new Date().getTime();

  // Calculate the time difference between the current date/time and the target date/times
timeDifference = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the calculated time in the HTML elements
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
  if (timeDifference < 0) {
    document.getElementById("minutes").textContent = - (minutes + 1);
    document.getElementById("seconds").textContent = - (seconds);

    document.getElementById("daysn").style.display="none";
    document.getElementById("hoursn").style.display="none";
    document.getElementById("timer name").innerHTML = "Form is about to expire <br><br> Form will close in 1 hour ";
  }
  // Check if the countdown has expired
  if (timeDifference+3600000 < 0) {
    clearInterval(countdownInterval);
    document.getElementById("timer name").innerHTML = "";
    document.getElementById("timer").innerHTML = "Form is expired";
    setTimeout(closeform(),5000)
  }
  else{
    getstatus()

}
}, 1000);


function closeform(){
    document.getElementById("ll").textContent="";
    document.getElementById("frqa").style.display="none";
    clickto();
}

function clickto(){
 var val = "Placement Preference Form B2K21";
 var condition = "Inactive";
 console.log(formDataString);
   var formDataString = val+"/"+condition;
  console.log(formDataString)
      // Send a POST request to your Google Apps Script
      fetch(
        "https://script.google.com/macros/s/AKfycbxR9JjLW-_xKlNmW7-2OmoqYeHLkfZn45DJL-kazZ4Nl_gGqbUNwJk96DmvpyGzxAPp/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formDataString,
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
        }
      )

        .then(function (response) {

          // Check if the request was successful
          if (response) {
           
            return response; // Assuming your script returns JSON response
          } else {
            throw new Error("Failed to submit the form.");
          }
        })
        .then(async function (data) {
          const result1 = await data.json();
          console.log(result1.data2);
          if (result1.data2 == "Inactive"){
            window.location='end.html';
        }
        })

        .catch(function (error) {
          // Handle errors, you can display an error message here
          console.error(error);
          document.getElementById("message").textContent =
            "An error occurred while submitting the form.";
          document.getElementById("message").style.display = "block";
        });
    }
