document.getElementById('submit').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email == 'iktedar@gmail.com' && password == 'AmarBank'){
        window.location.href= 'bank.html';
    }
    else{
        alert('Invalid User');
    }
})