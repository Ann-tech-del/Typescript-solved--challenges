// Challenge 1: Sum of Positives
function sumOfPositives(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            sum += arr[i];
        }
    }
    return sum;
}
var answer1 = sumOfPositives([1, -3, 5, -2, 9, -8]);
// console.log(answer1)
// Challenge 2: Find Maximum Value
function findMax(numbers) {
    if (numbers.length === 0)
        return undefined;
    var max = numbers[0];
    for (var i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}
var answer2 = findMax([3, 7, 2, 9, 5]);
function findWinner(candidates) {
    var highestVotes = 0;
    var winner = "";
    for (var i = 0; i < candidates.length; i++) {
        if (candidates[i].votes > highestVotes) {
            highestVotes = candidates[i].votes;
            winner = candidates[i].name;
        }
    }
    //   console.log(`{name:"${winner}", votes:${highestVotes}}`);
}
var candidates = [
    { name: "Alice", votes: 50 },
    { name: "Bob", votes: 75 },
    { name: "Charlie", votes: 65 }
];
// findWinner(candidates)
// Challenge 4: Longest Word
function findLongestWord(words) {
    var longest = "";
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
var ans = findLongestWord(["apple", "banana", "pear", "grapefruit"]);
function countProperties(obj) {
    return Object.keys(obj).length;
}
// console.log(countProperties({ name: "Alice", age: 25, city: "Paris" }))
//Challenge 6: Filter by Length
function filterByLength(words, minLength) {
    return words.filter(function (word) { word.length >= minLength; });
}
console.log(filterByLength(["cat", "giraffe", "hippo", "dog", "elephant"], 5));
var arr = [1, 2, 3, 4, 5, 6, 6];
arr.includes(3);
