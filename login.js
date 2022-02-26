
document.getElementById('btn').addEventListener('click',function(){
    const mail = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (mail == 'alamin' && password == 'secret'){
        window.location.href = 'banking.html';
    }else{
        alert('please give the correct user name & password');
    }
});