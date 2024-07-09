//  add click even handle 
document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFiled = document.getElementById('username');
    const email = emailFiled.value;
   

    const passwordField = document.getElementById('password');
    const password = passwordField.value;

    if(email == 'autoLunch' && password == "12345678"){
        window.location.href = 'instruction.html';
    }
    else{
        alert('Please Enter Right password');
    }

})