import { Box } from "@mui/material";
import PruebaDos from "../components/pruebaHook/Prueba_dos";
import PruebaUno from "../components/pruebaHook/Prueba_uno";
import TablaCheck from "../components/Tabla/TablaCheck";
import MyForm from "../components/autocompletado/form";
import ComboBox from "../components/autocompletado/autocompletado";
import LineaDeTiempo from "../components/timeliner/Timeliner";
import InputDay from "../components/inputDays/InputDays";
import PrecioInput_Dos from "../components/inputDays/inputPrecio_Dos";
import PruebaTres from "../components/pruebaHook/Prueba_tres";

export const routePrivate = [
    {
        path: "/GestionarEdficios",
        element: <PruebaDos />
    },
    {
        path: "/GestionarOficinas",
        element: <PruebaUno/>
    },
    {
        path: "/GestionarLocalidades",
        element: <PruebaTres/>
    },
    {
        path: "/GestionarEstadoAsignacion",
        element: <InputDay/>
    },
    {
        path: "/GestionarTipoDeBien",
        element: <PrecioInput_Dos/>
    },
    {
        path: "/GestionarTipoDeAsignacion",
        element: <Box>/GestionarTipoDeAsignacion</Box>
    },
    {
        path: "/GestionarMarcas",
        element: <LineaDeTiempo/>
    },
    {
        path: "/GestionarModelos",
        element: <Box>/GestionarModelos</Box>
    },
    {
        path: "/GestionarPermisos",
        element: <Box>/GestionarPermisos</Box>
    },
    {
        path: "/GestionarRolUsuarios",
        element: <Box>/GestionarRolUsuarios</Box>
    },
    {
        path: "/GestionarProveedores",
        element: <Box>/GestionarProveedores</Box>
    },
    {
        path: "/GestionarRubros",
        element: <Box>/GestionarRubros</Box>
    },
    {
        path: "/GestionarNomencladorEconomico",
        element: <Box>/GestionarNomencladorEconomico</Box>
    },
    {
        path: "/GestionarProvincias",
        element: <Box>/GestionarProvincias</Box>
    },
    {
        path: "/GestionarCategorias",
        element: <Box>/GestionarCategorias</Box>
    },
    {
        path: "/",
        element: <TablaCheck/>
    }
]

export const routePublic = [
    {
        path: "/auth",
        element: <ComboBox/>
    },
    {
        path: "/prueba",
        element: <MyForm/>
    }
]