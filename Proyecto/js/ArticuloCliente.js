/* // articuloCliente.js
const articuloCliente = {
    id: 1, 
        nombre: 'Yoga en el parque',
        descripcion: 'Clases individuales de yoga en el parque.',
        precio: 15, // Precio por clase
        ubicacion: 'Avenida 123, Parque Central',
        valoraciones: 4.5,
        categoria: 'Deporte',
        imagen: 'ruta/a/imagen.jpg',
        metodoPago: 'tarjeta', 
        enlaceDetalle: 'https://ejemplo.com/detalle', 
        botonesAccion: ['Ver Detalles', 'Comprar Ahora'] 
      };

          */
export class ArticuloCliente {
    constructor(
      id,
      nombre,
      descripcion,
      precio,
      ubicacion,
      valoraciones,
      categoria,
      imagen,
      metodoPago,
      enlaceDetalle,
      botonesAccion
    ) {
      this.id = id;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.ubicacion = ubicacion;
      this.valoraciones = valoraciones;
      this.categoria = categoria;
      this.imagen = imagen;
      this.metodoPago = metodoPago;
      this.enlaceDetalle = enlaceDetalle;
      this.botonesAccion = botonesAccion;
    }
  }
  