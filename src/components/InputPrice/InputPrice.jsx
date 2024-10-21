/* eslint-disable react/prop-types */
import * as React from "react";
import { NumericFormat } from "react-number-format";
import TextField from "@mui/material/TextField";

const NumericFormatCustom = React.forwardRef(function NumericFormatCustom(
  props,
  ref
) {
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
      thousandSeparator="." // Usar punto como separador de miles
      decimalSeparator=","  // Usar coma como separador decimal
      valueIsNumericString
      prefix="$"
      decimalScale={2}       // Asegurar dos decimales
      fixedDecimalScale={true} // Mantener siempre dos decimales
      allowNegative={false}  // No permitir valores negativos
    />
  );
});

export default function InputPrice() {
  const [values, setValues] = React.useState({
    price: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <TextField
      label="Precio"
      value={values.price}
      onChange={handleChange}
      name="price"
      InputProps={{
        inputComponent: NumericFormatCustom,
      }}
      variant="outlined"
      fullWidth
    />
  );
}
