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
import CrearBien from "../components/Tabla/altaBien";
import { EncodeBase64 } from "../components/base64/Base64";
import LoadFromBase64Example from "../components/base64/Base64_segunda";
import PaginationModelControlled from "../components/Tabla/TablaPag";
import Transferencia from "../components/transferencia/Transferencia";
import InputPrice from "../components/InputPrice/InputPrice";
import {  TableData } from "../components/Table";

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
        element: <PaginationModelControlled/>
    },
    {
        path: "/GestionarMarcas",
        element: <LineaDeTiempo/>
    },
    {
        path: "/GestionarModelos",
        element: <Transferencia/>
    },
    {
        path: "/GestionarPermisos",
        element:  <ComboBox/>
    },
    {
        path: "/GestionarRolUsuarios",
        element: <TableData/>
    },
    {
        path: "/GestionarProveedores",
        element: <Box>/GestionarProveedores</Box>
    },
    {
        path: "/GestionarRubros",
        element: <InputPrice />
    },
    {
        path: "/GestionarNomencladorEconomico",
        element:  <LoadFromBase64Example/> 
    },
    {
        path: "/GestionarProvincias",
        element: <EncodeBase64/>  
    },
    {
        path: "/GestionarCategorias",
        element: <CrearBien/>
    },
    {
        path: "/",
        element: <ComboBox/>
    }
]

export const routePublic = [
    {
        path: "/auth",
        element: <TablaCheck/>
    },
    {
        path: "/prueba",
        element: <MyForm/>
    }
]