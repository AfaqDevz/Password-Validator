let lowerWords = /[a-z]/g;
let upperWords = /[A-Z]/g;
let numbers = /[0-9]/g;
let specialWords = /[!@#$%^&*()_+{}:':"|,..<[\]?]/g;


let eightBox = document.getElementById('eightBox');
let specialBox = document.getElementById('specialBox');
let lowerBox = document.getElementById('lowerBox');
let upperBox = document.getElementById('upperBox');
let numbersBox = document.getElementById('numbersBox');
let strongPass = document.getElementById('strongPass');


passCheck.onkeyup = () => {
    let passCheck = document.getElementById('passCheck').value;

    if(passCheck.match(lowerWords)){
        lowerBox.style.backgroundColor = 'DarkGreen';
    }
    else{
        lowerBox.style.backgroundColor = 'rgba(0, 0, 0, 0.441)';
    }

    if(passCheck.match(upperWords)){
        upperBox.style.backgroundColor = 'DarkGreen';
    }
    else{
        upperBox.style.backgroundColor = 'rgba(0, 0, 0, 0.441)';
    }

    if(passCheck.match(numbers)){
        numbersBox.style.backgroundColor = 'DarkGreen';
    }
    else{
        numbersBox.style.backgroundColor = 'rgba(0, 0, 0, 0.441)';
    }

    if(passCheck.match(specialWords)){
        specialBox.style.backgroundColor = 'DarkGreen';
    }
    else{
        specialBox.style.backgroundColor = 'rgba(0, 0, 0, 0.441)';
    }

    if(passCheck.length >= 8){
        eightBox.style.backgroundColor = 'DarkGreen';
    }
    else{
        eightBox.style.backgroundColor = 'rgba(0, 0, 0, 0.441)';
    }

    if(passCheck.match(lowerWords) && passCheck.match(upperWords) && passCheck.match(specialWords) && passCheck.match(numbers) && passCheck.length >= 8){
        strongPass.innerText = "Strong Password"
    }
    else{
        strongPass.innerText = " "
    }
}