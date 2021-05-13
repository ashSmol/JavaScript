/**
 * 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
 */

// задаем исходный массив, из которого будем исключать числа, имеющие делитель
let arr = [];
for (let i = 1; i <= 100; i++) {
    arr.push(i)
}

let index = 0;
while (index <= 100) {
    let devider = 2;
    while (devider < arr[index]) {
        if (arr[index] % devider === 0) {
            arr.splice(index, 1);
            index--; // Т.к. индексы после удаления элемента сместились, нужно так же уменьшить счетчик 
            break;
        }
        devider++;
    }
    index++;
}
console.log(arr);