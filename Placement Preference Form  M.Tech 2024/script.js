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




document.getElementById("i2").addEventListener('change',clickupload("fileurl2","1ca_lmndpFZvxlMqwFbx0g0BvZQxlqhTt","i2",531,650))

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

