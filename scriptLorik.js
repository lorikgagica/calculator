/***************************************
 * CALCULATOR
 */

// Actually it is quite simple, just use logic just as in the 8. Filter project with dataset ! Then use eval() for calculation

const buttons = document.querySelectorAll(".btn");
const buttonEqual = document.querySelector(".btn-equal");
const buttonClear = document.querySelector(".btn-clear");
let screen = document.getElementById("screen");


buttons.forEach((button)=> {
    button.addEventListener("click", function(event){
        console.log(event.target.dataset.num)
        let num = event.target.dataset.num; // Must be placed here 
        screen.value += num;
        console.log(screen.value)
    })
});

// When we press the equal button
buttonEqual.addEventListener("click", function(event){
    if (screen.value === "") {
        screen.value = "No calculations made.";
        setTimeout(function(){
            screen.value = ""
        }, 1000);
    } else {
        let result = parseFloat(eval(screen.value));
        screen.value = result;
    }
});

// When we press the clear button
buttonClear.addEventListener("click", function(event) {
    screen.value = "";
});
