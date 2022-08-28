function firstpage(){
    let firstpage=document.querySelector(".parent-div")
    let secondpage=document.querySelector(".parent-div2")
    firstpage.style.display="none"
    secondpage.style.display="block"
}
function backfirstpage(){
    let firstpage=document.querySelector(".parent-div")
    let secondpage=document.querySelector(".parent-div2")
    firstpage.style.display="block"
    secondpage.style.display="none"
}
function thirdpage(){
    let secondpage=document.querySelector(".parent-div2")
    let thirdpage=document.querySelector("#thirdpage")
    secondpage.style.display="none"
    thirdpage.style.display="block"
}
function secondpageback(){
    let secondpage=document.querySelector(".parent-div2")
    let thirdpage=document.querySelector("#thirdpage")
    secondpage.style.display="block";
    thirdpage.style.display="none";
}

function fourthpage(){
    let secondpage=document.querySelector("#thirdpage")
    let thirdpage=document.querySelector("#fourthpage")
    secondpage.style.display="none"
    thirdpage.style.display="block"
}
function thirdpageback(){
    let secondpage=document.querySelector("#thirdpage")
    let thirdpage=document.querySelector("#fourthpage")
    secondpage.style.display="block"
    thirdpage.style.display="none"
}

function fifthpage(){
    let secondpage=document.querySelector("#fourthpage")
    let thirdpage=document.querySelector("#sixthpage")
    secondpage.style.display="none"
    thirdpage.style.display="block"
}
function fourthpageback(){
    let secondpage=document.querySelector("#fourthpage")
    let thirdpage=document.querySelector("#sixthpage")
    secondpage.style.display="block"
    thirdpage.style.display="none"
}

function lastpage(){
    let secondpage=document.querySelector("#fifthpage")
    let thirdpage=document.querySelector("#sixthpage")
    secondpage.style.display="block"
    thirdpage.style.display="none"
}

function signup() { 
    let user_email = document.getElementById("user_email").value; 
    let password = document.getElementById("user_password").value; 
    let user_info; 
    if ( 
      user_email.length < 1 || 
      password.length < 1 
    ) { 
      alert("Please,fill all the information"); 
    } else { 
      user_info = { 
        user_email, 
        password, 
      }; 
      localStorage.setItem("user_info", JSON.stringify(user_info)); 
      document.getElementById("user_email").value=""; 
      document.getElementById("user_password").value=""; 
      alert("You've been sign up successful"); 
      window.location.href="./Login.html"
    } 
  } 