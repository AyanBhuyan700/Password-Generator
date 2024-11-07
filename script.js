let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let lowerCase = 'abcdefghijklmnopqrstuvwxyz';
let specialCharacter = '@#$%^&*_-+=?/';
let number = '0123456789';
let length = 12;
let allChar = upperCase + lowerCase + specialCharacter + number;
let display = document.querySelector("#Password");
let value = display.value;
function getRandomNum() {
let rand = [];
    for (let i = 0; i < length; i++) {
       let randomIndex = Math.floor(Math.random()*allChar.length);
       rand.push(allChar[randomIndex])
    }
    display.value = rand.join(''); 
}

function getCopy() {
    display.select();
    document.execCommand("copy"); 
    // alert('Password copied to clipboard: ' + display.value);
}


