  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const startScreen = document.querySelector("#firstPage");

  //setting canvas height and width
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  //variable

  let radiusX = 10;
  let radiusY = 15;
  let totalScore = 0;
  let gameOver = false;
  let eggY = 200;
  let eggSpeed = 1;
  //egg1 variable
  let egg1X = 350;
  //egg2 variable
  let egg2X = 550;
  //egg3 variable
  let egg3X = 750;
  //egg4 variable
  let egg4X = 950;
  //egg5 variable
  let egg5X = 1150;
  //basket variable
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


  window.onload = () => {
    
    canvas.style.display = "none"
  
    document.getElementById('start-button').onclick = () => {
      gameOver = false;
      StartGame();
    };

    function basketMove(){
      if (isBasketGoingLeft) {
        if (bX > 0) {
          bX -= bSpeedValue;
        }
      } else if (isBasketGoingRight) {
        if (basketX < canvas.width - bWidth) {
          bX += bSpeedValue;
        }
      }
    }

  
  
  //draw egg

  function drawEgg1() {
    ctx.beginPath();
    ctx.ellipse(egg1X, eggY, radiusX, radiusY, 0, 0, Math.PI);
    ctx.ellipse(egg1X, eggY, radiusX, radiusY, 0, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffd799";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
  function drawEgg2() {
    ctx.beginPath();
    ctx.ellipse(egg2X, eggY, radiusX, radiusY, 0, 0, Math.PI);
    ctx.ellipse(egg2X, eggY, radiusX, radiusY, 0, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffd799";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
  function drawEgg3() {
    ctx.beginPath();
    ctx.ellipse(egg3X, eggY, radiusX, radiusY, 0, 0, Math.PI);
    ctx.ellipse(egg3X, eggY, radiusX, radiusY, 0, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffd799";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }
  function drawEgg4() {
    ctx.beginPath();
    ctx.ellipse(egg4X, eggY, radiusX, radiusY, 0, 0, Math.PI);
    ctx.ellipse(egg4X, eggY, radiusX, radiusY, 0, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffd799";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }

  function drawEgg5() {
    ctx.beginPath();
    ctx.ellipse(egg5X, eggY, radiusX, radiusY, 0, 0, Math.PI);
    ctx.ellipse(egg5X, eggY, radiusX, radiusY, 0, Math.PI, 2 * Math.PI);
    ctx.fillStyle = "#ffd799";
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "black";
    ctx.stroke();
    ctx.closePath();
  }

  function update(){
    eggY += eggSpeed;
    if (eggY >= canvas.height - radiusY && egg1X >= bX - bWidth/2 && egg1X <= bX + bWidth/2) {
      
      totalScore++;
      egg1X = Math.floor(Math.random() * (canvas.width - radiusY));
      eggY = 0;
    }
    if (eggY >= canvas.height - radiusY && egg2X >= bX - bWidth/2 && egg2X <= bX + bWidth/2) {
      
      totalScore++;
      egg2X = Math.floor(Math.random() * (canvas.width - radiusY));
      eggY = 0;
    }
    if (eggY >= canvas.height - radiusY && egg3X >= bX - bWidth/2 && egg3X <= bX + bWidth/2) {
      
      totalScore++;
      egg3X = Math.floor(Math.random() * (canvas.width - radiusY));
      eggY = 0;
    }
    if (eggY >= canvas.height - radiusY && egg4X >= bX - bWidth/2 && egg4X <= bX + bWidth/2) {
      
      totalScore++;
      egg4X = Math.floor(Math.random() * (canvas.width - radiusY));
      eggY = 0;
    }
    if (eggY >= canvas.height - radiusY && egg5X >= bX - bWidth/2 && egg5X <= bX + bWidth/2) {
      
      totalScore++;
      egg5X = Math.floor(Math.random() * (canvas.width - radiusY));
      eggY = 0;
    }
    if (eggY > canvas.height) {
      gameOver = true

    }}

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
      ctx.fillStyle = "green";
      ctx.fillText(`GAME OVER ${totalScore} points`, 50, 200);
      ctx.closePath();
    }

    let animationFrameId;
  

  function StartGame(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    startScreen.style.display = "none"
    canvas.style.display = "block"
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height)
    ctx.drawImage(henImg1, 300, 90, 100, 100)
    ctx.drawImage(henImg2, 500, 90, 100, 100)
    ctx.drawImage(henImg3, 700, 90, 100, 100)
    ctx.drawImage(henImg4, 900, 90, 100, 100)
    ctx.drawImage(henImg5, 1100, 90, 100, 100)
    ctx.drawImage(basketImg, bX, bY, bWidth, bHeight )
    drawEgg1()
    drawEgg2()
    drawEgg3()
    drawEgg4()
    drawEgg5()
    update()
    if (gameOver) {
      cancelAnimationFrame(animationFrameId);
      drawGameOver()
      setTimeout(() => {
        startScreen.style.display = "block"
        canvas.style.display = "none"
      },"2500");
     
      
    } else {
      animationFrameId = requestAnimationFrame(StartGame);
    }
    
    document.addEventListener('mousemove', function(event) {
      
      const mouseX = event.clientX - canvas.offsetLeft;
      if (mouseX < canvas.width / 2) {
        
        isBasketGoingLeft = true;
        isBasketGoingRight = false;
      } else {
        
        isBasketGoingLeft = false;
        isBasketGoingRight = true;
      }
    });
    
    requestAnimationFrame(StartGame)
  }
}