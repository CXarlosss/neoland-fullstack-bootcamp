//Creamos una base entidad
//Sera la base de clases como Usuario,Proveedor y ComercioActividad

class EntidadBase {
    constructor(id,nombre,descripcion){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion
    }
    /* mostrarInfoBasica(){
        return `${this.nombre}:${this.descripcion}`;
    } */
}

//Clase de Usuario Extendida de Entidad
class Usuario extends EntidadBase {
    constructor(id,nombre,descripcion,correo,tipoUsuario){
        super(id,nombre,descripcion);
        this.correo = correo;
        this.tipoUsuario = tipoUsuario;
    
    }
    /* mostrarPerfil(){
        return `Usuario: ${this.nombre}, Tipo:${this.tipoUsuario}`;
    } */
}
//CClase para comercio o actividades
class ComercioActividad extends EntidadBase {
    constructor(id,nombre,descripcion,precio,valoracion,ubicacion,horarios,tipo,metodoPago,categoria){
        super(id,nombre,descripcion);
        this.precio = precio;
        this.valoracion = valoracion;
        this.ubicacion = ubicacion;
        this.horarios = horarios;
        this.tipo = tipo;
        this.metodoPago = metodoPago;
        this.categoria = categoria;
    }
   /*  mostrarDetalles(){
        return `
            ${this.nombre}
            Descripcion: ${this.descripcion}
            Precio: ${this.precio}
            Valoracion: ${this.valoracion}
            Ubicacion: ${this.ubicacion}
            Horarios: ${this.horarios}
            Categorias: ${this.categoria}
            Metodo de Pago: ${this.metodoPago} `
    } */
}
//Clase para el Mensaje
class Mensaje{
    constructor(id,idUsuario,idProveedor,mensaje,fecha){
        this.id = id;
        this.idUsuario = idUsuario;
        this.idProveedor = idProveedor,
        this.mensaje = mensaje;
        this.fecha = fecha;
    }
}