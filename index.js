// zero = document.getElementById("zero")
// one = document.getElementById("one")
// two = document.getElementById("two")
// three = document.getElementById("three")
// four = document.getElementById("four")
// five = document.getElementById("five")
// six = document.getElementById("six")
// seven = document.getElementById("seven")
// eight = document.getElementById("eight")
// nine = document.getElementById("nine")
// divide = document.getElementById("divide")
// multiply = document.getElementById("multiply")
// plus = document.getElementById("plus")
// minus = document.getElementById("minus")
// equal = document.getElementById("equal")
// decimal = document.getElementById("decimal")
// clear = document.getElementById("clear")
// deleteButton = document.getElementById("delete")
let countOne = 0
let countTwo = 0
let displayNumber =""
let sign = ""
let finalOutput = document.getElementById("calc-output-one")
let output = document.getElementById("calc-output-two")

function sum(){ 
   
    sign = "+"
    finalOutput.textContent += sign
    output.textContent = sign
}

function total(){
    
    sign = "="
    output.textContent = sign

}
function zero(){
zero = count;
output.textContent = zero}

function one() {
    let one = 1
    countOne+= output
    finalOutput.textContent+= one
    output.textContent = one
    if (countOne >=1 ){
        countTwo +=1
    }
}


