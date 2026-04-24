var n_aleatorio = Math.floor(Math.random()*100);
console.log(n_aleatorio);
    



function Verificar() {
    var numero = Number(document.getElementById('numero').value);
    // window.alert("Seu amigo é o " + texticulo);
   

    if (numero == n_aleatorio) {
        document.getElementById("numero").style.setProperty("background-color", "green");

        // let p = document.getElementById('textoResultado');

        // p.textContent = "";
        // p.textContent('ACERTOUU!!');
        alert('ACERTOUU!!')

        // n_aleatorio = Math.floor(Math.random()*100);
        // ocument.getElementById("numero").value = '';
        
    }
    else if (numero > n_aleatorio) {
        document.getElementById("numero").style.setProperty("background-color", "red");

        // let p = document.getElementById('textoResultado');

        // p.textContent = "";
        // p.textContent('Você digitou um número ACIMA do escolhido !!');
        
        alert('Você digitou um número ACIMA do escolhido');
        
    }
    else if (numero < n_aleatorio) {
        document.getElementById("numero").style.setProperty("background-color", "red");

        let p = document.getElementById('textoResultado');
        // p.textContent = "";
        // p.textContent('Você digitou um número ABAIXO do escolhido !!');
        alert('Você digitou um número ABAIXO do escolhido');
        p.document.write('teste')
    }   

    
}



function mudarCor() {
    let cor = document.getElementById('botao');
    cor.style.backgroundColor = 'blue';
}
function mudarCor2() {
    let cor = document.getElementById('botao');
    cor.style.backgroundColor = 'white';
}


// window.alert('ESTE É UM ALERTA');
// console.log('Está mensagem está escondida'); //print

// var entrada = prompt('Entre com a sua idade');  

// console.log(entrada);

// entrada = parseInt(entrada);

// if (entrada >=18) {
//     console.log ('Você é de maior');
//     document.getElementById('testeID').innerHTML = 'Você é de Maior';
//     document.getElementById('bodinho').style.setProperty('background-color', 'red');

// } else if(entrada <18) {
//     console.log('De menor!');
// } else {
//     console.log('INVÁLIDO');
// }
