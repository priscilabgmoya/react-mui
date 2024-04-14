const usuarioInicial = {
    id: 0, 
    nombre: undefined,
    apellido: undefined, 
    dni: undefined, 
    email:undefined, 
    telefono: undefined, 
    direccion: undefined, 
    username: undefined, 
    password:undefined,
    roleId: 0
}
const nomencladorInicial ={
    cuenta: undefined, 
    especie: undefined,
    descripcion: undefined,
    vidautil: undefined,
    amortanual: undefined, 
    estadoactivo: 1
}
const tipoBienInicial = {id: 0, descripcion: undefined, estadoactivo: 1}

const modeloIncial =  {id: 0, descripcion: "", estadoactivo: 1, marcaId: undefined }
 const marca = {id: 0, descripcion: "", estadoactivo: undefined, categoriaId: null }

const provinciaInicial ={id: 0, descripcion: undefined}
const edificioInicial ={id: 0, descripcion: undefined,estadoactivo: 1} 
const estadoAsignacionInicial ={id: 0, descripcion: undefined,estadoactivo: 1} 
const tipoAsignacionInicial ={id: 0, descripcion: undefined,estadoactivo: 1}
export const dataInicial ={
    caracteristicas: [],
    categorias: [] ,
    edificios: [],
    localidades: [],
    marcas: [],
    modelos: [] ,
    nomenclador: [] ,
    oficinas: [] ,
    permisos: [] ,
    pisos: [],
    proveedores: [],
    provincias: [],
    rolusuarios: [],
    rubro: [],
    tipobien: [],
    usuarios: [],
    tipoasignacion: [], 
    estadoasignacion: [], 
    detallebienes: [], 
    bienesalta: [], 
    facturas: [], 
    error: {}, 
    isLoaded: true
}


export const marcaReducerInicial = {
   type: "",
   value: { id: 0, descripcion: "", estadoactivo: 1, modelos: [] },
   isUpdate: false, 
   response: {}
}
 const categoriaInicial =  {id: 0, descripcion:undefined, esInformatico: false , caracteristicas: [{nombre: undefined}]}

//const caracteristicaInicial =   {id: 0, nombre: undefined, categoriaId:undefined }
 const oficinaInicial = {id: 0, descripcion: undefined, ultimoorden: undefined, piso:  undefined , edificioId: undefined}

const localidadInicial = {id: 0, descripcion:undefined,  provinciaId: undefined}

const proveedorIncial = {id: 0, razonsocial:undefined, cuit:undefined, email: undefined, telefono:undefined, direccion: undefined,  localidadId: undefined, rubroId: undefined}

const rubroInicial = {id: 0, descripcion: undefined, nombre: undefined}
 const permisoInicial = {id: 0, descripcion: undefined}

const rolUsuarioInicial =  {id: 0, descripcion: undefined, permisosIds: [{id:undefined}] }

const altaBienes = {id: 0 , userId: 1, bienes: {} , oficinaId: 0}
const bienesInicial = {id: 0, descripcion: undefined, nroSeries: undefined , nroSerie: undefined , pendiente: undefined, precioUnitario: undefined , cantidad: undefined,  detalleBienId: undefined, oficinaId: undefined  ,fechaCompra: undefined }
const facturaInicial = {id: 0, numero:undefined,  fecha: undefined, observaciones: undefined , proveedorId: undefined , file: undefined ,pendiente: true}
const remitoInicial = {id: 0, numeroComprobante:undefined ,fecha: undefined, file: undefined , facturaId: undefined}
const cambioOficina = {id: 0, ultima_oficina : undefined}
const proveedorDetalle = {
    cuit: "", 
    descripcion: "",
    email: "", 
    direccion: "", 
    telefono: "",
    localidad: "",
    provincia: "", 
    rubroNombre: "",
    rubroDescripcion : "" 
  }
  const marcaDetalle = {
    descripcion: "",
    categoria: "",
    modelos: [],
  }
  const categoriaDetalle = {
    descripcion: "",
    esInformatico: false,
    caracteristicas: [],
  }
  const detalleBienD = {
    descripcion: "",
    modelo: "", 
    marca: "", 
    categoria: "", 
    caracteristicas: [],
    nomenclador: {}
}
export  const valoresIniciales = {
    bien: bienesInicial,
    rol: rolUsuarioInicial, 
    permiso: permisoInicial,
    rubro: rubroInicial,
    proveedor: proveedorIncial,
    localidad : localidadInicial,
    oficina: oficinaInicial, 
    categoria: categoriaInicial, 
    tipoAsignacion: tipoAsignacionInicial,
    estadoAsignacion: estadoAsignacionInicial,
    tipoBien: tipoBienInicial, 
    nomenclador: nomencladorInicial,
    usuario: usuarioInicial, 
    marca: marca, 
    modelo: modeloIncial,
    edificio: edificioInicial,
    provincia: provinciaInicial,
    factura: facturaInicial, 
    bien: bienesInicial,
    cambioOficina: cambioOficina, 
    remito: remitoInicial
} 

export const  valoresDetalle = {
    proveedor: proveedorDetalle,
    marca: marcaDetalle,
    categoria: categoriaDetalle,
    detalle: detalleBienD
}