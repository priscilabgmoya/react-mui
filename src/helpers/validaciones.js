import * as Yup from 'yup';
import { expRegulares } from './ExpRegulares';

export const validacionLogin = Yup.object({
    username: Yup.string().min(1, "Error! Ingrese el usuario").required('Error! El usuario es requerido'),
    password: Yup.string().required("Error! La contraseña es requerida")
})

export const validacionNuevaMarca = Yup.object().shape({
    descripcion: Yup.string()
        .min(1, "Error! Ingrese una descripcion de la Marca")
        .required("Error! Es requerido la descripcion de la Marca")
        .matches(expRegulares.text, "Ingrese solo palabras, no números"),
    categoriaId: Yup.number()
        .min(1, "Error! Es requerido seleccionar una Categoria de la Marca")
        .required("Error! Es requerido seleccionar una Categoria de la Marca"),
})
export const validacionNuevoModelo = Yup.object().shape({
    descripcion: Yup.string()
        .min(1, "Error! Ingrese una descripcion del Modelo")
        .required("Error! Es requerido la descripcion del Modelo")
        .matches(expRegulares.modelo, "Ingrese un modelo valido, Por ejemplo: M1502QA-BQ088W, SM22GHM"),
    marcaId: Yup.number()
        .min(1, "Error! Es requerido seleccionar una Marca de el modelo")
        .required("Error! Es requerido seleccionar una Marca de el modelo"),
})

export const validacionNuevoNomenclador = Yup.object().shape({
    cuenta: Yup.number()
        .min(431, "Error! Ingrese un número de cuenta correcto")
        .required("Error! El número de cuenta es requerido."),
    especie: Yup.number()
        .min(1, "Error! Ingrese un número de especie correcto")
        .required("Error! El número de especie es requerido."),
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida del nomenclador")
        .required("Error! Es requerida la descripción del nomenclador"),
    vidautil: Yup.number()
        .min(1, "Error! Ingrese un número de vida útil correcto")
        .required("Error! El número de vida útil es requerido."),
    amortanual: Yup.number()
        .min(1, "Error! Ingrese un número de amortización anual correcto")
        .required("Error! El número de amortización anual es requerido."),
});

export const validacionNuevaProvincia = Yup.object({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida de la provincia")
        .min(1, "Error! Ingrese una descripción de la provincia")
        .required("Error! Es requerida la descripción de la provincia"),
});


export const validacionNuevoEdificio = Yup.object({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida del Edificio")
        .min(1, "Error! Ingrese una descripción del Edificio")
        .required("Error! Es requerida la descripción del Edificio"),
});

export const validacionNuevoEstadoAsignacion = Yup.object({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida del Estado de Asignación")
        .min(1, "Error! Ingrese una descripción del Estado de Asignación")
        .required("Error! Es requerida la descripción del Estado de Asignación"),
});

export const validacionNuevoTipoAsignacion = Yup.object({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida del Tipo de Asignación")
        .min(1, "Error! Ingrese una descripción del Tipo de Asignación")
        .required("Error! Es requerida la descripción del Tipo de Asignación"),
});

export const validacionNuevaOficina = Yup.object({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida de la Oficina")
        .min(1, "Error! Ingrese una descripción de la Oficina")
        .required("Error! Es requerida la descripción de la Oficina"),
    piso: Yup.number()
        .min(1, "Error! Ingrese el piso de la Oficina")
        .required("Error! Es requerido el piso de la Oficina"),
    edificioId: Yup.number()
        .min(1, "Error! Es requerido seleccionar un Edificio de la Oficina")
        .required("Error! Es requerido seleccionar un Edificio de la Oficina"),
});

export const validacionNuevaLocalidad = Yup.object({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción válida de la Localidad")
        .min(1, "Error! Ingrese una descripción de la Localidad")
        .required("Error! Es requerida la descripción de la Localidad"),
    provinciaId: Yup.number()
        .min(1, "Error! Es requerido seleccionar una Provincia de la Localidad")
        .required("Error! Es requerido seleccionar una Provincia de la Localidad"),
});
// hasta aca hay exp regulares
export const validacionNuevoRubro = Yup.object({
    nombre: Yup.string().min(1, "Error! Ingrese un nombre del Rubro").required("Error! Es requerido el nombre del Rubro"),
    descripcion: Yup.string().min(1, "Error! Ingrese una descripcion del Rubro").required("Error! Es requerido la descripcion del Rubro"),
})

export const validacionNuevoProveedor = Yup.object({
    razonsocial: Yup.string().min(1, "Error! Ingrese una Razón Social del Proveedor").required("Error! Es requerido la Razón Social del Proveedor"),
    cuit: Yup.string().min(1, "Error! Ingrese un CUIT del Proveedor").required("Error! Es requerido el  CUIT del Proveedor"),
    email: Yup.string().min(1, "Error! Ingrese un email del Proveedor").required("Error! Es requerido el email del Proveedor"),
    telefono: Yup.string().min(1, "Error! Ingrese un telefono del Proveedor").required("Error! Es requerido el telefono del Proveedor"),
    direccion: Yup.string().min(1, "Error! Ingrese una direccion del Proveedor").required("Error! Es requerido la direccion del Proveedor"),
    localidadeId: Yup.number().min(1, "Error!  Es requerido seleccionar una Localidad  del Proveedor ").required("Error! Es requerido seleccionar una Localidad  del Proveedor"),
    rubroId: Yup.number().min(1, "Error!  Es requerido seleccionar un Rubro  del Proveedor ").required("Error! Es requerido seleccionar un Rubro  del Proveedor"),
})

