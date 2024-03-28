import React, { useState } from 'react';
import { TextField } from '@mui/material';
import numeral from 'numeral';

function PrecioInput_Dos({ label }) {
    const [precio, setPrecio] = useState('');

    
    const handleChange = (event) => {
        const value = event.target.value;
        const numel= numeral(value); 
        setPrecio(numel.format('0,0.00'));
    };

    return (
        <TextField
            label={label}
            variant="outlined"
            value={precio}
            onChange={handleChange}
        />
    );
}



export default PrecioInput_Dos;
