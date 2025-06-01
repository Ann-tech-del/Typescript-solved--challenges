// challenge 1

function addNumber (num1 :number ,num2 :number){
    let sum = num1 + num2
    console.log(`the sum of ${num1} and ${num2} is ${sum}`)

}
addNumber(13,4)

// challenge 2 ;Convert Minutes into Seconds

function convert (min:number) {
    let secs:number 
    return secs= min*60

}
const result = convert(4)
console.log(`4 minutes to secs is ${result}`)


// challenge 3 : perimeter of a rectangle

function findPerimeter (width:number, length : number) {
    let perimeter= 2 *( length+width)
    console.log(`Perimeter is ${perimeter}`)
}

findPerimeter(6,7)

// challenge 4 : checking if a number is negative.

function isNegative (num:number) {
    if ( num < 0) {
        console.log( `true`)
    }
    else
    {
        console.log(`false`)
    }
} 

isNegative(-23)

// challenge 5 :Can I Drive
function canDrive ( name :string, age:number){
    if( age >= 18) {
        console.log(`${name} is old enough to drive`)
    } else{
        console.log(`${name} is not old enough to drive`)
    }
}
canDrive("Jane", 22); // Jane is old enough to drive
canDrive("June", 12); // June is not old enough to drive yet

// challenge 6: Largest Number
function findLargestNumber( num1:number,num2:number,num3:number){
    let largest= Math.max ( num1, num2, num3)
    console.log (`The largest number is ${largest} `)
}
findLargestNumber ( 4,6,7)

// challenge 7: BMI Calculator
function calculateBMI(weight:number, height:number){
    let BMI= weight / (height * height)
   if (BMI<18.5){
        console.log ( `Your BMI is ${BMI} - underweight`)
    }
    else if ( BMI <= 24.9) {
        console.log( `Your BMI is  ${BMI} - Normal`)  
    }
    else if ( BMI <= 29.9) {
        console.log( `Your BMI is ${BMI}  - Overweight`)  
    }
    else if  ( BMI >=30 ){
        console.log (`Your BMI is  ${BMI}  - Obese`)
    }
    else {
        console.log ( `Enter a valid number`)
    }
    
}
calculateBMI(24,2)
calculateBMI(60,163)

// challenge 8 : Greeting Based On Time
function greetUser ( name:string,hour:number) {
    if (hour>= 5 && hour<=11) {
        console.log(`Goodmorning, ${name}`)
    }
    else if ( hour>=12 && hour<=17) {
console.log (`Goodafternon, ${name}`)
    }
    else if ( hour>=18 && hour <= 21){
        console.log(`Goodevening, ${name}`)
    }
    else if ( hour>=22 && hour<=23 || hour>=0 && hour <=4 ){
        console.log(`Goodnight, ${name}`)
    }
    else {
        console.log (`Enter a valid hour`)
    }

}
greetUser("Ann",12)
greetUser("Ann",8)
greetUser("Ann",20)
greetUser("Ann",1)

// challenge9 : FizzBuzz

function fizzBuzzCheck(num:number){
    let res = num % 3
    let res2 = num % 5
    if( res==0 && res2 ==0){
        return "fizzbuzz"
    }
    else if ( res==0){
        return "fizz"
    }
    else if ( res2==0){
        return "buzz"
    }
    else {
        return num
    }

}
let res =fizzBuzzCheck(15)
console.log (res)

// challenge 10 : Perimeter 2
function perimeter2( l:string, num:number){
    const pie =6.28
    const side =4
    if(l == "c" ){
        return pie*num
    } else if (l== "s") {
return side*num
    } else {
        return " enter either c or s"
    }

}
let res2= perimeter2("c",4)
console.log( res2)

// challenge 11 : sum even numbers 

function sumEvenNumbers(n:number){
    let sum = 0
    for (let i=1; i <= n; i++){
        if ((i % 2) == 0){
            sum += i
        }else {
            
        }
    }
    return sum
}

let sum = sumEvenNumbers(10)
console.log(sum)

// challenge 12 : multiply by itself

function powerUp(num:number, times:number) {
    let result = 1

    for (let i = 1; i <= times; i++){
        result *= num
    }
    return result
}
let result1 = powerUp(2,3)
console .log (result1)

//challenge 13: Factorial Calculator


function factorial(n:number){
    let result = 1
    for (let i = 1; i <= n; i++){
        result *= i
    }
    return result
}
let res3 = factorial(0)
console.log(res3)

//Challenge 14: Multiple Sum

function sumMultiples(n:number, divisor:number){
    let result = 0
    for (let i = 0; i <= n; i++)
        if ((i % divisor) == 0){
            result += i
        }
    return result
}
let answer=sumMultiples(10,2)
console.log(answer)

//Challenge 15: Sum of Digits

function sumDigits(num:number){
    let sum = 0
    while (num > 0){
        let lastDigit = num % 10
        num = Math.floor(num/10)
        sum += lastDigit
    }
    return sum
}
let results = sumDigits(123)
console.log(results)