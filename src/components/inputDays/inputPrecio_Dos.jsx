import React, { useState } from 'react';
import { TextField } from '@mui/material';
import numeral from 'numeral';

function PrecioInput_Dos() {
    const [precio, setPrecio] = useState('');

    
    const handleChange = (event) => {
        const value = event.target.value;
        const numel= numeral(value); 
        setPrecio(numel.format('0,0.00'));
    };

    return (

        <div>
        <h1>Manejo de Precio en React con Material-UI y Numeral.js</h1>
       
        <TextField
            label={"Precio"}
            variant="outlined"
            value={precio}
            onChange={handleChange}
        />
    </div>
    );
}



export default PrecioInput_Dos;
