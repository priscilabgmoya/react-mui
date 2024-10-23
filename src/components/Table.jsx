/* eslint-disable react/prop-types */

import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
  Box
} from '@mui/material';
import { createJobs } from '../helpers/data';
import { useState } from 'react';

export  function TableData() {
    const {jobPositions} = createJobs(); 
    const [equipos, setEquipos] = useState(null); 
    const [isSelect, setSelect] = useState(null); 
    const addData =(data) =>{
        debugger
        console.log(data);
        const {equipos, users, ...rest} = data;
        setEquipos([...equipos]) ; 
        
    }
  return (
    <Box sx={{width:"100%", height:"100%", display:"flex", flexDirection: "column"}} >
    <Box sx={{width:"100%", display:"flex" , maxHeight:"200px"}}>
        <TableGeneric header={["Id", "Equipo", "Oficina"]} style={{ maxHeight: "200px", overflowY: "auto" , width:"400px", p:1}} >
        {jobPositions.map((jp, index) => (
            <TableRow key={index} sx={{backgroundColor: isSelect===index ? "red": "white"}} onClick={()=>{addData(jp) ; setSelect(index)}}>
              <TableCell>{jp.id}</TableCell>
              <TableCell>{jp.title}</TableCell>
              <TableCell>{jp.oficina.numeroOficina}</TableCell>
            </TableRow>
          ))}
        </TableGeneric>
        <TableGeneric header={["Id", "Producto", "Marca","Modelo", "Nro. de Serie", "IdBien"]} style={{ maxHeight: "200px", overflowY: "auto" , width:"100%", p:1}}>
        {equipos?.map((jp, index) => (
            <>
              {
                jp.bienAsociado?.map((bien)=>{
                    return <TableRow key={index} onClick={()=>{alert("holu"+ " " +jp.id)}}>
                        <TableCell>{jp.id}</TableCell>
                    <TableCell>{bien.descripcion}</TableCell>
                    <TableCell>{bien.marca}</TableCell>
                    <TableCell>{bien.modelo}</TableCell>
                    <TableCell>{bien.numeroSerie}</TableCell>
                    <TableCell>{bien.id}</TableCell>
                    </TableRow>
                })
              }
            </>
          ))}
        </TableGeneric>

    </Box>
    <Box sx={{width:"100%", display:"flex"}}>
        aca tenemos que poner los datos de un equipo seleccionado
    </Box>
    </Box>
  );
}

// eslint-disable-next-line no-unused-vars
function TableGeneric({header, children, style}){
    return  <TableContainer component={Paper} style={style}>
    <Table stickyHeader aria-label="Job Positions Table">
      <TableHead>
        <TableRow>
            {
                header?.map((h,index)=>{
                    return  <TableCell key={index}> {h} </TableCell>
                })
            }
        </TableRow>
      </TableHead>
      <TableBody>
        {children}
      </TableBody>
    </Table>
  </TableContainer>
}