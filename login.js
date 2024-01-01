const loginForm=document.getElementById("login-form");
// console.log(loginForm);
const loginButton=document.getElementById("login-form-submit");
// console.log(loginButton);
const loginErrorMsg=document.getElementById("login-error-msg");
// console.log(loginButton);
loginButton.addEventListener("click",(e)=>{
    e.preventDefault();
    const username=loginForm.username.value;
    const password=loginForm.password.value;
if( username ==="renuka"&& password ==="12345"){
    alert("you have successfuly logged in");
    location.reload();
}
else{
    loginErrorMsg.style.opacity=1;
}
})
