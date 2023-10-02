const password = document.querySelector("#textpassword");
const cheackbox = document.querySelector("#show");


cheackbox.addEventListener('click',function(){
    const type =password.getAttribute("type")=== "password" ? "text" : "password";
    password.setAttribute("type",type);
});