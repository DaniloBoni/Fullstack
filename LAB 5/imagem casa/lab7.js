let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

//retangulo
// ctx.beginPath(); /* inicio do desenho */
// ctx.lineWidth = 4; /* linha grossura 2 */
// ctx.fillStyle = 'blue'; /* estilo de preencimento */
// ctx.strokeStyle = 'red'; 
// ctx.fillRect(10,10,100,50); /* pintar o retangulo */ 
// ctx.strokeRect(10,10,100,50);
// ctx.closePath(); 

// linhas
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.moveTo(200,150);
// ctx.lineTo(60,10);
// ctx.lineTo(60,250);
// ctx.lineTo(200,250);
// ctx.lineTo(200,150);
// ctx.fill(); //pinta os pontos 
// // ctx.stroke(); // contorna a figura 
// ctx.closePath();

// arcos
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'red';
// ctx.moveTo(200,200); //só moveu para o centro 
// ctx.arc(200,200,50,1.75*Math.PI,2*Math.PI);
// ctx.lineTo(200,200) // faz a linha
// ctx.fill();
// ctx.stroke();
// ctx.closePath();

// texto
// ctx.beginPath();
// ctx.lineWidth = 2;
// ctx.fillStyle = 'blue';
// ctx.strokeStyle = 'black';
// ctx.font = "90px Arial"
// ctx.textAlign = "center";
// ctx.fillText("Olá",200,350);
// ctx.strokeText("Olá",200,350)
// ctx.closePath();

//Ex 2

// casa
ctx.beginPath();
ctx.fillStyle = '#8B4513';
ctx.fillRect(300,400,200,200);
ctx.closePath();

//teto casa
ctx.beginPath();
ctx.fillStyle = '#E76F51';
ctx.moveTo(300,400);
ctx.lineTo(500,400);
ctx.lineTo(400,300);
ctx.fill();
ctx.closePath();

//porta
ctx.beginPath();
ctx.fillStyle = '#604D28';
ctx.fillRect(382,495,40,105); //quadrado
ctx.closePath();

//janela 1
ctx.beginPath();
ctx.fillStyle = '#5DBBFF';
ctx.fillRect(321,435,60,60);
ctx.closePath();

//janela 2
ctx.beginPath();
ctx.fillStyle = '#5DBBFF';
ctx.fillRect(421,435,60,60);
ctx.closePath();

//sol
ctx.beginPath();
ctx.fillStyle = '#F4FF40';
ctx.moveTo(650,200); //só moveu para o centro 
ctx.arc(650,200,80,0*Math.PI,2*Math.PI); //circulo
ctx.fill(); //pintar o circulo
ctx.closePath();

//chao
ctx.beginPath();
ctx.fillStyle = '#808080';
ctx.fillRect(0,600,800,200);
ctx.closePath();

//rio
ctx.beginPath();
ctx.fillStyle = '#5481FF';
ctx.moveTo(0,600); //só moveu para o centro 
ctx.arc(0,600,90,1.5*Math.PI,2*Math.PI); //circulo
ctx.fillRect(0,600,90,200);
ctx.fillRect(90,700,210,200);
ctx.moveTo(300,800)
ctx.arc(300,800,100,1.5*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();

//arvore 1
ctx.beginPath();
ctx.fillStyle = '#8B4513';
ctx.fillRect(90,500,40,100);
ctx.fillStyle = '#388E3C';
ctx.moveTo(110,480)
ctx.arc(110,470,60,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();


//arvore 2
ctx.beginPath();
ctx.fillStyle = '#8B4513';
ctx.fillRect(700,600,40,100);
ctx.fillStyle = '#388E3C';

ctx.arc(720,560,60,0*Math.PI,2*Math.PI);
ctx.fill();
ctx.closePath();