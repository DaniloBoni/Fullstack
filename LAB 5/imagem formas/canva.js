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

// angulo verde esquerda cima
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,400,200,1*Math.PI,1.25*Math.PI);
ctx.stroke();
ctx.closePath();

// angulo verde direita cima
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,400,200,1.75*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

//linha cinza 
ctx.beginPath();
ctx.strokeStyle = 'gray';
ctx.moveTo(400,400);
ctx.lineTo(400,800);
ctx.fill();
ctx.stroke();
ctx.closePath();

//circulo aqua baixo
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.fillStyle = 'aqua';
ctx.arc(400,800,100,1*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// angulo verde direita baixo
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,800,150,1.5*Math.PI,2*Math.PI);
ctx.stroke();
ctx.closePath();

// angulo verde esquerda baixo
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.arc(400,800,200,1*Math.PI,1.5*Math.PI);
ctx.stroke();
ctx.closePath();

// quadrado vermelho meio
ctx.beginPath();
ctx.fillStyle = 'red';
ctx.fillRect(319,401,80,80);
ctx.closePath();

// quadrado amarelo
ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0,660,70,140);
ctx.fillRect(0,730,140,70);
ctx.closePath();

// quadrado preto
ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(730,660,70,140);
ctx.fillRect(660,730,140,70);
ctx.closePath();

//circulo amarelo
ctx.beginPath();
ctx.strokeStyle = 'Green';
ctx.fillStyle = 'yellow';
ctx.arc(200,600,30,0*Math.PI,2*Math.PI);
ctx.stroke();
ctx.moveTo(630,600)
ctx.arc(600,600,30,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();
