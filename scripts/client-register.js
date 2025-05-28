const currentUser = {
    email: '',
    password: '',
    endereco: '',
    perfil: ''
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
  const endereco = formData.get('user-endereco');

  if (!email || !password || !endereco) {
    alert('Preencha todos os campos');
    return;
  }

  currentUser.email = email;
  currentUser.password = password;
  currentUser.endereco = endereco;
  currentUser.perfil = 'usuario';

  sessionStorage.setItem("user", JSON.stringify(currentUser));
  window.location.href = 'home_page.html';
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