const generateBtn = document.getElementById('generate-btn');
const passwordOutput = document.getElementById('password-output');
const passwordLengthInput = document.getElementById('password-length');
const includeUppercase = document.getElementById('include-uppercase');
const includeLowercase = document.getElementById('include-lowercase');
const includeNumbers = document.getElementById('include-numbers');
const includeSymbols = document.getElementById('include-symbols');

generateBtn.addEventListener('click', () => {
    const passwordLength = parseInt(passwordLengthInput.value);
    const options = {
        uppercase: includeUppercase.checked,
        lowercase: includeLowercase.checked,
        numbers: includeNumbers.checked,
        symbols: includeSymbols.checked
    };
    const password = generatePassword(passwordLength, options);
    passwordOutput.value = password;
});
function generatePassword(length, options) {
    const characters = [];
    if (options.uppercase) {
        characters.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }
    if (options.lowercase) {
        characters.push(...'abcdefghijklmnopqrstuvwxyz');
    }
    if (options.numbers) {
        characters.push(...'0123456789');
    }
    if (options.symbols) {
        characters.push(...'!@#$%^&*()_+-={}:<>?,./');
    }
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters[Math.floor(Math.random() * characters.length)];
    }
    return password;
}

