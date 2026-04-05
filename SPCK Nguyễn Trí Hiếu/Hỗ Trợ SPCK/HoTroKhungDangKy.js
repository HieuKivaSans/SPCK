
let lowerCaseLetter = /[a-z]/g;
let upperCaseLetter = /[A-Z]/g;
let number = /[0-9]/g;

if (unsername.length < 6) {
    alert("Username must be atleast 6 characters");
} else if (password.length < 8) {
    alert("Password must be atleast 8 characters");
} else if (!password.match(lowerCaseLetter)) {
    alert("Password must contain a lowercase letter");
} else if (!password.match (upperCaseLetter)) {
    alert("Password must contain an uppercase letter");
} else if (!password.match (numbers)) {
    alert("Password must contain a number or special character");
}