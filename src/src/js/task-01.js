//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

//В результаті, в консолі будуть виведені наступні повідомлення.

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5
const list = document.querySelector('#categories')
const item = list.querySelectorAll('li.item')
console.log(item)
const elem1 = item.forEach((elem) => {
    const title = elem.firstElementChild
    console.log(title)
    const elements = elem.lastElementChild.querySelectorAll('li')
    console.log(elements)
   // return title, elements
});
//console.log(elem1)

