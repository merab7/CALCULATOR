

let num1=0
let num2=0

document.getElementById('num1-el')
document.getElementById('num2-el')

let nume1El=document.getElementById('num1-el')
let num2El=document.getElementById('num2-el')

let sumEL=document.getElementById('sum-el')

function screenvalu1(){

nume1El.innerText=num1+=1;
sumEL.innerText= 'SUM: '
 
}

screenvalu()

function screenvalu2(){

num2El.innerText=num2+=1;

sumEL.innerText= 'SUM: '
      }


function plus(){

sumEL.innerText= (sumEL.innerText) + ' ' + (num1 + num2)


nume1El.innerText=0
num2El.innerText=0
num1=0
num2=0


}

function subt(){

    sumEL.innerText= (sumEL.innerText) + ' ' + (num1 - num2)


    nume1El.innerText=0
    num2El.innerText=0
    num1=0
    num2=0
    


    
}

function divi(){


    sumEL.innerText= (sumEL.innerText) + ' ' + (num1 / num2)


    nume1El.innerText=0
    num2El.innerText=0
    num1=0
    num2=0
    

    
}

function mul(){


    sumEL.innerText= (sumEL.innerText) + ' ' + (num1  * num2)


    nume1El.innerText=0
    num2El.innerText=0
    num1=0
    num2=0
    

    
}