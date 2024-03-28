import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { getDate } from '../helpers/helps';
import dayjs from 'dayjs';

export default function InputDay() {
    const {date} = getDate()
  const [value, setValue] = React.useState(null);
const handleChange =(e) =>{
    const m =  (e.$d.getMonth() +1).toString().length  ==1 ? "0"+ (e.$d.getMonth() +1) :(e.$d.getMonth() +1 )
    const date =  m +"/" + e.$d.getDate() +"/"+ e.$d.getFullYear(); 
    console.log(date);
 console.log(e);
setValue(e)
}
  return (
      <DemoContainer components={['DatePicker']}>
        <DatePicker value={value} onChange={handleChange}  label="Fecha Compra" minDate={dayjs(date)}/>
      </DemoContainer>
  );
}