export const validacionNuevoPermiso = Yup.object({
    descripcion: Yup.string().min(1, "Error! Ingrese una descripción del Permiso").required("Error! Es requerido la descripción del Permiso")
})
//agregar para la modificacion del rol solamente de la descripcion
export const validacionNuevoRol = Yup.object({
    descripcion: Yup.string().min(1, "Error! Ingrese una descripcion del Rol de Usuario").required("Error! Es requerido la descripcion del Rol de Usuario"),
    permisosId: Yup.array().min(1, "Error! Es requerido Agregar  un permiso del Rol de Usuario").of(Yup.object().shape({
        id: Yup.number().min(1, "Error! Ingrese nombre  de una Caracteristca").required('Error" El nombre de una caracterista es requerido'),
    }))
})
export const validacionModificarRol = Yup.object({
    descripcion: Yup.string().min(1, "Error! Ingrese una descripcion del Rol de Usuario").required("Error! Es requerido la descripcion del Rol de Usuario")
})

export const validacionBien = Yup.object({
    precioUnitario: Yup.string().min(1, "Error! Ingrese un Precio unitario  de un Bien").required("Error! Es requerido el precio de el Bien"),
    cantidad: Yup.number().positive("Error! Debe ser una cantidad postiva").required("Error! Es requerido la cantidad de Bienes"),
    detalleBienId: Yup.number().min(1, "Error!  Es requerido seleccionar un detalle del Bien").required("Error! Es requerido seleccionar un  detalle del Bien"),
    nroSeries: Yup.array().of(Yup.object().shape({
        nro: Yup.string().min(1, "Ingrese un numero de serie"),
    })),
    oficinaId: Yup.number().min(1, "Error!  Es requerido seleccionar una Oficina Destino ").required("Error! Es requerido seleccionar una Oficina Destino"),
})

export const validacionFactura = Yup.object({
    numero: Yup.string().min(1, "Error! Ingrese un Nro. de Factura ").required("Error! Es requerido el  Nro. de Factura "),
    fecha: Yup.string().min(1, "Error! Ingrese una fecha de la Factura ").required("Error! Es requerido la fecha de la Factura ").matches(/^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/(19|20)\d{2}$/, "Ingrese una fecha en formato dd/mm/yyyy "),
    observaciones: Yup.string().min(1, "Error! Ingrese una Observacion de la factura ").required("Error! Es requerido la Observacion de la factura "),
    monto: Yup.string().min(1, "Error! Ingrese un Nro. de Factura ").required("Error! Es requerido el  Nro. de Factura "),
    proveedorId: Yup.number().min(1, "Error!  Es requerido seleccionar un Proveedor de la Factura").required("Error! Es requerido seleccionar un Proveedor de la Factura"),
    file: Yup.mixed().required('Error! Es requerido el  archivo del comprobante'),
})

export const validacionFacturaObservacion = Yup.object({
    observaciones: Yup.string().min(1, "Error! Ingrese una Observacion de la factura ").required("Error! Es requerido la Observacion de la factura "),
    proveedorId: Yup.number().min(1, "Error!  Es requerido seleccionar un Proveedor de la Factura").required("Error! Es requerido seleccionar un Proveedor de la Factura"),
})
export const validacionCambioOficina = Yup.object({
    ultima_oficina: Yup.number().min(1, "Error!  Es requerido seleccionar una oficina de destino").required("Error! Es requerido seleccionar una oficina de destino"),
})
export const validacionRemito = Yup.object({
    numeroComprobante: Yup.string().min(1, "Error! Ingrese un Nro. de Remito").required("Error! Es requerido el  Nro. de Remito"),
    file: Yup.mixed().required('Error! Es requerido el  archivo del Remito'),
    fecha: Yup.string().min(1, "Error! Ingrese una fecha del Remito ").required("Error! Es requerido la fecha del Remito").matches(/^(0[1-9]|1[0-2])\/(0[1-9]|1[0-9]|2[0-9]|3[01])\/(19|20)\d{2}$/, "Ingrese una fecha en formato dd/mm/yyyy "),
})
export const validacionNuevaCategoria = Yup.object({
    descripcion: Yup.string().min(1, "Error! Ingrese una descripcion de la Categoría").required("Error! Es requerido la descripcion de la Categoría"),
    esInformatico: Yup.boolean(),
    caracteristicas: Yup.array().min(1, "Error! Es requerido Agregar  una Caracteristica de la Categoría").of(Yup.object().shape({
        nombre: Yup.string().min(1, "Error! Ingrese nombre  de una Caracteristca").required('Error" El nombre de una caracterista es requerido'),
    }))
})