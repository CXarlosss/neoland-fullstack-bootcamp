// Inicializamos las listas de compra y de historial
let shoppingList = [];
let shoppingHistory = [];


  // Cargar los productos habituales al iniciar
 
// EVENTOS DEL INTERFAZ
document.addEventListener("DOMContentLoaded", () => {
  //cargar elementos habituales
   loadUsualProducts();
  
  // Agregar artículo
 
    document.getElementById("add-item").addEventListener("click", (event) => {
      event.preventDefault();
      const itemName = document.getElementById("item-name").value.trim();
      const itemQuantity = parseFloat(document.getElementById("cantidad").value) || 0;
      const itemPrice = parseFloat(document.getElementById("item-price").value) || 0;
  
      if (itemName && itemQuantity > 0 && itemPrice > 0) {
        createItem(itemName, itemQuantity, itemPrice);
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    })

    // Reiniciar lista
    document.getElementById("new-list").addEventListener("click", resetList);

    // Mostrar historial
    document.getElementById("historial").addEventListener("click", (event) => {
      event.preventDefault();
      showHistory();
    });
  

});
function loadUsualProducts() {
  fetch('./API/getarticles.json')
    .then((response) => {
      if (!response.ok) throw new Error("Error al cargar el archivo JSON");
      return response.json();
    })
    .then((data) => {
      populateDatalist(data);
    })
    .catch((error) => console.error("Error al cargar los productos habituales:", error));
}
// Rellenar el datalist con los productos del JSON
function populateDatalist(products) {
  const datalistElement = document.getElementById('productos');
  products.forEach((product) => {
    const option = document.createElement('option');
    option.value = product.name; // Usamos la propiedad 'name' del JSON
    datalistElement.appendChild(option);
  });
}
// Crear un artículo y añadirlo a la lista y al historial

function createItem(name, quantity, price) {
  const newItem = { name, quantity, price, total: quantity * price };
  shoppingList.push(newItem);
  shoppingHistory.push(newItem); // Añadir al historial global
  updateShoppingList();
  calculateTotal();
  clearForm();
}


// Mostrar historial
function showHistory() {
  const historyDisplay = document.getElementById("history-display");
  historyDisplay.innerHTML = ""; // Limpia el historial previo
  if (shoppingHistory.length === 0) {
    historyDisplay.innerHTML = "<p>No hay artículos en el historial.</p>";
  } else {
    shoppingHistory.forEach((item, index) => {
      const historyLine = document.createElement("p");
      historyLine.textContent = `Artículo ${index + 1}: ${item.name}, Cantidad: ${item.quantity}, Precio: $${item.price.toFixed(2)}, Total: $${item.total.toFixed(2)}`;
      historyDisplay.appendChild(historyLine);
    });
  }
}


// Actualizar la lista de compras en pantalla
function updateShoppingList() {
  const shoppingListBody = document.getElementById("shopping-list-body");
  shoppingListBody.innerHTML = "";
  shoppingList.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.quantity}</td>
      <td>$${item.price.toFixed(2)}</td>
      <td>$${item.total.toFixed(2)}</td>
      <td><button onclick="deleteItem(${index})">Borrar</button></td>
    `;
    shoppingListBody.appendChild(row);
  });
}

// Eliminar un artículo
function deleteItem(index) {
  shoppingList.splice(index, 1);
  updateShoppingList();
  calculateTotal();
}

// Calcular el total de la lista
function calculateTotal() {
  const totalAmount = shoppingList.reduce((acc, item) => acc + item.total, 0);
  document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
}

// Reiniciar lista
function resetList() {
  shoppingList = [];
  updateShoppingList();
  calculateTotal();
}

// Limpiar el formulario
function clearForm() {
  document.getElementById("item-name").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("item-price").value = "";
}

