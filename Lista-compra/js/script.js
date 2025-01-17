// Inicializamos la lista de co mpra como un array vacío
// Referencias a elementos del DOM para interactuar con ellos
//Creamos campos nombre ,cantidad,precio,btones y cuerpo de la tabla y el total
// Esperamos a que el DOM esté completamente cargado antes de ejecutar el código
//Finalizamos el evento DOM
      // Obtenemos los valores ingresados por el usuario en los campos
      // Nombre del artículo, eliminando espacios al inicio y al final
// Función para eliminar un artículo de la lista
       //Eliminamos el artículo en la posición `index` del array `shoppingList`
      // Actualizamos la tabla de la lista de compras
// Función para actualizar la tabla con los artículos de la lista
      // Recorremos cada artículo en la lista de compras
      // Añadimos las celdas con los datos del artículo y un botón para eliminarlo
// Función para calcular el total de la compra
        //!!Importante inicializarla en 0
        //  Recorremos cada artículo de la lista y sumamos su total
        // Añadimos el total del artículo al total general
        // Mostramos el total actualizado con 2 decimales
// Evento para reiniciar la lista de compras
        // Vaciamos la lista de compras
        // Limpiamos la tabla
        // Reseteamos el total a 0
//Limpiamos los datos 
        // Vaciamos el campo del nombre
        // Vaciamos el campo de la cantidad
        // Vaciamos el campo de la Precio

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////METODO1////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
        price: itemPrice, 
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
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////NUEVOOOOMETODORGANIZADO//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* 
// Inicializamos la lista de compra como un array vacío
let shoppingList = [];

// EVENTOS DEL INTERFAZ
//Esperamos a que el dom este completamente cargado antes de ejecutar codigo
document.addEventListener("DOMContentLoaded", () => {
  // Evento: Agregar artículo
  document.getElementById("add-item").addEventListener("click", (event) => {
    event.preventDefault();
    const itemName = document.getElementById("item-name").value.trim();// Nombre del artículo, eliminando espacios al inicio y al final
    const itemQuantity = parseFloat(document.getElementById("cantidad").value);//Convertimos la cantidad a numero
    const itemPrice = parseFloat(document.getElementById("item-price").value);
    //Convertimos la cantidad a numero
//Validamos que los datos esten sean validos
    if (itemName && !isNaN(itemQuantity) && !isNaN(itemPrice)) {
      createItem(itemName, itemQuantity, itemPrice); // Llamamos al método para crear un artículo
    } else {
      alert("Por favor, ingresa todos los campos correctamente.");
    }
  });

  // Evento: Reiniciar lista
  document.getElementById("new-list").addEventListener("click", resetList);
});

// MÉTODOS DEL INTERFAZ
// Crear un artículo y añadirlo a la lista de compras
function createItem(name, quantity, price) {
  const newItem = {
    name,// Nombre del artículo
    quantity,// Cantidad del artículo
    price,// Precio por unidad
    total: quantity * price,// Total del artículo (cantidad × precio)
  };
  shoppingList.push(newItem); // Añadimos el artículo al array `shoppingList`
  updateShoppingList(); // Actualizamos la tabla de la lista de compras
  calculateTotal(); // Calculamos el nuevo total de la compra
  clearForm(); // Limpiamos los campos del formulario
}

// Leer y mostrar la lista actual de compras.
//Para seguir el codigo CRUD ==R read
function readItems() {//Definimos funcion readitem
  const shoppingListBody = document.getElementById("shopping-list-body");//Obtenemos una referencia al cuerpo de la tabla
  shoppingListBody.innerHTML = ""; // Limpiamos la tabla
  shoppingList.forEach((item, index) => {
    //Iteramos sobre cada artículo en shoppingList
    const row = document.createElement("tr");//Creamos una fila<tr>
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>${item.price.toFixed(2)}</td>
      <td>${item.total.toFixed(2)}</td>
      <td><button onclick="deleteItem(${index})">Borrar</button></td>
    `;//Definimos el contenido HTML de la fila
    shoppingListBody.appendChild(row);
  });//Añadimos la fila creada
}

//Actualizar la tabla de la lista de compras.

function updateShoppingList() {
  readItems(); // Refresca los elementos visualizados
}

//Eliminar un artículo por su índice.

function deleteItem(index) { 
  shoppingList.splice(index, 1);// Eliminamos el artículo en la posición `index` del array 
  updateShoppingList();// Actualizamos la lista
  calculateTotal();//funcion para calcular total
}

// Calcular el total de la lista de compras.

function calculateTotal() {
  const totalAmount = shoppingList.reduce((acc, item) => acc + item.total, 0);
  //recorremos el array shoppinglist y acummulamos la suma en el total :reduce toma parametros acc y item y añadimos el valor al total 
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
  //Actualizamos el contenido del elemento HTML
}

//Reiniciar la lista de compras.
 
function resetList() {
  shoppingList = [];//Vaciamos el array
  updateShoppingList();//Llamamos a la función
  calculateTotal();//Llamamos a la función calculateTotal
}

//Limpiar los campos del formulario.
 
function clearForm() {
  document.getElementById("item-name").value = "";//Vacía el campo de entrada del nombre del artículo
  document.getElementById("cantidad").value = "";//Vacía el campo de entrada de la cantidad del artículo
  document.getElementById("item-price").value = "";//Vacía el campo de entrada del precio del artículo
}
 */