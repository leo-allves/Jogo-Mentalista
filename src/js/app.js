//pessoa vai dar um chute no prompt
var numeroSecreto = parseInt(Math.random() * 10)
//alert(numeroSecreto) só verificando se tras um numero int
var tentativas = 3

//LOOP criando Laço WHILE(ENQUANTO)
while (tentativas > 0){
    var chute = parseInt(prompt("Digite um número entre 0 e 10"))

    if (numeroSecreto == chute){
      alert("Acertou")
      //validando se acertar precisa sair
      break 
      //comando se acertar sair
    } else if (chute > numeroSecreto){
      alert("O número secreto é menor")
      tentativas = tentativas -1
    }  else if (chute < numeroSecreto){
      alert("O número secreto é maior")
      tentativas = tentativas -1
    } 
}
//condição de verificação para saber quando acaba as tentativas
if (chute != numeroSecreto){
    alert("Suas tentativas acabaram . O número secreto era " + numeroSecreto)
}