const usernameLabel = document.querySelector('.username');
const passLabel = document.querySelector('.password');

function userValue(value){
    if (value == ''){
        usernameLabel.classList.remove('data-input');
        usernameLabel.classList.add('lb-style');
    }
    else{
        usernameLabel.classList.remove('lb-style');
        usernameLabel.classList.add('data-input');
    }
}
function passValue(value){
    if (value == ''){
        passLabel.classList.remove('data-input');
        passLabel.classList.add('lb-style');
    }
    else{
        passLabel.classList.remove('lb-style');
        passLabel.classList.add('data-input');
    }
}