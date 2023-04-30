const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const elem = ingredients.map((ingredient) => {
   const item = document.createElement('li')
   item.textContent = ingredient
     return item
})
console.log(elem)
const list = document.querySelector('#ingredients')
list.append(...elem)