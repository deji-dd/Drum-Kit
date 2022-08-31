var buttons = document.querySelectorAll(".drum")
for (x of buttons) {
  x.addEventListener("click", handleClick)
}
document.addEventListener("keydown", handleKey)

function handleClick() {
  var buttonInnerHTML = this.innerHTML
  buttonAnimation(buttonInnerHTML)
  switch (buttonInnerHTML) {
    case "w":
      var crash = new Audio("sounds/crash.mp3")
      crash.play()
      break;
    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3")
      kickbass.play()
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3")
      snare.play()
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
      break;
    default:
      console.log(buttonInnerHTML)

  }
}

function handleKey(event) {
  buttonAnimation(event.key)
  switch (event.key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3")
      crash.play()
      break;
    case "a":
      var kickbass = new Audio("sounds/kick-bass.mp3")
      kickbass.play()
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3")
      snare.play()
      break;
    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3")
      tom1.play()
      break;
    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3")
      tom2.play()
      break;
    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3")
      tom3.play()
      break;
    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3")
      tom4.play()
      break;
    default:
      console.log(event.key)

  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey)
  activeButton.classList.toggle("pressed")
  setTimeout(() => {
    activeButton.classList.toggle("pressed")
  }, 100)
}
