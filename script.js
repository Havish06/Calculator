let resultbox = document.getElementById("result-nums");
let expression = "";

document.querySelectorAll(".buttons").forEach(button => {
    button.addEventListener("click", function() {
        let value = button.innerText;

        if (value === "=") {
            expression = eval(expression);
            // resultbox.innerText = expression;
            resultbox.innerText = "PURNIMA IS FAT PIECE OF SHIT";
        } 
        else if (value === "C") {
            expression = "";
            resultbox.innerText = "";
        }
        else {
            expression += value;
            resultbox.innerText = expression;
        }
    });

});




