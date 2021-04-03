//pessoa vai dar um chute no prompt
//var numeroSecreto = parseInt(Math.random() * 10)  para de 1 a 9
var numeroSecreto = parseInt(Math.random() * (10 - 0) + 0) 
//alert(numeroSecreto) só verificando se tras um numero int
var tentativas = 3

//LOOP criando Laço WHILE(ENQUANTO)
while (tentativas > 0){
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))

  if (numeroSecreto == chute){
    alert("Prabéns você acertou de primeira, por isso ganhou 100 pontos!")
    //validando se acertar precisa sair //comando se acertar sair
    break //ou //tentativas = tentativas -3

  } else if (chute > numeroSecreto){
    alert("O número secreto é menor")
    tentativas = tentativas -1

    //validando com mensagem de quantas tentativas resta
    if (tentativas == 2){
      alert("Você tem mais 2 chances")
    } else if (tentativas == 1){
      alert("Você tem mais 1 chances")
    }

  }  else if (chute < numeroSecreto){
    alert("O número secreto é maior")
    tentativas = tentativas -1

    //validando com mensagem de quantas tentativas resta
    if (tentativas == 2){
      alert("Você tem mais 2 chances")
    } else if (tentativas == 1){
      alert("Você tem mais 1 chances")
    }

  }
}
//condição de verificação para saber quando acaba as tentativas
if (chute != numeroSecreto){
  alert("Suas tentativas acabaram . O número secreto era " + numeroSecreto)
}