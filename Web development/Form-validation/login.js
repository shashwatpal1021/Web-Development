function validation(){
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    var username=document.getElementById("username");
    var password=document.getElementById("password");

    if(user == ""){
        username.innerHTML=" **Please fill the username field";
        return false;
    }
    if(user.length <= 2 || user.length > 20){
        username.innerHTML=" ** Username length must be between 2 and 20";
        return false;
    }if(!isNaN(user)){
        username.innerHTML=" ** only characters are allowed";
        return false;
    }
    if (pass==""){
        password.innerHTML=" ** Please fill the password field";
        return false;
    }
    if(pass.length <= 8 || pass.length > 20){
        password.innerHTML=" ** Passwords length must be between  5 and 20";
        return false;
    }
    if (pass != confirmpass) {
        document.getElementById("confrmpass").innerHTML=" ** Password does not match the confirm password";
        return false;
    }
}