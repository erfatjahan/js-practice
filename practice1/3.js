const numbers = [15, 3, 2, 8, 19, 12, 1, 5, 7, 18, 4, 6, 10, 20, 13, 9, 14, 11, 16, 17];
for (let i = 0; i < numbers.length; i++) {
    let Index = i;
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[j] < numbers[Index]) {
            Index = j;
        }
    }
    let temp = numbers[i];
    numbers[i] = numbers[Index];
    numbers[Index] = temp;
}
console.log(numbers);
