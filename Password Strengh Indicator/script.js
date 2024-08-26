const inputField = document.getElementById('password');
const outputField = document.getElementById('indicator');

inputField.addEventListener('input', () => {
    console.log(inputField.value);
    let password = inputField.value;

    if (password.length < 8) {
        outputField.innerText = "Password is too short";
        outputField.style.color = "red";
    } else {
        console.log('is lowercase', (password.search(/[a-z]/)) )
        if (password.search(/[a-z]/) == -1) {
            outputField.innerText = "Password is missing a lower letter";
        outputField.style.color = "red";
        } else if (password.search(/[A-Z]/) == -1) {
            outputField.innerText = "Password is missing a upper letter";
        outputField.style.color = "red";
        } else if (password.search(/[0-9]/) == -1) {
            outputField.innerText = "Password is missing a numeric letter";
        outputField.style.color = "red";
        } else if (password.search(/[!\ @\ #\ $\ %\ ^\ &\ *\ -\ _\ =\ + ]/) == -1) {
            outputField.innerText = "Password is missing a special character";
        outputField.style.color = "red";
        } else {
            outputField.innerText = "Password is strong";
            outputField.style.color = "green";
        }
    }
    
})