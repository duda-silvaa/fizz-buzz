// Divisível por 9 => Fizz
// Divisível por 3 => Buzz
// Divisível por 3 e 9 => FizzBuzz
// Não divisível por 3 ou 9 => entrada 
// Se não é um núemro retonre "n é um num"

const resul = fizzBuzz(18);
console.log(resul);

function fizzBuzz(entrada){
    if ( typeof entrada !== "number" )
    return "Nao é um número";

    if (entrada % 3 == 0 && entrada % 9 === 0)
    return "FizzBuzz"
    
    if (entrada % 3 == 0)
    return "Fizz";
    
    if (entrada % 9 == 0)
    return "Buzz";
    
return entrada;
}