//pessoa vai dar um chute no prompt
//var numeroSecreto = parseInt(Math.random() * 10)  para de 1 a 9
var numeroSecreto = parseInt(Math.random() * (10 - 0) + 0) 
//alert(numeroSecreto) só verificando se tras um numero int
var tentativas = 3

//LOOP criando Laço WHILE(ENQUANTO)
while (tentativas > 0){
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  
  if (numeroSecreto == chute){
    document.getElementById("quadro-reposta-id").innerHTML = "<h2>Prabéns você acertou de primeira, por isso ganhou 100 pontos!</h2>";
    //validando se acertar precisa sair //comando se acertar sair
    break //ou //tentativas = tentativas -3

  } else if (chute > numeroSecreto){
    //document.getElementById("quadro-reposta-id").innerHTML = "<h2>O número secreto é menor</h2>";
    alert("O número secreto é menor")
    tentativas = tentativas -1

    //validando com mensagem de quantas tentativas resta
    if (tentativas == 2){
      //document.getElementById("quadro-reposta-id").innerHTML = "<h2>Você tem mais 2 chances</h2>";
      //document.write("<h2>Você tem mais 2 chances</h2>")
      alert("Você tem mais 2 chances")
    } else if (tentativas == 1){
      //document.getElementById("quadro-reposta-id").innerHTML = "<h2>Você tem mais 1 chancess</h2>";
      alert("Você tem mais 1 chances")
    }

  } else if (chute < numeroSecreto){
    //document.getElementById("quadro-reposta-id").innerHTML = "<h2>O número secreto é maior</h2>";
    alert("O número secreto é maior")
    tentativas = tentativas -1  

    //validando com mensagem de quantas tentativas resta
    if (tentativas == 2){
      //document.getElementById("quadro-reposta-id").innerHTML = "<h2>Você tem mais 2 chances</h2>";
      //document.write("<h2>Você tem mais 2 chances</h2>")
      alert("Você tem mais 2 chances")
    } else if (tentativas == 1){
      //document.getElementById("quadro-reposta-id").innerHTML = "<h2>Você tem mais 1 chancess</h2>";
      alert("Você tem mais 1 chances")
    }

  }
}
//condição de verificação para saber quando acaba as tentativas
if (chute != numeroSecreto){
  document.getElementById("quadro-reposta-id").innerHTML = "<h2>Suas tentativas acabaram . O número secreto era " + numeroSecreto+"</h2>";
} 


