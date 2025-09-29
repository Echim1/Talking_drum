
// function to play sounds

function makeSound (key){
    switch (key) {
    case "w":
        var tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();      
        break;

    case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

     case "s":
        var tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;


     case "d":
        var tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;


     case "j":
        var kick = new Audio("sounds/kick.mp3");
        kick.play();
        break;


     case "k":
        var snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;


     case "l":
        var crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;


    default:
        console.log(key);
}

}



// listens for button clicks and call the function to play sound
var buttons = document.querySelectorAll(".drum");
for( var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener ("click", function (){
        var buttonInnerHTML = this.innerHTML;
        makeSound (buttonInnerHTML);


        // Briefly changes the color of the button to skyblue when clicked
        this.style.color = "skyblue";
        this.style.transform = "scale(1.1)"; 

        setTimeout(() => {
            this.style.color = "#a86346";
            this.style.transform = "scale(1)";
        }, 100);

        if (this.innerHTML === "l"){
            this.style.boxShadow = "0 0 20px 5px #007bff";
        setTimeout(() => {
            this.style.boxShadow = "none";
        }, 100);

        };
        
    });

};



// Listens for when Keyboard is pressed

document.addEventListener("keydown", function (event) {
    makeSound(event.key.toLowerCase());



// Briefly changes the color of the button to skyblue when clicked
    var activeButton = document.querySelector("." + event.key.toLowerCase());
    if (activeButton) {
    activeButton.style.color = "skyblue";
    activeButton.style.transform = "scale(1.1)"; 
    setTimeout(() => {
      activeButton.style.color = "#a86346";
      activeButton.style.transform = "scale(1)";
    }, 100);
  }

    if (event.key === "l" && activeButton) {
        activeButton.style.boxShadow = "0 0 20px 5px #007bff";
    setTimeout(() => {
       activeButton.style.boxShadow = "none";
    }, 100);
    } 
    

});