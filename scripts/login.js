const loginLogout = document.querySelector('.openLogin');
const loginBtn = document.querySelector('.signInBtn');
const signUpBtn = document.querySelector('.signUpBtn');
const emailInput = document.querySelector('#InputEmail');
const passwordInput = document.querySelector('#InputPassword');
let logged = localStorage.getItem('logged');

// Check Login Status
const checkLogin = () => {
    if (logged !== true) {
        window.alert('Você precisa estar autenticado para utilizar o sistema.')
        window.location.href = "index.html"
    }
}

// Check Credentials
const login = () => {
    localStorage.setItem('email', emailInput.value);
    localStorage.setItem('password', passwordInput.value);

    let email = window.localStorage.getItem('email')
    let password = window.localStorage.getItem('password')

    if (logged === true) {
        window.alert('Usuário já logado no sistema.');
    } else if (emailInput.value === '' || passwordInput.value === '') {
        window.alert('Por favor preencha todos os campos.')
    } else if (emailInput.value === email && passwordInput.value === password) {
        localStorage.setItem('logged', true);
        loginLogout.innerText = 'Logout';
        loginLogout.classList.remove('btn-primary')
        loginLogout.classList.add('btn-warning')
    }
    else {
        alert('Usuário ou senha inválido.')
    }
}

const logout = () => {
    if (loginLogout.innerText === 'Logout') {
        window.localStorage.clear();
        loginLogout.innerText = 'Login';
        loginLogout.classList.remove('btn-warning')
        loginLogout.classList.add('btn-primary')
    } else {
    login();
    }
}

loginBtn.addEventListener('click', login)
loginLogout.addEventListener('click', logout)


