class ShoppingManager {
    constructor() {
      if (ShoppingManager.instance) {
        return ShoppingManager.instance; // Retornar la única instancia existente
      }
  
      // Inicializar las propiedades
      this.shoppingList = [];
      this.shoppingHistory = [];
      ShoppingManager.instance = this; // Guardar la instancia única
    }
  
    // Agregar un nuevo artículo
    
    createItem(name, quantity, price) {
      const newItem = { name, quantity, price, total: quantity * price };
      this.shoppingList.push(newItem);
      this.shoppingHistory.push(newItem); // Añadir al historial global
      return newItem;
    }
  
    // Obtener la lista de compras
    getShoppingList() {
      return this.shoppingList;
    }
  
    // Obtener el historial
    getShoppingHistory() {
      return this.shoppingHistory;
    }
  
    // Eliminar un artículo
    deleteItem(index) {
      this.shoppingList.splice(index, 1);
    }
  
    // Reiniciar la lista de compras
    resetList() {
      this.shoppingList = [];
    }
  
    // Calcular el total de la lista
    calculateTotal() {
      return this.shoppingList.reduce((acc, item) => acc + item.total, 0);
    }
  }
  
  // Crear la instancia única
  const shoppingManager = new ShoppingManager();
  
  // EVENTOS DEL INTERFAZ
  document.addEventListener("DOMContentLoaded", () => {
    // Cargar productos habituales
    loadUsualProducts();
  
    // Agregar artículo
    document.getElementById("add-item").addEventListener("click", (event) => {
      event.preventDefault();
      const itemName = document.getElementById("item-name").value.trim();
      const itemQuantity = parseFloat(document.getElementById("cantidad").value) || 0;
      const itemPrice = parseFloat(document.getElementById("item-price").value) || 0;
  
      if (itemName && itemQuantity > 0 && itemPrice > 0) {
        shoppingManager.createItem(itemName, itemQuantity, itemPrice);
        updateShoppingList();
        updateTotal();
        clearForm();
      } else {
        alert("Por favor, completa todos los campos correctamente.");
      }
    });
  
    // Reiniciar lista
    document.getElementById("new-list").addEventListener("click", () => {
      shoppingManager.resetList();
      updateShoppingList();
      updateTotal();
    });
  
    // Mostrar historial
    document.getElementById("historial").addEventListener("click", (event) => {
      event.preventDefault();
      showHistory();
    });
  });
  
  // FUNCIONES AUXILIARES
  function loadUsualProducts() {
    fetch('./API/getarticles.json')
      .then((response) => {
        if (!response.ok) throw new Error("Error al cargar el archivo JSON");
        return response.json();
      })
      .then((data) => populateDatalist(data))
      .catch((error) => console.error("Error al cargar los productos habituales:", error));
  }
  
  function populateDatalist(products) {
    const datalistElement = document.getElementById('productos');
    products.forEach((product) => {
      const option = document.createElement('option');
      option.value = product.name;
      datalistElement.appendChild(option);
    });
  }
  
  function updateShoppingList() {
    const shoppingListBody = document.getElementById("shopping-list-body");
    shoppingListBody.innerHTML = "";
    const list = shoppingManager.getShoppingList();
  
    list.forEach((item, index) => {
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
  
  function deleteItem(index) {
    shoppingManager.deleteItem(index);
    updateShoppingList();
    updateTotal();
  }
  
  function updateTotal() {
    const totalAmount = shoppingManager.calculateTotal();
    document.getElementById("total-amount").textContent = totalAmount.toFixed(2);
  }
  
  function clearForm() {
    document.getElementById("item-name").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("item-price").value = "";
  }
  
  function showHistory() {
    const historyDisplay = document.getElementById("history-display");
    historyDisplay.innerHTML = "";
    const history = shoppingManager.getShoppingHistory();
  
    if (history.length === 0) {
      historyDisplay.innerHTML = "<p>No hay artículos en el historial.</p>";
    } else {
      history.forEach((item, index) => {
        const historyLine = document.createElement("p");
        historyLine.textContent = `Artículo ${index + 1}: ${item.name}, Cantidad: ${item.quantity}, Precio: $${item.price.toFixed(2)}, Total: $${item.total.toFixed(2)}`;
        historyDisplay.appendChild(historyLine);
      });
    }
  }
  