/* //Definimos nuestra lista de la compra
//Old Code do not Use!!
//Var shoppingList = ['carne','pescado','fruta']
//Text String
let newArticle = 'flanes'
//Number
let totalAmount = 0
//Arrays
let shoppingList = ['carne','pescado','fruta']
//Constants
const PERAS = 'peras'
//Objects
let productInformation = {
    qty:0,
    name:'',
    price:0
}
let shoppingListWithObjects = [
    {
        qty:1,
        name:'carne',
        price:10
    },
    {
        qty:2,
        name:'pescado',
        price:20
    },
    {
        qty:3,
        name:'fruta',
        price:5
    }
]

console.log('Lista De la compra por Defector',shoppingList)
//Console.info(shoppingList)
//console.error(shoppingList)

//Tomorrow
function sayHello(){
    console.log('Hello')
}
function sayHello2(){
    console.log('Hello 2')
}

function addToShoppingList(){
    let newArticle = document.getElementById('articulo').value;
    shoppingList.push(newArticle)
    console.log('addToShoppingList',shoppingList)
}

function resetShoppingList(){
    shoppingList = []
    console.log('resetShoppingList',shoppingList)
} */
/****************************************************************************************** */
/****************************************************************************************** */
/****************************************************************************************** */
/****************************************************************************************** */
/****************************************************************************************** */
//Empezamos con el js

// Inicializamos la lista de co mpra como un array vacío
let shoppingList = [];

// Referencias a elementos del DOM para interactuar con ellos
const itemNameInput = document.getElementById("item-name"); // Campo de texto para el nombre del artículo
const itemQuantityInput = document.getElementById("cantidad"); // Campo de texto para la cantidad del artículo
const itemPricesInput = document.getElementById("item-price"); // Campo de texto para el precio del artículo
const itemButton = document.getElementById("add-item"); // Botón para añadir un artículo a la lista
const newListButton = document.getElementById("new-list"); // Botón para reiniciar la lista de compras
const shoppingListBody = document.getElementById("shopping-list-body"); // Cuerpo de la tabla donde se mostrarán los artículos
const totalAmountDisplay = document.getElementById("total-amount"); // Elemento donde se muestra el total de la compra

// Esperamos a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {
  // Añadimos un evento al botón "Agregar Artículo"
  itemButton.addEventListener("click", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtenemos los valores ingresados por el usuario en los campos
    const itemName = itemNameInput.value.trim(); // Nombre del artículo, eliminando espacios al inicio y al final
    const itemQuantity = parseFloat(itemQuantityInput.value); // Convertimos la cantidad a número
    const itemPrice = parseFloat(itemPricesInput.value); // Convertimos el precio a número

    // Validamos que los datos ingresados sean válidos
    if (itemName && !isNaN(itemQuantity) && !isNaN(itemPrice)) {
      // Creamos un objeto con los datos del artículo
      const newItem = {
        name: itemName, // Nombre del artículo
        quantity: itemQuantity, // Cantidad del artículo
        price: itemPrice, // Precio por unidad
        total: itemQuantity * itemPrice, // Total del artículo (cantidad × precio)
      };

      shoppingList.push(newItem); // Añadimos el artículo al array `shoppingList`
      updateShoppingList(); // Actualizamos la tabla de la lista de compras
      calculateTotal(); // Calculamos el nuevo total de la compra
      clearForm(); // Limpiamos los campos del formulario
    } else {
      // Si los datos no son válidos, mostramos una alerta al usuario
      alert("Por favor, ingresa todos los campos correctamente");
    }
  }); // Fin del evento del botón "Agregar Artículo"
}); // Fin del evento DOMContentLoaded

// Función para eliminar un artículo de la lista
function deleteItem(index) {
  shoppingList.splice(index, 1); // Eliminamos el artículo en la posición `index` del array `shoppingList`
  updateShoppingList(); // Actualizamos la tabla de la lista de compras
  calculateTotal(); // Recalculamos el total de la compra
}

// Función para actualizar la tabla con los artículos de la lista
function updateShoppingList() {
  shoppingListBody.innerHTML = ""; // Limpiamos el contenido actual de la tabla
  // Recorremos cada artículo en la lista de compras
  shoppingList.forEach((item, index) => {
    const row = document.createElement("tr"); // Creamos una fila nueva para la tabla
    // Añadimos las celdas con los datos del artículo y un botón para eliminarlo
    row.innerHTML = `
      <td>${item.name}</td> <!-- Nombre del artículo -->
      <td>${item.quantity}</td> <!-- Cantidad del artículo -->
      <td>${item.price.toFixed(2)}</td> <!-- Precio del artículo con 2 decimales -->
      <td>${item.total.toFixed(2)}</td> <!-- Total del artículo con 2 decimales -->
      <td><button onclick="deleteItem(${index})">Borrar</button></td> <!-- Botón para eliminar -->
    `;
    shoppingListBody.appendChild(row); // Añadimos la fila creada al cuerpo de la tabla
  });
}

// Función para calcular el total de la compra
function calculateTotal() {
  let totalAmount = 0; // Inicializamos el total en 0
  // Recorremos cada artículo de la lista y sumamos su total
  shoppingList.forEach((item) => {
    totalAmount += item.total; // Añadimos el total del artículo al total general
  });
  totalAmountDisplay.textContent = totalAmount.toFixed(2); // Mostramos el total actualizado con 2 decimales
}

// Evento para reiniciar la lista de compras
newListButton.addEventListener("click", function () {
  shoppingList = []; // Vaciamos la lista de compras
  updateShoppingList(); // Limpiamos la tabla
  calculateTotal(); // Reseteamos el total a 0
});

// Función para limpiar los campos del formulario
function clearForm() {
  itemNameInput.value = ""; // Vaciamos el campo del nombre
  itemQuantityInput.value = ""; // Vaciamos el campo de la cantidad
  itemPricesInput.value = ""; // Vaciamos el campo del precio
}
  