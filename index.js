var buttons = document.querySelectorAll("button")
var crash = new Audio('sounds/crash.mp3');

buttons.forEach(button => {
  button.addEventListener("click", function(){
    this.style.color= "white";
    // crash.play();
  })
})
