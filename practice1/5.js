const numbers = [];
for (let i = 1; i <= 50; i++) {
    numbers.push(i);
}
let temp = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    if (element % 3 === 0 && element % 5 === 0) {
        temp.push(element);
    }
}
console.log(temp);
