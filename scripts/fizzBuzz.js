let inputNumber;

function start() {
    inputNumber = parseInt(prompt("enter number"));
    fizzBuzz(inputNumber)
}

function fizzBuzz(number) {
    let result = "";
    for (let i = 1; i < number; i++) {
        result = result.concat(fizz(i)).concat(buzz(i));
        console.log(replaceNullWith(result, i));
        result = "";
    }
}

function fizz(number){
    if (number%3===0){
        return "Fizz";
    } else {
        return "";
    }
}

function buzz(number){
    if (number%5===0){
        return "Buzz";
    } else{
        return "";
    }
}
function replaceNullWith(value, replacementValue){
    if (value == null || value ==""){
        return replacementValue
    }
    return value
}
start()