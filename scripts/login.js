const loginBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');
const emailInput = document.querySelector('#InputEmail');
const passwordInput = document.querySelector('#InputPassword');
let logged = localStorage.getItem('logged');

// Check Login Status
const checkLogin = () => {
    if (logged !== true) {
      window.alert('Você precisa estar autenticado para utilizar o sistema.')
      window.location.href="index.html"
    }
}

// Check Credentials
const login = () =>{
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);

    let email = window.localStorage.getItem('email')
    let password = window.localStorage.getItem('password')

    if(emailInput.value === email && passwordInput.value === password)
    {
        localStorage.setItem('logged', true);
    } else {
        alert('Usuário ou senha inválido.')
    }
}

// Check if all fields are filled
const validateLogin = () => {
    if (emailInput.value === '' || passwordInput.value === '') {
        window.alert('Por favor preencha todos os campos.')
    } else if (logged === true ) {
        window.alert('Você já está logado')
    } else{
        login()
    }
}

loginBtn.addEventListener('click',validateLogin)
