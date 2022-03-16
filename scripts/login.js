const loginBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');
const emailInput = document.querySelector('#InputEmail');
const passwordInput = document.querySelector('#InputPassword');

// Check if all fields are filled
const validateLogin = () => {
    if (emailInput.value === '' || passwordInput.value === '') {
        window.alert('Por favor preencha todos os campos.')
    } else if (logged === true ) {
        localStorage.getItem('login')
  
    }
}

loginBtn.addEventListener('click',validateLogin)
  
// Check Credentials
    const login = () =>{
    let emailValue = localStorage.setItem('email', emailInput.value);
    let passwordValue = localStorage.setItem('password', passwordInput.value);

    let email = window.localStorage.getItem('email')
    let password = window.localStorage.getItem('password')

    if(emailValue === email && passwordValue === password)
    {
        localStorage.setItem('logged', true);
    } else {
        alert('Usuário ou senha inválido.')
    }
}

// Check Login Status
const checkLogin = () => {
    let logged = localStorage.getItem('logged');
    if (logged !== true) {
      window.alert('Você precisa estar autenticado para utilizar o sistema.')
      window.location.href="index.html"
    }
}