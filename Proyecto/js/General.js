/* Aqui habria que comentar lo que se introduciria en la general */

import { ArticuloProveedor } from './ArticuloProveedor.js'
import { ArticuloCliente } from './ArticuloCliente.js'

// Crear instancias de las clases
const proveedor = new ArticuloProveedor(1, 'Yoga en el parque', 'Clases individuales de yoga', 15, 'Avenida 123', ['Lunes 10:00-11:00'], 'servicio', ['tarjeta', 'efectivo'], 'Deporte', 'ruta/a/imagen.jpg', 'https://ejemplo.com', 'Disponible', [], 'https://ejemplo.com/detalle');

const cliente = new ArticuloCliente(1, 'Yoga en el parque', 'Clases individuales de yoga', 15, 'Avenida 123', 4.5, 'Deporte', 'ruta/a/imagen.jpg', 'tarjeta', 'https://ejemplo.com/detalle', ['Ver Detalles', 'Comprar Ahora']);

console.log(proveedor);
console.log(cliente);