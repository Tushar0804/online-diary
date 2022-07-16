function validate()
{
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="Tanuj" && password=="Rawat")
    {
        // alert("Login Succesfully");
        // alert(window.location="http://127.0.0.1:5500/index.html");
        location.replace("http://127.0.0.1:5500/index.html");
    }
    else{
        alert("Login Failed");
    }


}