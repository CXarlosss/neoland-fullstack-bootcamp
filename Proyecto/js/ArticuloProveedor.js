/* //Producto o servicio
 const articuloProveedor = {
    id:1,
    nombre:'Yoga en el parque',
    descripcion:'Clases individuales de yoga en el parque,personalizadas ',
    precio:15,
    ubicacion:'Avenida 123, Parque Central',
    horarios:['Lunes 10:00-11:00','Miercoles 17:00-18:00'],
    tipo:'servicio',
    metodoPago:['tarjeta','efectivo'],
    categoria:'Deporte',
    imagen:'ruta/a/imagen.jpg',
    sitioWeb:'https://ejemplo.com',
    disponibilidad:'Disponible',
    comentarios:[
        { usuario: 'Juan', valoracion: 5, comentario: 'Excelente clase de yoga.' },
        { usuario: 'Ana', valoracion: 4, comentario: 'Muy buen instructor, pero horarios limitados.' }
  
    ],
    enlaceDetalle:'https://ejemplo.com/detalle'//enlace a la pagina de servicios

}

 */

export class ArticuloProveedor {
  constructor(
    id,
    nombre,
    descripcion,
    precio,
    ubicacion,
    horarios,
    tipo,
    metodoPago,
    categoria,
    imagen,
    sitioWeb,
    disponibilidad,
    comentarios,
    enlaceDetalle
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.ubicacion = ubicacion;
    this.horarios = horarios;
    this.tipo = tipo;
    this.metodoPago = metodoPago;
    this.categoria = categoria;
    this.imagen = imagen;
    this.sitioWeb = sitioWeb;
    this.disponibilidad = disponibilidad;
    this.comentarios = comentarios;
    this.enlaceDetalle = enlaceDetalle;
  }
}