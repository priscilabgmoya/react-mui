import {SwapHoriz,HomeWork,Assignment,Logout ,FactCheck,Settings}from '@mui/icons-material';
import { reduceData } from './helps';

export const linksNavbarGestionar = [
    {
        categoria:"Bienes",
        nombre: "Gestionar Categorías",
        link: "/GestionarCategorias"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Edificios",
        link: "/GestionarEdficios"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Estado de Asignación",
        link: "/GestionarEstadoAsignacion"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Localidades",
        link: "/GestionarLocalidades"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Marcas",
        link: "/GestionarMarcas"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Modelos",
        link: "/GestionarModelos"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Nomenclador Económico",
        link: "/GestionarNomencladorEconomico"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Oficinas",
        link: "/GestionarOficinas"
    },
    {
        categoria: "Usuarios", 
        nombre: "Gestionar Permisos",
        link: "/GestionarPermisos"
    },
    {
        categoria: "Proveedores",
        nombre: "Gestionar Proveedores",
        link: "/GestionarProveedores"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Provincias",
        link: "/GestionarProvincias"
    },
    {
        categoria: "Proveedores",
        nombre: "Gestionar Rubros",
        link: "/GestionarRubros"
    },
    {
        categoria: "Usuarios", 
        nombre: "Gestionar Rol de Usuarios",
        link: "/GestionarRolUsuarios"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Tipo de Asignación",
        link: "/GestionarTipoDeAsignacion"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Tipo de Bien",
        link: "/GestionarTipoDeBien"
    },
    {
        categoria: "Usuarios", 
        nombre: "Gestionar Usuarios",
        link: "/GestionarUsuarios"
    },
]

export const linkNavBar = [
    {
        nombre: "Transferencias",
        icon: <SwapHoriz />, 
        link: "/transferencias"
    },
    {
        nombre: "Facturas",
        icon: <FactCheck/> , 
        link: "/facturas"
    },
    {
        nombre: "Bienes",
        icon: <HomeWork/>,
        link: "/bienes"
    },
    {
        nombre: "Informes",
        icon: <Assignment/> , 
        link: "/informes"
    },
    {
        nombre: "Menú", 
        icon: <Settings/> , 
        data: reduceData(linksNavbarGestionar)
    },
    {
        nombre: "Cerrar Sesión",
        icon: <Logout/> , 
        link: "/informes"
    },
]