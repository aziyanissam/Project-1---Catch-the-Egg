  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const startScreen = document.querySelector("#firstPage");
  const lastScreen = document.querySelector(".gameover");

  //setting canvas height and width
  
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //variable

  
  let totalScore = 0;
  let gameOver = false;
  
  // //basket variable
  let bWidth = 110;
  let bHeight = 120;
  let bX = 730;
  let bY = 650;
  const bSpeedValue = 5


  //backgroung image
  const backgroundImg = new Image()
  backgroundImg.src = "Images/fh.jpg"
  const henImg1 = new Image()
  henImg1.src = "Images/hen2-transformed.png"
  const henImg2 = new Image()
  henImg2.src = "Images/hen2-transformed.png"
  const henImg3 = new Image()
  henImg3.src = "Images/hen2-transformed.png"
  const henImg4 = new Image()
  henImg4.src = "Images/hen2-transformed.png"
  const henImg5 = new Image()
  henImg5.src = "Images/hen2-transformed.png"
  const basketImg = new Image()
  basketImg.src = "Images/bask.png"

  let isBasketGoingLeft = false;
  let isBasketGoingRight = false;
  let intervelId;

  window.onload = () => {
    lastScreen.style.display = "none"
    canvas.style.display = "none"
  
    document.getElementById('start-button').onclick = () => {
      gameOver = false;
      StartGame();
      let intervelId = setInterval(()=>{
        // let x = [350,550,750,950,1150]
        // const randomIndex = Math.floor(Math.random() * eggs.length);
        // for (i=0;i<x.length;i++){
          
        //   let newEgg =  new Egg(x[i], 170)
        //   eggs.push(newEgg)
        // }
        const x = [350, 550, 750, 950, 1150];
        const randomIndex = Math.floor(Math.random() * x.length);
        for(i=0;i<x.length;i++){
        const newX= x[randomIndex];
        const newEgg = new Egg(newX, 170);
        eggs.push(newEgg);
        }

      },3000)
      
    };

    function basketMove(){
      if (isBasketGoingLeft) {
        if (bX > 0) {
          bX -= bSpeedValue;
        }
      } 
      else if (isBasketGoingRight) {
        if (bX < canvas.width - bWidth) {
          bX += bSpeedValue;
        }
      }
    }

  
  
  //draw egg
  class Egg {
    constructor(x, y) {
      this.x = x;
      this.y = y;
      this.speed = 5; 
      this.radiusX = 10; 
      this.radiusY = 15;
      this.bHeight = 120;
      this.bWidth = 110;
    }
    draw() {
      ctx.beginPath();
      ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, 0, Math.PI);
      ctx.ellipse(this.x, this.y, this.radiusX, this.radiusY, 0, Math.PI, 2 * Math.PI);
      ctx.fillStyle = "#ffd799";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = "black";
      ctx.stroke();
      ctx.closePath();
    }
  
    update() {
      this.y += this.speed;
      this.draw();
    }
    beyondScreen() {
      return this.y - this.radiusY > canvas.height;
    }
    hitBasket(){
      if (this.x >= this.bWidth && this.x <= bWidth + bWidth) {
        // Check if the top of the egg is touching the top of the basket
        if (this.y + this.radiusY >= bHeight && this.y + this.radiusY <= bHeight ) {
          // If the egg is touching the top of the basket, remove it from the eggs array
          const index = eggs.indexOf(egg);
          return eggs.splice(index, 1);
          
        }
      }
    }
  }
  

  
  const eggs = [];
  


    function drawScore() {
      ctx.beginPath();
      ctx.font = "30px sans-serif";
      ctx.fillStyle = "green";
      ctx.fillText(`Score : ${totalScore}`, 10, 30);
      ctx.closePath();
    }
    function drawGameOver() {
      ctx.beginPath();
      ctx.font = "40px sans-serif";
      ctx.fillStyle = "red";
      ctx.fillText(`GAME OVER ${totalScore} points`, canvas.width/2, canvas.height/2);
      
      ctx.closePath();
      lastScreen.style.display = "block"
      canvas.style.display = "none"

      
    
   }
    let animationFrameId;
  

  function StartGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startScreen.style.display = "none"
    canvas.style.display = "block"
    lastScreen.style.display = "none"
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(henImg1, 300, 90, 100, 100)
    ctx.drawImage(henImg2, 500, 90, 100, 100)
    ctx.drawImage(henImg3, 700, 90, 100, 100)
    ctx.drawImage(henImg4, 900, 90, 100, 100)
    ctx.drawImage(henImg5, 1100, 90, 100, 100)
    ctx.drawImage(basketImg, bX, bY, bWidth, bHeight )
    basketMove()
    
      for(i=0;i<eggs.length;i++){
        
        eggs[i].update()
      if (eggs[i].beyondScreen()) {
        cancelAnimationFrame(animationFrameId);
        drawGameOver()
      clearInterval(intervelId)
          
          
      }
      
      
        
      

      
      
    }
    animationFrameId = requestAnimationFrame(StartGame);
  
    document.addEventListener("keydown", event => {
      console.log("event",event)
      if (event.key === "ArrowLeft") {
        isBasketGoingLeft = true;
        console.log("moving left")
      }
      if (event.key === "ArrowRight") {
        isBasketGoingRight = true;
        console.log("moving right")
      }
    });
    document.addEventListener("keyup", event => {
      isBasketGoingLeft = false;
      isBasketGoingRight = false;
      console.log("stop movement")
    });
  
      
  }
  
}   