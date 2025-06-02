// Challenge 1: Sum of Positives
function sumOfPositives(arr: number[]): number {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
let answer1=sumOfPositives ([1, -3, 5, -2, 9, -8])
// console.log(answer1)

// Challenge 2: Find Maximum Value

function findMax(numbers: number[]): number | undefined {
  if (numbers.length === 0) return undefined;
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
let answer2 = findMax([3, 7, 2, 9, 5])
// console.log(answer2)

// Challenge 3: Election Winner
interface Candidate {
  name: string;
  votes: number;
}

function findWinner(candidates: Candidate[]): void {
  let highestVotes = 0;
  let winner: string = "";
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].votes > highestVotes) {
      highestVotes = candidates[i].votes;
      winner = candidates[i].name;
    }
  }
//   console.log(`{name:"${winner}", votes:${highestVotes}}`);
}
const candidates = [
  { name: "Alice", votes: 50 },
  { name: "Bob", votes: 75 },
  { name: "Charlie", votes: 65 }
];

// findWinner(candidates)

// Challenge 4: Longest Word
function findLongestWord(words: string[]): string {
  let longest = "";
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}
let ans = findLongestWord(["apple", "banana", "pear", "grapefruit"])
// console.log(ans)

// Challenge 5: Count Properties

type Person = { [key: string]: number | string }

function countProperties(obj: Person): number {
    return Object.keys(obj).length;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))


//Challenge 6: Filter by Length

function filterByLength(words: string[], minLength: number): string[] {
    return words.filter((word) => { return word.length >= minLength})
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5))

//Challenge 7: Sum of Even Numbers
function sumEvenNumbers(numbers: number[]): number {
    return numbers.reduce((sum, num) => {
        if (num % 2 === 0){
            return sum += num
        }else {
            return sum
        }
        
    }, 0)    
}
// console.log(sumEvenNumbers([1, 2, 3, 4, 5,]))


//Challenge 8: Difference Between Sum of Even and Odd Numbers
function differenceEvenOdd(numbers: number[]): number{
    let sumEven: number = 0
    let sumOdd: number = 0
    numbers.forEach((num) => {
        if (num % 2 === 0){
            sumEven += num
        }else {
            sumOdd += num
        }
    })
    return sumEven - sumOdd
}
// console.log(differenceEvenOdd([1, 2, 3, 4, 5, 6]))

//Challenge 9: Count Truthy

type Truthy = { [key: string]: string | number | boolean | null}

function countTruthy(obj: Truthy): number {
    let counter:number = 0
    for (let key in obj){
        let value = obj[key as keyof Truthy]
        if (value) counter++
    }
    return counter
}

// console.log(countTruthy({ a: 0, b: "hello", c: false, d: 42, e: null }))


//Challenge 10: Average of Numbers

function average(numbers: number[]): number | number[]{
    let sum: number
    if (numbers.length === 0){
        return numbers
    }else {
        sum = numbers.reduce((sum, num) => { 
            return sum += num
        },0)
    }
    return sum / numbers.length
}

// console.log(average([2, 4, 6, 8]))
// console.log(average([]))


//Challenge 11: Linear Search

function linearSearch(numbers: number[], searchValue: number): number{
    if (numbers.includes(searchValue)){
        return numbers.indexOf(searchValue)
    } else{
        return -1
    }
}
// console.log(linearSearch([5, 3, 7, 1, 4, 7], 7))


//Challenge 12:  Reverse Linear Search

function  reverseLinearSearch(numbers: number[], searchValue: number): number{
    let i: number = numbers.length - 1
    while (i > 0){
        if (numbers[i] === searchValue) return i
        else i--
    }
    return -1
}

// console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 7))

// console.log(reverseLinearSearch([5, 3, 7, 1, 4, 7], 71))

//Challenge 13: Linear Search All Indices

function linearSearchAll(numbers: number[], searchValue: number): number[]{
    let indices: number[] = []
    for (let i = 0; i < numbers.length; i++){
        if (numbers[i] === searchValue) indices.push(i)
    }
    return indices
}
// console.log(linearSearchAll([5, 3, 7, 1, 4, 7], 7) )
// console.log(linearSearchAll([5, 3, 7, 1, 4], 10)) 


// Challenge 14: Count Occurrences

type Frequency = { [key: string]: number }

function countOccurrences(arr: string[]): Frequency{
    let frequency: Frequency = {}
    arr.forEach((element) => {
        if (element in frequency){
            frequency[element] += 1 
        }else {
            frequency[element] = 1
        }
    })
    return frequency
}
// console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana", "apple"]))


//Challenge 15: Remove Duplicates

function removeDuplicates(numbers: number[]){
    // return [...new Set(numbers)]
    let newArray: number[] = []
    numbers.forEach((num) => {
        if(!newArray.includes(num)){
            newArray.push(num)
        }
    })
    return newArray
}
// console.log(removeDuplicates([1, 2, 3, 2, 4, 1, 5]))


//Challenge 16: Most Frequent
type FrequencyMap = { [key: string | number]: number }

function mostFrequent(arr: number[] | string[]): number | string {
    let highestfrequency: number = 0
    let highestElement: string | number = ""
    let frequency: FrequencyMap = {}

    arr.forEach((element) => {
        if (element in frequency){
            frequency[element] += 1
            if (frequency[element] > highestfrequency){
                highestfrequency = frequency[element]
                highestElement = element
            }
        }else{
            frequency[element] = 1
            if (frequency[element] > highestfrequency){
                highestfrequency = frequency[element]
                highestElement = element
            }
        }
    })
    return highestElement

}

// console.log(mostFrequent([1, 2, 2, 3, 3, 3, 4]))
// console.log(mostFrequent(["apple", "banana", "apple", "orange", "banana", "apple"]))
