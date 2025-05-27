const currentUser = {
    email: '',
    password: ''
};

const eyeButton = document.getElementById('toggle-password-btn');
const passwordInput = document.getElementById('password');
const eyeIcon = document.querySelector('button img');
const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const password = formData.get('user-password');
    const email = formData.get('user-email');

    console.log(email);
    if(!email || !password){
        alert('Preencha todos os campos');
        return;
    }

    currentUser.email = email;
    currentUser.password = password;
});

eyeButton.addEventListener('click', () => {
    if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        eyeIcon.src = '/images/eye-visible.svg';
    }
    else{
        passwordInput.type = 'password';
        eyeIcon.src = '/images/eye-hidden.svg';
    }
});