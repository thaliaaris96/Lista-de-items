const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];
const btnA = document.getElementById('agregar');
const btnL = document.getElementById('limpiar');

itemsArray.forEach(agregar);
function agregar(text){
  const li = document.createElement('li')
  li.textContent = text;
  ul.appendChild(li);
}

btnA.addEventListener("click", function(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  agregar(input.value);
  input.value = '';
})

btnL.addEventListener("click", function(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
})