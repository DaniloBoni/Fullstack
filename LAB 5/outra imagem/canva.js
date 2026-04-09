let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


//bloco azul 
ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,100,100);
ctx.closePath();

//bloco vermelho
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(700,0,100,100);
ctx.closePath();

//escrita 
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.font = "50px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",400,100);
ctx.closePath();

//barra verde centro
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.moveTo(0,400);
ctx.lineTo(800,400);
ctx.fill();
ctx.stroke();
ctx.closePath();

// blocos azul claro
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.fillRect(0,329,70,70);
ctx.fillRect(0,401,70,70);
ctx.fillRect(720,401,80,50);
ctx.fillRect(720,349,80,50);
ctx.closePath();

// traço diagonal azul
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(100,100);
ctx.lineTo(400,400);
ctx.fill();
ctx.stroke();
ctx.closePath();

// traço diagonal vermelho
ctx.beginPath();
ctx.strokeStyle = 'red';
ctx.moveTo(700,100);
ctx.lineTo(400,400);
ctx.fill();
ctx.stroke();
ctx.closePath();

// circulo azul cima
ctx.beginPath();
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(400,300,40,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// semi-circulo verde
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,400,160,1*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

// angulo verde esquerda
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,400,200,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

// angulo verde direita
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,400,200,1.75*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

//linh cinza 
ctx.beginPath();
ctx.strokeStyle = 'gray';
ctx.moveTo(400,400);
ctx.lineTo(400,800);
ctx.fill();
ctx.stroke();
ctx.closePath();