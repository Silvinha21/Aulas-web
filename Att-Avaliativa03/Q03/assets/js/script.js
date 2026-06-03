const login = document.querySelector('#login');

login.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    if(email === "admin" && senha === "admin") {

        localStorage.setItem("token", "jwt123");

        alert("Login realizado com sucesso!");
        
    } else {
        alert("E-mail ou senha incorretos.");
    }
});