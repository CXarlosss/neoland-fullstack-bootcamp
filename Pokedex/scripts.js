/* PASOS A SEGUIR PARA REALIZAR EL EVENTO */
//Obtener el nombre del Pokemon:recogeremos el nombre ingresado en el campo de texto
//Hacer la peticion a la API: Utilizaremos la API publica de Pokemon para obtener informacion del POKEMON
//Mostrar el resultado:Mostrar los detalles del Pokemon en la tabla debajo del formulario
//Gestionar errores:Si no encuentra el pokemon que pasa??Si hay algun problema con la petición donde se muestra el error


// Referencia a los elementos del DOM
const pokemonForm = document.getElementById('pokemon-form');
const pokemonNameInput = document.getElementById('pokemon-name');
const addItemButton = document.getElementById('add-item');
const newListButton = document.getElementById('new-list');
const table = document.getElementById('tabla-pokemon');
const tbody = table.querySelector('tbody'); // Referencia al <tbody>

// Evento de buscar Pokémon cuando se haga clic en "Buscar Pokémon"
addItemButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe directamente
    const pokemonName = pokemonNameInput.value.trim().toLowerCase(); // Obtenemos el nombre del Pokémon en minúsculas
    if (pokemonName) {
        searchPokemon(pokemonName);
    } else {
        alert("Por favor, ingresa el nombre del Pokémon");
    }
});

// Función para hacer la búsqueda del Pokémon
function searchPokemon(name) {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`; // URL de la API para buscar el Pokémon
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Pokémon no encontrado");
            }
            return response.json();
        })
        .then(data => {
            displayPokemon(data); // Si es éxito mostramos el Pokémon
        })
        .catch(error => {
            alert(error.message); // Si hay error mostramos alerta
        });
}

// Función para mostrar el Pokémon en la tabla
function displayPokemon(data) {
    const row = document.createElement("tr");

    // Agregamos los datos del Pokémon a la tabla
    row.innerHTML = `
        <td>${data.name.charAt(0).toUpperCase() + data.name.slice(1)}</td>
        <td><img src="${data.sprites.front_default}" alt="${data.name}" width="100" height="100"></td> 
        <td>${data.weight / 10} kg</td>
        <td>${data.height / 10} m</td>
        <td><button class="delete-btn">Eliminar</button></td>
    `;

    // Añadimos el evento para eliminar la fila
    const deleteButton = row.querySelector(".delete-btn");
    deleteButton.addEventListener("click", () => {
        row.remove(); // Elimina la fila de la tabla
        checkTableVisibility(); // Verifica si la tabla debe seguir visible
    });

    tbody.appendChild(row); // Añadimos fila al <tbody>
    checkTableVisibility(); // Asegura que la tabla sea visible
}

// Función para verificar si la tabla debe estar visible
function checkTableVisibility() {
    if (tbody.children.length > 0) {
        table.style.display = "table"; // Muestra la tabla si tiene filas
    } else {
        table.style.display = "none"; // Oculta la tabla si está vacía
    }
}

// Evento para reiniciar el formulario y limpiar la tabla al hacer clic
newListButton.addEventListener('click', function () {
    pokemonNameInput.value = ''; // Limpiamos el campo de texto
    tbody.innerHTML = ''; // Limpiamos el <tbody>
    checkTableVisibility(); // Verifica si la tabla debe estar visible
});
