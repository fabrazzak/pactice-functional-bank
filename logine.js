
// start logine information
document.getElementById('login-btn').addEventListener('click', function(){
    const inputEmail= document.getElementById('login-email');
    inputEmail.value;
    const inputPass=document.getElementById('login-password');
    inputPass.value;
    if(inputEmail.value!=''&& inputPass.value!=''){
        window.location.href="banking.html";
    }
})
// end login information 





