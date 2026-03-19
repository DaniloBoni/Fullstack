var n_aleatorio = Math.floor(Math.random()*100);
console.log(n_aleatorio);
    



function Verificar() {
    var numero = Number(document.getElementById('numero').value);
    // window.alert("Seu amigo é o " + texticulo);
   

    if (numero == n_aleatorio) {
        document.getElementById("numero").style.setProperty("background-color", "green");
        alert('ACERTOUU!!')

        // n_aleatorio = Math.floor(Math.random()*100);
        // ocument.getElementById("numero").value = '';
        
    }
    else if (numero > n_aleatorio) {
        document.getElementById("numero").style.setProperty("background-color", "red");
        alert('Você digitou um número acima do escolhido');
        
    }
    else if (numero < n_aleatorio) {
        document.getElementById("numero").style.setProperty("background-color", "red");
        alert('Você digitou um número abaixo do escolhido');
        
    }   

    
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
