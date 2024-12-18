const textInput = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", () => {
    const lowerCase = textInput.value.toLowerCase().replace(/[^a-z0-9]/g,"")

    if (textInput.value === "") {
        alert("Please input a value");
    } else if (textInput.value.length === 1) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else if (lowerCase === [...lowerCase].reverse().join("")) {
        result.innerText = `${textInput.value} is a palindrome`;
    } else {
        result.innerText = `${textInput.value} is not a palindrome`;
    }
});