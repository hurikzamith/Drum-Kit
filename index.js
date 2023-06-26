var buttons = document.querySelectorAll("button")
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/crash.mp3');

var tom2 = new Audio('sounds/tom2.mp3');
var tom3 = new Audio('sounds/tom3.mp3');
var tom4 = new Audio('sounds/tom4.mp3');


buttons.forEach(button => {
  button.addEventListener("click", function(){
    switch (this.innerHTML) {
      case 'w':
        crash.play();
        break;
      case 'a':
        kickBass.play();
        break;
      case 's':
        crash.play();
        break;
      case 'd':
        kickBass.play();
        break;
      case 'j':
        crash.play();
        break;
      case 'k':
        kickBass.play();
        break;
      case 'l':
        crash.play();
        break;

        default:
    }

  })
})

document.addEventListener("keydown", function (event) {
  switch (event.key) {
    case 'w':
      crash.play();
      break;
    case 'a':
      kickBass.play();
      break;
    case 's':
      crash.play();
      break;
    case 'd':
      kickBass.play();
      break;
    case 'j':
      crash.play();
      break;
    case 'k':
      kickBass.play();
      break;
    case 'l':
      crash.play();
      break;

      default:
  }
})
