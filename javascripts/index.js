window.onload = function() {
  
  //== DOM VARIABLES ==//
  let button = document.getElementById("button")
  let canvas = document.getElementById("canvas")
  let placeholder = document.getElementsByClassName("placeholder")[0]
  let header = document.getElementsByClassName("header")[0]

  //== BUTTON LOGIC ==//
    button.onclick = (e)=> {
    e.preventDefault()
    Game.init("canvas")
    canvas.classList.remove("display-none")
    placeholder.classList.add("display-none")
    header.style.background = "none"
  }
  if(Game.isGameOver){
   
    setInterval( () => {
      button.classList.toggle("btn-flicker")
    },1000)
  }
 
 
};
