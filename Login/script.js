let form = document.getElementById("loginForm");
let errorMessage = document.getElementById("errorMessage");
let passwordInput = document.getElementById("passwordValue");
let emailInput = document.getElementById("emailValue");

const showPassword = () => {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

const login = (e) => {
    e.preventDefault()
    axios.post('https://damp-fortress-19499.herokuapp.com/api/v1/auth/sign-in', {
            email: e.target.email.value,
            password: e.target.password.value
        })
        .then(function(response) {
            localStorage.setItem("userFirstName", response.data.data.firstName);
            localStorage.setItem("userLastName", response.data.data.lastName)
            localStorage.setItem("userEmail", response.data.data.email)
            localStorage.setItem("token", response.data.data.token)
        })
        .then(function() {
            window.location.href = "http://127.0.0.1:5500/Landing%20page/index.html";
        })
        .catch(function(error) {
            errorMessage.innerText = 'Please provide valid login details'
            emailInput.classList.add("redBorder")
            passwordInput.classList.add("redBorder")
        })
}
form.addEventListener('submit', login);