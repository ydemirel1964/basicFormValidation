const form = document.getElementById("form");
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");
const rePassword = document.getElementById("rePassword");

const errors = {
    userName: "Kullanıcı Adınızı Kontrol Ediniz",
    email: "Email Kontrol Ediniz",
    email2: "Email Hatalı",
    password: "Parola Kontrol Ediniz",
    rePassword: "Parola Kontrol Ediniz",
};

form.addEventListener("submit", function (e) {
    e.preventDefault();
    control(userName, 5, 20);
    control(email);
    validateEmail(email)
    control(password, 5, 20);
    control(rePassword, 5, 20);
    checkPasswords(password,rePassword);
});


function control(input, min = 0, max = 1000) {

    input.className = "form-control success";
    input.nextElementSibling.innerText = "";
    checkLenght(input, min, max);
    if (input.value == "") {
        input.className = "form-control error";
        input.nextElementSibling.innerText = errors[input.id];
    } 
}

function validateEmail(email) {
   if (!emailRegexControl(email.value)) {
    email.className = "form-control error";
    email.nextElementSibling.innerText = errors[email.id + "2"];
}
}

function emailRegexControl(email){
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function checkLenght(input, min, max) {
    if (input.value.length < min) {
        error(input, input.id + " En az " + min + " karakter olmalıdır.")
    } else if (input.value.length > max) {
        error(input, input.id + " En fazla " + max + " karakter olmalıdır.")
    }
}

function error(input, errorMessage) {
    input.className = "form-control error";
    input.nextElementSibling.innerText = errorMessage;
}

function checkPasswords(password, rePassword) {
    if (password.value !== rePassword.value) {
        password.className = "form-control error";
        rePassword.className = "form-control error";
        password.nextElementSibling.innerText = "Password ile RePassword uyuşmadı.";
        rePassword.nextElementSibling.innerText = "Password ile RePassword uyuşmadı.";
    }
}