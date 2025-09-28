var buttons = document.querySelectorAll(".drum");

for( var i = 0; i < buttons.length; i++){

buttons[i].addEventListener("click", function (){

 // Briefly changes the color of the button to skyblue when clicked
   this.style.color = "skyblue";
   this.style.transform = "scale(1.1)"; 
   setTimeout(() => {
    this.style.color = "#a86346";
    this.style.transform = "scale(1)";
  }, 100);

  if (this.innerHTML === "l"){
    this.style.boxShadow = "0 0 20px 5px #007bff";
  };
  setTimeout(() => {
    this.style.boxShadow = "none";
  }, 100);


  
// plays the sound corresponding to the button pressed
var buttonInnerHTML = this.innerHTML;

switch (buttonInnerHTML) {
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
        console.log(buttonInnerHTML);
}

})








// listener for when keyboard is used

 document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;


    // Briefly changes the color of the button to skyblue when clicked

    var activeButton = document.querySelector("." + keyPressed);
    if (activeButton) {
    activeButton.style.color = "skyblue";
    activeButton.style.transform = "scale(1.1)"; 
    setTimeout(() => {
      activeButton.style.color = "#a86346";
      activeButton.style.transform = "scale(1)";
    }, 100);
  }

    if (keyPressed === "l") {
        activeButton.style.boxShadow = "0 0 20px 5px #007bff";
    } 
    setTimeout(() => {
       activeButton.style.boxShadow = "none";
    }, 100);


// plays the sound corresponding to the button pressed

switch (keyPressed) {
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
        console.log(keyPressed);
}


  });


};

