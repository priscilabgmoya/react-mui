import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@material-ui/core';
import { IconButton } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useState } from 'react';
import CustomDataGrid from './tabla_2';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
    height: 300,
    overflowY: "auto"
  },
});

function CustomTable({ data }) {
  const classes = useStyles();
  // Estado para controlar qué oficina está expandida
  const [expandedOffice, setExpandedOffice] = useState(null);

  // Función para alternar la expansión de una oficina
  const toggleExpand = (officeNumber) => {
    if (expandedOffice === officeNumber) {
      setExpandedOffice(null);
    } else {
      setExpandedOffice(officeNumber);
    }
  };
  // Agrupar los bienes por número de oficina
  const groupedData = data.reduce((acc, item) => {
    const officeNumber = item.ultima_oficina;
    !acc[officeNumber] ?
      acc[officeNumber] = [] : null
    acc[officeNumber].push(item);
    return acc;
  }, {});
  const keys = Object.keys(groupedData); 
  const newArray = keys.map((key) => {
    const newObjet ={
        id: key,
        bienes: groupedData[key]
     }
     return newObjet; 
  })
console.log(groupedData);
  return (
    <>
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <TableCell></TableCell>
          <TableCell>ID</TableCell>
          <TableCell>Descripción</TableCell>
          <TableCell>Precio</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.keys(groupedData).map(officeNumber => (
          <React.Fragment key={officeNumber}>
            <TableRow>
              <TableCell>
                <IconButton aria-label="expand row" size="small" onClick={() => toggleExpand(officeNumber)}>
                  <ExpandMoreIcon />
                </IconButton>
              </TableCell>
              <TableCell colSpan={3} style={{ fontWeight: 'bold' }}>Oficina {officeNumber}</TableCell>
            </TableRow>
            {expandedOffice === officeNumber && groupedData[officeNumber].map(item => (
              <TableRow key={item.id}>
                <TableCell></TableCell>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.tarea}</TableCell>
                <TableCell>{item.prioridad}</TableCell>
              </TableRow>
            ))}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
    </>
  );
}

export default CustomTable;
