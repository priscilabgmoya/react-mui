/* eslint-disable react/prop-types */
import {Autocomplete, Box, Button, Checkbox, FormControlLabel, Grid, IconButton, TextField, Tooltip, Typography } from '@mui/material';
import {  btnDetalle, btnEliminarCaracteristica,  formAltaBien, inputCaracteristica, inputGestionar, selectDetalle } from '../../CSS/gestionar';
import {Add,RemoveRedEye} from "@mui/icons-material";
import {msgError } from '../../CSS/Login';
//import { useDataContext } from '../../Hooks/DataHooks';
import InputDays from '../inputDays/InputDays';
//import { useGestionarContext } from '../../Hooks/GestionarHooks';

//import { Error, } from '../../Helpers/alertas';
//import { useLoginContext } from '../../Hooks/LoginHooks';

export default function FormularioNuevoBien({formik, addInfo, pendiente, isUpdate,clearFormik, addReset,reset}){
    /*const { stateData} = useDataContext();
    const {instanciaBien} = useGestionarContext(); 
    const {get_t,get_informatico} = useLoginContext(); 
    const { userInformatico} = get_informatico(); 
    const {userToken} = get_t(); */
    const createNroSerie = async (indexList) =>{
  /*
        const {data} = await instanciaBien.getNroSerie(userToken); 
        formik?.values.nroSeries.map((nroSerie,index) =>{
          if(indexList == index){
            nroSerie.nro = data;
          }
          return nroSerie; 
        })
        formik?.setFieldValue('nroSeries', formik?.values.nroSeries); 
        addReset(formik?.values.nroSeries); */
      }
      const addNro = (e) =>{
         
        formik?.handleChange(e); 
        //addReset(formik?.values.nroSeries); 
      }
      const addNroSeries= (e)=>{
    // ver de nuevo
    /*if(e.target.value){

             
           const cantidad = parseInt(e.target.value);
           if(cantidad< 1) return Error("la cantidad no puede ser menor que uno"); 
           formik?.handleChange(e); 
           if(!isUpdate){
            formik?.values.nroSeries= []; 
             for (let index = 0; index < cantidad; index++) {
               formik?.values.nroSeries.push({nro: ""}); 
             }
             formik?.setFieldValue('nroSeries', formik?.values.nroSeries); 
           }else{
            if(cantidad === reset.length){
               formik?.setFieldValue('nroSeries', reset); 
            }else
            if(cantidad > formik?.values.nroSeries.length){
                formik?.values.nroSeries =[]; 
                for (let index = 0; index < cantidad; index++) {
                  formik?.values.nroSeries.push({nro: reset[index]? reset[index].nro : ""})
                }
                 formik?.setFieldValue('nroSeries', formik?.values.nroSeries); 
            }else 
            if(cantidad < formik?.values.nroSeries.length){
              let nroNuevo = Math.abs(cantidad - formik?.values.nroSeries.length); 
              for (let index = 0; index < nroNuevo; index++) {
                formik?.values.nroSeries.pop();  
              }
                formik?.setFieldValue('nroSeries', formik?.values.nroSeries); 
            }
        
           }
    }
    formik?.handleChange(e);     */
      }
    return(
  <Box component={"form"}  onSubmit={formik?.handleSubmit} className="formLogin" sx={formAltaBien} >
      <Typography variant='h5' sx={{mb:1,mt:1, textAlign:"start",p:1}}  fontWeight="bold"> {`Crear Nuevo Bien`}</Typography>
<Box sx={{ overflowY:"auto" , mt:1,}}>
      <Grid container spacing={1}>
        <Grid item   xs={12} lg={6} md={12} xl={6}  >
          <Box sx={{ width: "100%", display: "flex", alignItems: "center" }}>
            <Box >
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                getOptionLabel={(option) => option.descripcion}
                sx={selectDetalle}
                autoComplete="off"
                disabled={isUpdate ? isUpdate : false}
                onChange={(_, newValue) => formik?.setFieldValue('detalleBienId', newValue?.id)}
                renderInput={(params) => <TextField {...params} error={formik?.touched.detalleBienId && formik?.errors.detalleBienId } label={`Seleccionar Detalle de Bien`} />}
              />
              {formik?.touched.detalleBienId && formik?.errors.detalleBienId ? <Box sx={msgError}>{formik?.errors.detalleBienId}</Box> : null}
            </Box>
            <Tooltip title="+ información">
            <IconButton aria-label="delete" size="large" sx={btnDetalle} onClick={addInfo}>
            <RemoveRedEye /> 
            </IconButton>
            </Tooltip>
          </Box>
        </Grid>

        <Grid item  xl={2} lg={2} xs={4}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="oficinaId"
            onChange={(_, newValue) => formik?.setFieldValue('oficinaDestino', newValue?.id)}
            getOptionLabel={(option) => { return `${option.id} - ${option.descripcion}` }}
            sx={inputGestionar}
            autoComplete="off"
            renderInput={(params) => <TextField {...params}  error={formik?.touched.oficinaDestino && formik?.errors.oficinaDestino }  label="Oficina Destino" />}
          />
          {formik?.touched.oficinaDestino && formik?.errors.oficinaDestino ? <Box sx={msgError}>{formik?.errors.oficinaDestino}</Box> : null}
        </Grid>

        <Grid item lg={2} xs={4} xl={2} >
          <TextField
            type="number"
            sx={inputGestionar}
            label="Cantidad"
            variant="outlined"
            name="cantidad"
            autoComplete="off"
            value={formik?.values.cantidad || ""}
            onChange={addNroSeries}
            error={formik?.touched.cantidad && formik?.errors.cantidad }
          />
          {formik?.touched.cantidad && formik?.errors.cantidad ? <Box sx={msgError}>{formik?.errors.cantidad}</Box> : null}
        </Grid>

        <Grid item  xl={2} lg={2} xs={4}  >
          {
            /**
             <InputPrice name={"precioUnitario"} label={"Precio Unitario"} formik={formik} disabled ={false} sx={inputGestionar} error={formik?.touched.precioUnitario && formik?.errors.precioUnitario }/>
             * 
             * 
             */
          }
          {formik?.touched.precioUnitario && formik?.errors.precioUnitario ? <Box sx={msgError}>{formik?.errors.precioUnitario}</Box> : null}
        </Grid>
        <Grid item   xl={3} lg={2} xs={6}  >
          <InputDays  formik={formik} value={formik?.values.fechaEntrega}  name={"fechaEntrega"}  label={"Fecha Entrega"} disabled={false}  sx={inputGestionar}  maxDate={true}/>
          {formik?.touched.fechaEntrega && formik?.errors.fechaEntrega? <Box  sx={msgError}>{formik?.errors.fechaEntrega}</Box> : null}
          </Grid>
        <Grid item xs={5}  xl={3} lg={2} sx={{ m: 1 }}>

          <FormControlLabel
            value="start"
            control={
              <Checkbox
                onChange={formik?.handleChange}
                name='pendiente'
                inputProps={{ 'aria-label': '¿Crear como pendiente?' }}
                onErrorCapture={formik?.touched.pendiente && formik?.errors.pendiente }
              />
            }
            label="Crear como pendiente"
          />
          {formik?.touched.pendiente && formik?.errors.pendiente ? <Box sx={msgError}>{formik?.errors.pendiente}</Box> : null}
        </Grid>

        <Grid item xs={6} sx={{ m: 1 }}>
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                onChange={formik?.handleChange}
                name='nroSerie'
                inputProps={{ 'aria-label': '¿Crear Nros. de Series?' }}
                checked={formik?.values.nroSerie}
                value={formik?.values.nroSerie || false}
              />
            }
            label="Agregar Nros. de Series"
          />
          {formik?.touched.nroSerie && formik?.errors.nroSerie ? <Box sx={msgError}>{formik?.errors.nroSerie}</Box> : null}
        {formik?.values.nroSerie && formik?.values.cantidad > 0 &&
          <Grid item xs={12}  sx={{ m: 1 }}>
            <Typography sx={{ verticalAlign: "middle", fontStyle: "italic" }}>
              Nros. de Series:{" "}
            </Typography>
            <Box sx={{ height: 130, overflowY: "auto"  , width:"100%" , display:" flex" , flexWrap:"wrap"}}>
              {formik?.values?.nroSeries?.map((address, index) => (
                <Box
                  sx={{ m: 1, display: "flex", alignItems: "center" , width:"30%"}}
                  key={index}
                >
                  <TextField
                    label={`${index + 1} - Nro. de Serie`}
                    type="text"
                    id={`nroSeries.${index}.nro`}
                    name={`nroSeries.${index}.nro`}
                    onChange={(e)=>addNro(e)}
                    autoComplete="off"
                    value={formik?.values.nroSeries[index].nro || ""}
                    sx={inputCaracteristica}
                  />
                  <Tooltip title="Obtener Nro. de Serie">
                  <Box
                    component={"button"}
                    sx={btnEliminarCaracteristica}
                    type="button"
                    onClick={() => createNroSerie(index)}
                  >
                    <Add
                      sx={{ textAlign: "center", verticalAlign: "middle" }}
                    />
                  </Box>
                  </Tooltip>
               
                </Box>
              ))}
            </Box>
            {formik?.touched.nroSeries && formik?.errors.nroSeries ?
              <Box sx={{ height: 100, overflowY: "auto" }}>
                {
                  formik?.errors.nroSeries.map((data, index) => {
                    return <Box key={index} sx={msgError}>{`Error en ${index + 1} - Nro. de Serie \n ${data.nro}`}</Box>
                  })
                }
              </Box>
              : null}

          </Grid>
        }
        </Grid>


        <Grid item xs={12} sx={{ m: 1, display:"flex", alignItems:"center" , justifyContent:"center" }}>
        {
          isUpdate ? <>
          <Button  variant="contained"  type="submit" color="success"   size="medium" sx={{m:1}}   >  {"Guardar Modificacion"  }  </Button> 
          <Button  variant="contained"   color="error"   size="medium" sx={{m:1}}   onClick={clearFormik}>  { "Cancelar Modificacion" }  </Button> 
          </> :         <Button  variant="contained"  type="submit" color="success"   size="medium" sx={{m:1}}   >  { "Agregar" }  </Button> 
        }
        </Grid>
      </Grid>
</Box>

    </Box>
    );
}