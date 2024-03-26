import {SwapHoriz,HomeWork,Assignment,Logout ,FactCheck,Settings}from '@mui/icons-material';

export const linksNavbarGestionar = [
    {
        nombre: "Gestionar Categorías",
        link: "/GestionarCategorias"
    },
    {
        nombre: "Gestionar Edificios",
        link: "/GestionarEdficios"
    },
    {
        nombre: "Gestionar Estado de Asignación",
        link: "/GestionarEstadoAsignacion"
    },
    {
        nombre: "Gestionar Localidades",
        link: "/GestionarLocalidades"
    },
    {
        nombre: "Gestionar Marcas",
        link: "/GestionarMarcas"
    },
    {
        nombre: "Gestionar Modelos",
        link: "/GestionarModelos"
    },
    {
        nombre: "Gestionar Nomenclador Económico",
        link: "/GestionarNomencladorEconomico"
    },
    {
        nombre: "Gestionar Oficinas",
        link: "/GestionarOficinas"
    },
    {
        nombre: "Gestionar Permisos",
        link: "/GestionarPermisos"
    },
    {
        nombre: "Gestionar Proveedores",
        link: "/GestionarProveedores"
    },
    {
        nombre: "Gestionar Provincias",
        link: "/GestionarProvincias"
    },
    {
        nombre: "Gestionar Rubros",
        link: "/GestionarRubros"
    },
    {
        nombre: "Gestionar Rol de Usuarios",
        link: "/GestionarRolUsuarios"
    },
    {
        nombre: "Gestionar Tipo de Asignación",
        link: "/GestionarTipoDeAsignacion"
    },
    {
        nombre: "Gestionar Tipo de Bien",
        link: "/GestionarTipoDeBien"
    },
    {
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
        nombre: "Mantenimiento", 
        icon: <Settings/> , 
        data: linksNavbarGestionar
    },
    {
        nombre: "Cerrar Sesión",
        icon: <Logout/> , 
        link: "/informes"
    },
]