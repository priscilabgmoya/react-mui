import {SwapHoriz,HomeWork,Assignment,Logout ,FactCheck,Settings,Search,Checklist}from '@mui/icons-material';
import { reduceData } from './helps';

export const linksNavbarGestionar = [
    {
        categoria:"Bienes",
        nombre: "Gestionar Categorías",
        icon: <Settings/> , 
        link: "/GestionarCategorias"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Edificios",
        icon: <Settings/> , 
        link: "/GestionarEdficios"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Estado de Asignación",
        icon: <Settings/> , 
        link: "/GestionarEstadoAsignacion"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Localidades",
        icon: <Settings/> , 
        link: "/GestionarLocalidades"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Marcas",
        icon: <Settings/> , 
        link: "/GestionarMarcas"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Modelos",
        icon: <Settings/> , 
        link: "/GestionarModelos"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Nomenclador Económico",
        icon: <Settings/> , 
        link: "/GestionarNomencladorEconomico"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Oficinas",
        icon: <Settings/> , 
        link: "/GestionarOficinas"
    },
    {
        categoria: "Usuarios", 
        nombre: "Gestionar Permisos",
        icon: <Settings/> , 
        link: "/GestionarPermisos"
    },
    {
        categoria: "Proveedores",
        nombre: "Gestionar Proveedores",
        icon: <Settings/> , 
        link: "/GestionarProveedores"
    },
    {
        categoria:"Ubicación",
        nombre: "Gestionar Provincias",
        icon: <Settings/> , 
        link: "/GestionarProvincias"
    },
    {
        categoria: "Proveedores",
        nombre: "Gestionar Rubros",
        icon: <Settings/> , 
        link: "/GestionarRubros"
    },
    {
        categoria: "Usuarios", 
        nombre: "Gestionar Rol de Usuarios",
        icon: <Settings/> , 
        link: "/GestionarRolUsuarios"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Tipo de Asignación",
        icon: <Settings/> , 
        link: "/GestionarTipoDeAsignacion"
    },
    {
        categoria:"Bienes",
        nombre: "Gestionar Tipo de Bien",
        icon: <Settings/> , 
        link: "/GestionarTipoDeBien"
    },
    {
        categoria: "Usuarios", 
        nombre: "Gestionar Usuarios",
        icon: <Settings/> , 
        link: "/GestionarUsuarios"
    },
    {
        categoria: "Operaciones", 
        nombre: "Transferencias",
        icon: <SwapHoriz />, 
        link: "/transferencias"
    },
    {
        categoria: "Operaciones", 
        nombre: "Facturas",
        icon: <FactCheck/> , 
        link: "/facturas"
    },
    {
        categoria: "Operaciones", 
        nombre: "Consultas",
        icon: <Search/> , 
        link: "/consultas"
    },
    {
        categoria: "Operaciones", 
        nombre: "Informes",
        icon: <Assignment/> , 
        link: "/informes"
    },
    {
        categoria: "Bienes Patrimoniales", 
        nombre: "Bienes Pendientes",
        icon: <Checklist/>,
        link: "/bienes"
    },
    {
        categoria: "Bienes Patrimoniales", 
        nombre: "Bienes",
        icon: <Checklist/>,
        link: "/bienes"
    },
    {
        categoria: "Bienes Informáticos", 
        nombre: "Bienes Pendientes",
        icon: <Checklist/>,
        link: "/bienes"
    },
    {
        categoria: "Bienes Informáticos", 
        nombre: "Bienes",
        icon: <Checklist/>,
        link: "/bienes"
    },
    {
        categoria: "Bienes Informáticos", 
        nombre: "Equipos de Trabajo",
        icon: <Checklist/>,
        link: "/bienes"
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