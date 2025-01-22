import { realizarBusqueda } from './search.js';
import { mostrarDetallesProducto, enviarMensajeAProveedor } from './detalles.js';

window.realizarBusqueda = realizarBusqueda;
window.mostrarDetallesProducto = mostrarDetallesProducto;
window.enviarMensajeAProveedor = enviarMensajeAProveedor;     

// Función para cargar datos desde Api.json
async function cargarDatos() {
    try {
        const response = await fetch('./Api.json'); // Ajusta la ruta si el archivo está en otra carpeta
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

        // Mostrar los datos en consola (puedes modificar esto para mostrarlos en tu página)
        console.log(data);

        // Llama a la función que los renderiza en la interfaz
        mostrarDatos(data);
    } catch (error) {
        console.error('Error al cargar Api.json:', error);
    }
}

// Función para renderizar los datos en la interfaz
function mostrarDatos(data) {
    const resultadosDiv = document.querySelector('.resultados');

    for (const id in data) {
        const item = data[id];

        // Crear un div para cada elemento
        const elementoDiv = document.createElement('div');
        elementoDiv.className = 'resultado-item';

        // Insertar contenido
        elementoDiv.innerHTML = `
            <h2>${item.nombre}</h2>
            <p>${item.descripcion}</p>
            <p><strong>Ubicación:</strong> ${item.ubicacion}</p>
            <p><strong>Precio:</strong> ${item.precio}</p>
            <p><strong>Valoración:</strong> ${item.valoracion}</p>
            <p><strong>Horarios:</strong> ${item.horarios}</p>
            <p><strong>Categoría:</strong> ${item.categoria}</p>
            <p><strong>Método de Pago:</strong> ${item.metodoPago}</p>
        `;

        // Añadir al contenedor
        resultadosDiv.appendChild(elementoDiv);
    }
}

// Llamar a la función para cargar los datos
cargarDatos();