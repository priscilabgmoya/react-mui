import * as React from 'react';
import { NumericFormat } from 'react-number-format';
import TextField from '@mui/material/TextField';


const NumericFormatCustom = React.forwardRef(
    function NumericFormatCustom(props, ref) {
      const { onChange, ...other } = props;
  
      return (
        <NumericFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          prefix="$"
        />
      );
    },
  );

export default function InputPrice({name, label , formik ,sx, disabled,error}){
    return(
        <TextField
        label={`${label}`}
        onChange={formik?.handleChange}
        name={`${name}`}
        id="formatted-numberformat-input"
        value={formik.values[`${name}`] || ""}
        error={error}
        sx={sx}
        autoComplete="off"
        disabled={disabled}
        InputProps={{
          inputComponent: NumericFormatCustom,
        }}
      />
    );
}