import { Autocomplete, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import {  inputGestionar } from "../../CSS/gestionar";


export default function FiltrarBienes({handleBusquedaId , handleChange,handleBusquedaDescripcion,oficinaSelect}) {

    return(
        <Box sx={{mb:1}}>
        <Autocomplete
              disablePortal
              id="combo-box-demo"
              name="oficinaId"
              getOptionLabel={(option) => {return`Nro. Oficina: ${option.numeroOficina} - Descripción: ${option.descripcion} - Edificio: ${option.edificio.id}`}}
              sx={inputGestionar}
              value={oficinaSelect || null}
              autoComplete="off"
              onChange={(_, newValue) =>handleChange(newValue)}
              renderInput={(params) => <TextField {...params} label={`Oficina Actual`} />}
            />
        <Box sx={{display:"flex" , justifyContent: "space-between" , alignItems:"center" ,  verticalAlign:"middle", width: "100%" , gap: 1}}>
    <Typography sx={{textAlign:"center"}}> Filtros: </Typography>
    <TextField            
          type="text"
            sx={inputGestionar}
            label="IdBien"
            variant="outlined"
            name="cantidad"
            autoComplete="off"
            onChange={handleBusquedaId} />
                <TextField            
          type="text"
            sx={inputGestionar}
            label="Descripción"
            variant="outlined"
            name="cantidad"
            autoComplete="off"
            onChange={handleBusquedaDescripcion} />
</Box>
        </Box>
    ); 
}