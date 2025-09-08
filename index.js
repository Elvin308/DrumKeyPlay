//Add event listener for all the drum buttons
//Play sound for each button when clicked
document.querySelectorAll(".drum-button").forEach((button, index) =>{
    button.addEventListener("click", () => {
        new Audio("sounds/tom-" +(index + 1)+ ".mp3").play();
    });
});