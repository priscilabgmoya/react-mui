import {Autocomplete, Box, Checkbox, FormControlLabel, Grid, TextField, Tooltip, Typography } from '@mui/material';
import {  btnAgregarCaracteristica, btnDetalle, btnEliminar, btnEliminarCaracteristica, btnGuardarBien, btnSeleccionarDetalle, formAltaBien, inputCaracteristica, inputGestionar, selectDetalle } from '../../CSS/gestionar';
import {Add,RemoveRedEye,Delete} from "@mui/icons-material";
import { btnOK, msgError } from '../../CSS/Login';
import { useFormik } from 'formik';
import TablaGenerica from './TablaGenerica';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function CrearBien(){
    const { data } = useDemoData({
        dataSet: "product",
        rowLength: 10,
        maxColumns:10 ,
      });

  const onSubmit = (values) => {
    //agregar de guardar en una persistencia 
   /* let id =  formik.values.detalleBienId 
    if(!id)  return Error("Seleccione Un detalle Bien")
    const {descripcion} = crearInfoBien(id);
    formik.values.descripcion =  descripcion; 
  const {arrayBienes} = createArrayBienes(values); 
  const {arrayParse} = parsearArray(arrayBienes); 
    formik.resetForm();  
    formik.values.nroSeries = []; 
    const obj = instanciaBien.updateBienesAlta(stateData.bienesalta.concat(arrayParse)); 
    updateState(obj); */
}
  const formik = useFormik({id: 0, descripcion: "", nroSeries: null , nroSerie: null , pendiente: null, precioUnitario: null , cantidad: null,  detalleBienId: null, oficinaId: null  ,fechaCompra: null } ,{},onSubmit ); 
    const createNroSerie = async (indexList) =>{
      console.log(indexList);
      const {data} = await instanciaBien.getNroSerie(); 
      formik.values.nroSeries.map((nroSerie,index) =>{
        if(indexList == index){
          nroSerie.nro = data;
        }
        return nroSerie; 
      })
    }
    const addNroSeries= (e)=>{
        if(e.target.value){
         const cantidad = parseInt(e.target.value);
         formik.values.nroSeries = []; 
         for (let index = 0; index < cantidad; index++) {
           formik.values.nroSeries.push({nro: ""}); 
         }
        }
         formik.handleChange(e); 
    }
    const addInfo = () => {
      let id =  formik.values.detalleBienId 
      if(!id)  return Error("Seleccione Un detalle Bien"); 
        const {info } = crearInfoDetalleBien(id); 
        addInfoHook(info); 
        handleChangeDetalle(); 
      };
      const  clearInfo = ()=>{
        clearInfoHook(handleChangeDetalle);  
        window.location.reload(); 
      }
      const columnsAltaBienes = [
        {
          field: 'descripcion',
          headerName: 'Descripción',
          width: 300,
          editable: false
        },
        {
            field: 'oficina',
            headerName: 'Oficina',
            width: 200,
            renderCell: (parms) => (  <> {`${parms.row.oficina?.descripcion}`}</> )
        }, 
        {
            field: 'cantidad',
            headerName: 'Cantidad',
            width: 150,
        }, 
        {
          field: "nroSerie",
          headerName:" Nro. de Serie", 
          width: 300
        },
        {
          field: "operaciones",    
          headerName: 'Operaciones',
          width: 100,
          renderCell: (parms) => (      <Box sx={{display: 'flex', alignItems:'center', justifyContent:"center"}}>
            <Box   component={"button"}  sx={btnEliminar} onClick={()=>{/*deleteBien(parms.id); */ }}> <Delete /> </Box>
          </Box>)    
        }
      ];
    return(
      <>
       <Typography variant='h3' sx={{mb:1,mt:1, textAlign:"center"}}  fontWeight="bold"> {`Alta de Bienes`}</Typography>
      <Box sx={{display:'flex' , width:'100%' ,justifyContent:"center", flexDirection:"column", alignItems:"center", height:"100%"}} gap={2}>

      <Box component={"form"} onSubmit={formik.handleSubmit} className="formLogin"   sx={formAltaBien}>
      <Typography variant='h5' sx={{mb:1,mt:1, textAlign:"start"}}  fontWeight="bold"> {`Crear Nuevo Bien`}</Typography>
<Box sx={{height:201, overflowY:"auto"}}>
      <Grid container >
        <Grid item  xs={6} sx={{ m: 2 }}  >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Autocomplete 
                disablePortal
                id="combo-box-demo"
                sx={selectDetalle}
                onChange={(_, newValue) => formik.setFieldValue('detalleBienId', newValue?.id)}
                renderInput={(params) => <TextField {...params} label={`Seleccionar Detalle de Bien`} />}
              />
              {formik.touched.detalleBienId && formik.errors.detalleBienId ? <Box sx={msgError}>{formik.errors.detalleBienId}</Box> : null}
            </Box>
            <Tooltip title="+ información">

            <Box component={"button"} type='button' sx={btnDetalle} onClick={addInfo}><RemoveRedEye /> </Box>
            </Tooltip>
            <Tooltip title="Agregar Nuevo Detalle de Bien">

<Box component={"button"} type='button' sx={btnSeleccionarDetalle} onClick={addInfo}><Add /> </Box>
</Tooltip>
          </Box>
        </Grid>

        <Grid item  xs={2}  sx={{ m: 1 }}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            name="oficinaId"
            onChange={(_, newValue) => formik.setFieldValue('oficinaId', newValue.id)}
            sx={inputGestionar}
            renderInput={(params) => <TextField {...params} label="Oficina Destino" />}
          />
          {formik.touched.oficinaId && formik.errors.oficinaId ? <Box sx={msgError}>{formik.errors.oficinaId}</Box> : null}
        </Grid>

        <Grid item xs={1} sx={{ m: 1 }}>
          <TextField
            type="number"
            sx={inputGestionar}
            label="Cantidad"
            variant="outlined"
            name="cantidad"
            onChange={addNroSeries}
          />
          {formik.touched.cantidad && formik.errors.cantidad ? <Box sx={msgError}>{formik.errors.cantidad}</Box> : null}
        </Grid>

        <Grid item xs={2}  sx={{ m: 1 }}>
          <TextField
            sx={inputGestionar}
            label="Precio Unitario"
            variant="outlined"
            name="precioUnitario"

            onChange={formik.handleChange}
          />
          {formik.touched.precioUnitario && formik.errors.precioUnitario ? <Box sx={msgError}>{formik.errors.precioUnitario}</Box> : null}
        </Grid>

        <Grid item xs={3}  >
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                onChange={formik.handleChange}
                name='pendiente'
                inputProps={{ 'aria-label': '¿Crear como pendiente?' }}
              />
            }
            label="Crear como pendiente"
          />
          {formik.touched.pendiente && formik.errors.pendiente ? <Box sx={msgError}>{formik.errors.pendiente}</Box> : null}
        </Grid>

        <Grid item xs={6} sx={{ m: 1 }}>
          <FormControlLabel
            value="start"
            control={
              <Checkbox
                onChange={formik.handleChange}
                name='nroSerie'
                inputProps={{ 'aria-label': '¿Crear Nros. de Series?' }}
              />
            }
            label="Agregar Nros. de Series"
          />
          {formik.touched.nroSerie && formik.errors.nroSerie ? <Box sx={msgError}>{formik.errors.nroSerie}</Box> : null}
           {/*formik.values.nroSerie && formik.values.cantidad > 0 &&
          <Grid item xs={12}  sx={{ m: 1 }}>
            <Typography sx={{ verticalAlign: "middle", fontStyle: "italic" }}>
              Nros. de Series:{" "}
            </Typography>
            <Box sx={{ height: 150, overflowY: "auto" }}>
              {
              /*formik.values.nroSeries.map((address, index) => (
                <Box
                  sx={{ m: 1, display: "flex", alignItems: "center" }}
                  key={index}
                >
                  <TextField
                    label={`${index + 1} - Nro. de Serie`}
                    type="text"
                    id={`nroSeries.${index}.nro`}
                    name={`nroSeries.${index}.nro`}
                    onChange={formik.handleChange}
                    value={formik.values.nroSeries[index].nro}
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
            {formik.touched.nroSeries && formik.errors.nroSeries ?
              <Box sx={{ height: 100, overflowY: "auto" }}>
                {
                  formik.errors.nroSeries.map((data, index) => {
                    return <Box key={index} sx={msgError}>{`Error en ${index + 1} - Nro. de Serie \n ${data.nro}`}</Box>
                  })
                }
              </Box>
              : null}

          </Grid>
        </Box>
        */
        }
        </Grid>

        <Grid item xs={12} sx={{ m: 1, display:"flex", alignItems:"center" , justifyContent:"center" }}>
        <Box   component={"button"}  type="submit" sx={btnGuardarBien}  > Agregar </Box> 
        </Grid>
      </Grid>
</Box>

    </Box>

    <Box sx={{display: "flex",  flexDirection:"column",justifyContent:"center", alignItems:"center" , width:"100%"  }}>
    <>
<Box > 
<Typography variant='h5' sx={{mb:1,mt:1}} > {`Bienes a dar de Alta:`}</Typography>
<TablaGenerica data={data.rows} columns={columnsAltaBienes}  loading={true } height={300} pageSizeOptions={3}   />   
</Box>
      </>
<Box   component={"button"}  type="submit" sx={btnGuardarBien}  > Guardar </Box> 
</Box>
      </Box>
      </>
  
    );
}