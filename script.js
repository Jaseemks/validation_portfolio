function validate() {
    const fname=document.getElementById("fname").value;
    const lname=document.getElementById("lname").value;
    const email=document.getElementById("email").value;
    const mobile=document.getElementById("mobile").value;
    const place=document.getElementById("place").value;
    if(fname.length==0)
    {
        alert("Enter a valid First Name")
        return false;
    }
    if(lname.length==0)
    {
        alert("Enter a valid Last Name")
        return false;
    }
    if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)==false)
    {
        alert("Enter a valid Email")
        return false;
    }
    if (mobile.length === 0 || isNaN(mobile)) {
        alert("Enter a valid Mobile Number");
        return false;
    }
    
    if(place.length==0)
    {
        alert("Enter a valid Place")
        return false;
    }
    alert("Submitted successfully")
}

function login(){
    const uname=document.getElementById("username").value;
    const password=document.getElementById("password").value;
    if(uname.length==0)
    {
        alert("Enter a valid User Name")
        return false;
    }
    if(password.length==0)
    {
        alert("Enter a valid Password")
        return false;
    }
    
    window.location.href="login.html";
    
}
