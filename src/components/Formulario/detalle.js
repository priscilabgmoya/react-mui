import * as Yup from 'yup';
import { expRegulares } from '../../helpers/ExpRegulares';

export const detalleBien = {id: 0, descripcion: null, estadoactivo: 1, modeloId: null, marcaId: null, categoriaId: null, nomencladorId: null , caracteristicas: []}; 
export const validacionNuevoDetalleBien = Yup.object().shape({
    descripcion: Yup.string()
        .matches(expRegulares.descripcionAcento, "Error! Ingrese una descripción valida")
        .min(1, "Error! Ingrese una descripción del Detalle Bien")
        .required("Error! Es requerida una descripción del Detalle Bien"),
    modeloId: Yup.number()
        .min(1, "Error! Es requerido seleccionar un modelo del Detalle Bien")
        .required("Error! Es requerido seleccionar  un modelo del Detalle Bien"),
    marcaId: Yup.number()
        .min(1, "Error! Es requerido seleccionar una marca del Detalle Bien")
        .required("Error! Es requerido seleccionar una marca del Detalle Bien"),
    nomencladorId: Yup.number()
        .min(1, "Error! Es requerido seleccionar un nomenclador del Detalle Bien")
        .required("Error! Es requerido seleccionar un nomenclador del Detalle Bien"),
    categoriaId: Yup.number()
        .min(1, "Error! Es requerido seleccionar una categoría del Detalle Bien")
        .required("Error! Es requerido seleccionar una categoría del Detalle Bien"),
    caracteristicas:Yup.array().of(
        Yup.object().shape({
            caracteristicaId: Yup.number(),
            valor: Yup.string(),
    }))
});