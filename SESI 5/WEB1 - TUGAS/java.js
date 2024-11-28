let usernameInput = document.getElementById('usernameInput');
let passwordInput = document.getElementById('passwordInput');
let loginButton = document.getElementById('loginButton');
let logoutButton = document.getElementById('logoutButton');
let registerButton = document.getElementById('registerButton');


let admin = document.getElementById('admin');
let basic = document.getElementById('basic');

basic.style.display = 'none';
admin.style.display = 'none';
logoutButton.style.display = 'none';

function onLogin(){
    console.log('tombol login di klik');
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    localStorage.getItem("username", usernameInput.value);
    location.reload();
    
    if (usernameInput.value == 'admin' && passwordInput.value == 'admin1234'){
        localStorage.setItem("role", "admin");
        admin.style.display = 'block';
        basic.style.display = 'none';
    }   else {
        localStorage.setItem("role", "basic");
        basic.style.display = 'block';
        admin.style.display = 'none';
    }
}

function onRegister() {
    console.log('tombol register di klik');
    console.log(usernameInput.value);
    console.log(passwordInput.value);
    localStorage.setItem("username", usernameInput.value);
    location.reload();

    if (usernameInput.value == usernameInput.value && passwordInput.value == passwordInput.value){
        localStorage.setItem("role", "ter-register");
    }   else {
        localStorage.setItem("role", "ter-register");
    }
}

if (localStorage.getItem('username')){
    usernameInput.style.display = 'none';
    passwordInput.style.display = 'none';
    loginButton.style.display = 'none';
    logoutButton.style.display = 'block';
    
    if (localStorage.getItem('role') == 'admin'){
        admin.style.display = 'block';
    }else {
        basic.style.display = 'block';
    }
}

function onLogout(){
    console.log('tombol logout telah di klik');
    localStorage.clear();
    location.reload();

}







// const myName = "FYCANANDA";

// let root = document.getElementById('root');
// root.textContent = myName + ' ' + myName + ' ' + myName;
// root.style.backgroundColor = 'tomato';
// root.style.color = 'white';
// root.style.fontSize = '2em';
// root.style.textAlign = 'center';
// root.style.height = '100vh';


