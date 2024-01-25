
// Write a program that counts from 1 to 50 in fizzbuzz fashion.

// To do so, loop from 1 to 50 (inclusive). Each time through, 
// if the number is evenly divisible by 3, say ‘fizz’. 
// If the number is evenly divisible by 5, say ‘buzz’. 
// If the number is evenly divisible by both 3 and 5, 
// say ‘fizzbuzz’. Otherwise, say the number.

let number = 1

for(let i = number; i <= 51; i++)
    if (number % 3 == 0 , number % 5 == 0){
    console.log("fizzbuzz")
    console.log("----------")
    number++
}        else if (number % 3 == 0) {
        console.log("fizz")
        console.log("----------")
        number++
    }       else if (number % 5 == 0){
            console.log("buzz")
            console.log("----------")
            number++
}               else {
                console.log(number)
                console.log("----------")
                number++
        }
          