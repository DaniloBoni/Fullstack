let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');




let retangulo1 = {
    x: 50,
    y: 10,
    altura: 10,
    largura: 50,
    cor: 'red',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let retangulo2 = {
    x: 50,
    y: 90,
    altura: 50,
    largura: 10,
    cor: 'blue',
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.fillRect(this.x,this.y,this.largura,this.altura);
        ctx.closePath();
    }
}

let elemento = {
    x: 50,
    y: 200,
    raio: 50,
    cor: "blue",
    desenha: function(){
        ctx.beginPath();
        ctx.fillStyle = this.cor;
        ctx.arc(this.x,this.y,this.raio,0,2*Math.PI);
        ctx.fill();
        ctx.closePath();
    }
}

let bola = {
    x: 0,
    y:100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'football_front_side_108.jpg';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x - this.raio, this.y - this.raio, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}

let direcao = 1

function animar(){
    ctx.clearRect(0,0,400,400); /* limpar o tamanho do canvas inteiro (0,0) inicio até (400,400) final*/
    if (retangulo1.x == 370){
        direcao= -1
    }
    if (retangulo1.x == 0){
        direcao = 1
    }
    retangulo1.x = retangulo1.x+ direcao;

    if (retangulo2.altura == 370){
        direcao = -1
    }

    if (retangulo2.altura == 0){
        direcao = 1
    }

    if (retangulo2.largura == 370){
        direcao = -1
    }

    if (retangulo2.largura == 0){
        direcao = 1
    }

    retangulo2.altura=retangulo2.altura+direcao
    retangulo2.largura=retangulo2.largura+direcao


    
    retangulo1.desenha();
    retangulo2.desenha();
    elemento.desenha();
    bola.desenha();
    requestAnimationFrame(animar);

}
animar();




function circulo(){
    ctx.clearRect(0,0,400,400)
    circulo.desenha();
    requestAnimationFrame(circulo)
}

document.addEventListener('keydown',function(evento){
    tecla = evento.key;
    console.log(tecla);
    if(tecla == 'ArrowUp')   {elemento.y = elemento.y-5}  
    if(tecla == 'ArrowDown') {elemento.y = elemento.y+5}  
    if(tecla == 'ArrowLeft') {elemento.x = elemento.x-5}  
    if(tecla == 'ArrowRight'){elemento.x = elemento.x+5}  
})


document.addEventListener('mousemove', function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse, y_mouse);

    if (x_mouse > 0 + bola.raio && x_mouse < 400 - bola.raio &&
         y_mouse > 0 + bola.raio && y_mouse < 400 - bola.raio){
        bola.x = x_mouse;
        bola.y = y_mouse;
    }
    else{
        bola.x = bola.x
        bola.y = bola.y
    }
})