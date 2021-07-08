const form = document.getElementById("loginForm");

const showPassword = () => {
    var passwordInput = document.getElementById("passwordValue");
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
            console.log(error);
        })
}
form.addEventListener('submit', login);