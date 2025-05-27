const eyeButton = document.getElementById('toggle-password-btn');
const passwordInput = document.getElementById('password');

eyeButton.addEventListener('click', () => {
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
    }
    else{
        passwordInput.type = 'password';
    }
})