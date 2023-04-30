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
const list = document.querySelector("#categories");
const item = list.children.length;
console.log(`Number of categories: ${item}`);

const itemsElement = document.querySelectorAll(".item");
itemsElement.forEach((elem) => {
  const title = elem.firstElementChild.textContent;
  console.log("Category: ", title);
  const elements = elem.lastElementChild.querySelectorAll("li").length;
  console.log("Elements: ", elements);
});
