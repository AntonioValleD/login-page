const usernameLabel = document.querySelector('.username');
const passLabel = document.querySelector('.password');


if (usernameLabel.value != ''){
    usernameLabel.classList.remove('data-input');
    usernameLabel.classList.add('lb-style');
}

if (passLabel.value != ''){
    passLabel.classList.remove('data-input');
    passLabel.classList.add('lb-style');
}

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
