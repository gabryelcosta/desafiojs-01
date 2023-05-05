let numberOne = prompt("Digite um numero:")
let numberTwo = prompt("Digite outro numero")


numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

soma = numberOne + numberTwo
sub = numberOne - numberTwo
mult = numberOne * numberTwo
div = numberOne / numberTwo
restDiv = numberOne % numberTwo
pair = soma % 2 == 0
odd = soma % 2 == 1
numberEqual = numberOne == numberTwo
numberDiff = numberOne !== numberTwo

alert(`A soma e ${soma}`)
alert(`A subtraçao e ${sub}`)
alert(`A multiplicaçao e ${mult}`)
alert(`A divisao e ${div}`)
alert(`O resto da divisao e ${restDiv}`)

if(pair) {
  alert(`A soma dos dois numeros e: ${soma} PAR`)
}
  else if(odd){
    alert(`A soma dos dois numeros e: ${soma} Impar`)
  }

if(numberEqual) {
  alert(`Os numeros sao iguais, os numeros digitados foram ${numberOne} e ${numberTwo}`)
}
  else if(numberDiff) {
    alert(`Os numeros sao diferentes, os numeros digitados foram ${numberOne} e ${numberTwo}`)
  }