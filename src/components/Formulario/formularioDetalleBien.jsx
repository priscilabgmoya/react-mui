import { Box } from "@mui/system";
import { inputGestionar } from "../../CSS/gestionar";
import { form, msgError } from "../../CSS/Login";
import { Autocomplete, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { categoriasData, marcasData, modelosData, nomencladorData } from "../../helpers/data";
import { detalleBien, validacionNuevoDetalleBien } from "./detalle";
import { useFormik } from "formik";

export default function ModificarDetalleBienModal() {
const [marcas, setMarcas] = useState(marcasData);
const [modelos, setModelos] = useState(modelosData);
const [categorias, setCategorias] = useState(categoriasData);
const [nomencladores, setNomencladores] = useState(nomencladorData);


  const handleChangeMarca = (value) =>{
    if(value){
      const modeloFilter = modelos.filter(modelo=> {return modelo.marcaId === value?.id}); 
      //updateState(instanciaModelo.objUpdate(modeloFilter)); 
      setModelos(modeloFilter)
      formik.setFieldValue('marcaId', value?.id); 
    }else{
      //instanciaModelo.getAllValue(dispatch); 
      setModelos(modelosData); 
    }
  }
  const handleChangeCategoria = (value) =>{
    if(value){
      console.log(value);
      formik.setFieldValue('categoriaId', value?.id); 
      if(value.caracteristicas?.length !== 0){
        let newCaracteristicas = value?.caracteristicas.map(option =>{
          return {
            label: option.nombre,
            caracteristicaId: option.id,
            valor: ""
          }
        })
        console.log(newCaracteristicas);
        formik.setFieldValue('caracteristicas',newCaracteristicas); 
      }
    }else{
      formik.setFieldValue('caracteristicas',[]); 
    }
  }
  const handleReset = (values,{resetForm }) => {
    resetForm(); // Esto restablecerá el formulario a sus valores iniciales
  };
    const onSubmit = async (values,{resetForm }) => {
     // handleChange();
      console.log(values);
      //const { data } = await instanciaDetalleBien.postNewValue(values);
      //instanciaCategoria.reload(); 
      resetForm();
      //window.location.reload();
    };

    const formik = useFormik({
        initialValues: detalleBien,
        validationSchema: validacionNuevoDetalleBien,
        onSubmit: onSubmit,
        onReset: handleReset
      });
    const closeModal = () => {
      //handleChange();
      formik.resetForm();
     // instanciaCategoria.clearSelecction();
      window.location.reload();
    };
  console.log(formik.values);
    return(
                  <Box
        component={"form"}
        onSubmit={formik.handleSubmit}
        onReset={formik.onReset}
        className="formLogin"
        sx={form}
      >
        <Box sx={{ m: 1 }}>
          <TextField
            type="text"
            role="inputDescripcionDetalle"
            name="descripcion"
            id="descripcionCategoria"
            label="Descripcíon"
            onChange={formik.handleChange}
            value={formik.values.descripcion}
            sx={inputGestionar}
          />
          {formik?.touched.descripcion && formik?.errors.descripcion ? (
            <Box sx={msgError}>{formik?.errors.descripcion}</Box>
          ) : null}
        </Box>
        <Box sx={{ m: 1 }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="oficinaId"
            onChange={(_, newValue) => formik.setFieldValue('nomencladorId', newValue?.id)}
            getOptionLabel={(option) => { return ` ${option.cuenta} - ${option.descripcion}` }}
            options={nomencladores}
            sx={inputGestionar}
            value={nomencladores.find(nomenclador =>{return nomenclador.id === formik.values.nomencladorId})}
            renderInput={(params) => <TextField {...params} label="Nomenclador" />}
          />
            {formik?.touched.nomencladorId && formik?.errors.nomencladorId ? (
              <Box sx={msgError}>{formik?.errors.nomencladorId}</Box>
            ) : null}
        </Box>
        <Box sx={{ m: 1 }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="oficinaId"
            onChange={(_, newValue) =>handleChangeMarca(newValue)}
            getOptionLabel={(option) => { return `${option.descripcion}` }}
            options={marcas}
            sx={inputGestionar}
            value={marcas.find(marcas =>{return marcas.id === formik.values.marcaId})}
            renderInput={(params) => <TextField {...params} label="Marca" />}
          />
            {formik?.touched.marcaId && formik?.errors.marcaId ? (
              <Box sx={msgError}>{formik?.errors.marcaId}</Box>
            ) : null}
        </Box>
        <Box sx={{ m: 1 }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="oficinaId"
            onChange={(_, newValue) => formik.setFieldValue('modeloId', newValue?.id)}
            getOptionLabel={(option) => { return `${option.descripcion}` }}
            options={modelos}
            sx={inputGestionar}
            value={modelos.find(modelo =>{return modelo.id === formik.values.modeloId})}
            renderInput={(params) => <TextField {...params} label="Modelo" />}
          />
            {formik?.touched.modeloId && formik?.errors.modeloId? (
              <Box sx={msgError}>{formik?.errors.modeloId}</Box>
            ) : null}
        </Box>
        <Box sx={{ m: 1 }}>
        <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="oficinaId"
            onChange={(_, newValue) => handleChangeCategoria(newValue)}
            getOptionLabel={(option) => { return `${option.descripcion}` }}
            options={categorias}
            sx={inputGestionar}
            value={categorias.find(categoria =>{return categoria.id === formik.values.categoriaId})} 
            renderInput={(params) => <TextField {...params} label="Categoría" />}
          />
            {formik?.touched.categoriaId && formik?.errors.categoriaId? (
              <Box sx={msgError}>{formik?.errors.categoriaId}</Box>
            ) : null}
        </Box>
        {
          formik.values.caracteristicas &&      <Box sx={{ m: 1 }}>
          <Typography sx={{ verticalAlign: "middle", fontStyle: "italic" }}>
            Caracteristicas:{" "}
          </Typography>
          {formik.values.caracteristicas.map((address, index) => (
            <Box
              sx={{ m: 1, display: "flex", alignItems: "center" }}
              key={index}
            >
              <TextField
                label={formik.values.caracteristicas[index].label}
                type="text"
                id={`caracteristicas.${index}.caracteristicaId`}
                name={`caracteristicas.${index}.valor`}
                onChange={formik.handleChange}
                sx={inputGestionar}
              />
              {formik.touched[`caracteristicas.${index}.nombre`] &&
              formik.errors[`caracteristicas.${index}.nombre`] ? (
                <Box sx={msgError}>
                  {formik.errors[`caracteristicas.${index}.nombre`]}
                </Box>
              ) : null}
            </Box>
          ))}
        </Box>
        }
          <Box sx={{display: "flex", justifyContent:"center", alignItems:"center" , width:"100%"  }}>
          <Button   variant="contained" color="error" size="medium" type="reset"  sx={{m:1}}> Cancelar </Button>
           <Button    variant="contained"  type="submit" color="success"   size="medium"     sx={{m:1}}> Guardar</Button>
        </Box>

      </Box>
    
    ); 
}
