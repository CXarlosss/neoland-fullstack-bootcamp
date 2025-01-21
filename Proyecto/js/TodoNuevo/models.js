
//CClase para comercio o actividades
class ComercioActividad {
    constructor(id, nombre, descripcion, precio, valoracion, ubicacion, horarios, tipo, metodoPago, categoria, imagen, sitioWeb, disponibilidad, comentarios) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.valoracion = valoracion;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.tipo = tipo;
        this.metodoPago = metodoPago;
        this.categoria = categoria;
        this.imagen = imagen;
        this.sitioWeb = sitioWeb;
        this.disponibilidad = disponibilidad;
        this.comentarios = comentarios;
    }
}
//Clase para el Mensaje
class Mensaje {
    constructor(id,idUsuario,idProveedor,mensaje,fecha){
        this.id = id;
        this.idUsuario = idUsuario;
        this.idProveedor = idProveedor,
        this.mensaje = mensaje;
        this.fecha = fecha;
    }
}
//Clase para los usuarios
class Usuario {
    constructor(id,nombre,email,contrasena,telefono,direccion,tipoUsuario,valoraciones){
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        this.contrasena = contrasena;
        this.telefono = telefono;
        this.direccion = direccion;
        this.tipoUsuario = tipoUsuario;
        this.valoracion = valoraciones;
    }
}
//Clases para la cesta de la compra
class CestaCompra{
    constructor(idCesta,idUsuario,productos =[],precioTotal = 0,estado,metodoPago,fechaCompra){
        this.idCesta = idCesta;
        this.idUsuario = idUsuario;
        this.productos =productos; 
        this.precioTotal = precioTotal;
        this.estado = estado;
        this.metodoPago = metodoPago;
        this.fechaCompra = fechaCompra;
    }
}
export{ComercioActividad,Mensaje,Usuario,CestaCompra};