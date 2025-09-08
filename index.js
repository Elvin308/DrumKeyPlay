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

//Add event listener for keyboard down
document.addEventListener("keydown", (event) => {
    switch(event.key.toUpperCase()){
        case "K":
            new Audio("sounds/crash.mp3").play();
            break;
        case "L":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "J":
            new Audio("sounds/snare.mp3").play();
            break;
        case "W":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "A":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "S":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "D":
            new Audio("sounds/tom-4.mp3").play();
            break;
        default:
            console.log(event.key + "Not implemented for sound");
    }
});