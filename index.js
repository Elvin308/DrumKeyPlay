//Add event listener for all the drum buttons
document.querySelectorAll(".drum-button").forEach(button =>{
    button.addEventListener("click", () => {
        playSound(button.innerText);
    });
});

//Add event listener for keyboard down
document.addEventListener("keydown", (e) => playSound(e.key));


//Function that plays sound based on the key/letter passed in
function playSound(letter){
    buttonFlashAnimation(letter);
    letter = letter.toUpperCase();
    switch(letter){
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
            console.log(letter + "Not implemented for sound");
    }
}

//Add flash animation to button when pressed/keydown
function buttonFlashAnimation(letter){
    document.querySelector("#" + letter.toLowerCase() + ".drum-button").classList.add("flash");
    setTimeout(() => {
        document.querySelector("#" + letter.toLowerCase() + ".drum-button").classList.remove("flash")
    }, 500);
}