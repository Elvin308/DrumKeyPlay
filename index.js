//Add event listener for all the drum buttons
//Play sound for each button when clicked
document.querySelectorAll(".drum-button").forEach((button, index) =>{
    button.addEventListener("click", () => {
        switch(button.innerHTML){
            case "K":
                new Audio("sounds/crash.mp3").play();
                break;
            case "L":
                new Audio("sounds/kick-bass.mp3").play();
                break;
            case "J":
                new Audio("sounds/snare.mp3").play();
                break;
            default:
                new Audio("sounds/tom-" +(index + 1)+ ".mp3").play();
        }
    });
});