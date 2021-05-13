/*
2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

/*
продукт содержит следующе поля
- код продукта
- название
- количество
- цена за 1 шт
*/
let product1 = ["product code 0", "product name 0", 1, 1000];
let product2 = ["product code 1", "product name 1", 3, 300];
let product3 = ["product code 2", "product name 2", 6, 50];
let product4 = ["product code 3", "product name 3", 2, 200];
let product5 = ["product code 4", "product name 4", 5, 20];
let product6 = ["product code 5", "product name 5", 7, 10];

let basket = [product1, product2, product3, product4, product5, product6];

console.log(basket);

function countBasketTotalPrice(basket) {
    let summ = 0;
    basket.forEach(product => {
        summ += product[2] * product[3];
    });
    return summ;
}

console.log(countBasketTotalPrice(basket));