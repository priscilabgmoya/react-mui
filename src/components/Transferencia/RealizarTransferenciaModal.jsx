/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {Autocomplete, Box, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import {inputGestionar } from '../../CSS/gestionar';
import { form,msgError } from '../../CSS/Login';

//import { useGestionarContext } from '../../Hooks/GestionarHooks';



export default function RealizarTransferenciaModal({formik,open, handleChange, text,addTipoTransferencia, disabled}){

  /*const {instanciaOficina,instanciaTipoAsignacion} = useGestionarContext(); 
  const { stateData, updateState, dispatch} = useDataContext(); 
  const {get_t} = useLoginContext(); 
  const {userToken} = get_t(); 
  useEffect(  ()=>{
    instanciaTipoAsignacion.getAllValue(dispatch, userToken); 
    instanciaOficina.getAllValue(dispatch, userToken); 
},[stateData.isLoaded]); */

      const closeModal = ()=>{
        handleChange(); 
        formik?.resetForm(); 
      }

    return(


          <>
        <Box component={"form"} onSubmit={formik?.handleSubmit} className="formLogin" sx={form} >
          <Box sx={{display:"flex" , gap:1}}>
        <Grid  item xs={6} >
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              name="oficinaId"
              getOptionLabel={(option) => option.descripcion}
              sx={inputGestionar}
              autoComplete="off"
              disabled={disabled}
              onChange={(_, newValue) => {formik?.setFieldValue('tipoTransferenciaId', newValue?.id); addTipoTransferencia(newValue) }}
              renderInput={(params) => <TextField {...params} label={`Tipo de Tranferencia`} />}
            />
        {formik?.touched.tipoTransferenciaId && formik?.errors.tipoTransferenciaId? <Box  sx={msgError}>{formik?.errors.tipoTransferenciaId}</Box> : null}
          </Grid>
          <Grid  item xs={6}>
       
          </Grid>
          </Box>

          <Grid item xs={12}  >
          <TextField
          sx={inputGestionar}
          multiline
          rows={2}
          label="Motivo"
          variant="outlined"
          name="observaciones"
          autoComplete="off"
          value={formik?.values.observaciones || ""}
          onChange={formik?.handleChange}
          disabled={disabled}
        />
         {formik?.touched.observaciones && formik?.errors.observaciones? <Box  sx={msgError}>{formik?.errors.observaciones}</Box> : null}
          </Grid>
        </Box>
      </>


    );
}