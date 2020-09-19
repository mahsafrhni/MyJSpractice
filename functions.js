function changeText() {
    document.getElementById("p1").innerHTML = "Visit <a href='https://github.com/mahsafrhni'>My Git</a>"
}

function getNumbers() {
    var n1 = parseInt(prompt("enter first number:"));
    var n2 = eval(prompt("enter second number:"));
    var operate = prompt("enter operate:");
    var result = calc(n1, n2, operate);
    alert(result);
}

function calc(num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}