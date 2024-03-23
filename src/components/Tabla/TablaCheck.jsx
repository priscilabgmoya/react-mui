import { useDemoData } from "@mui/x-data-grid-generator";
import TablaGenerica from "./TablaGenerica";
import { useState } from "react";
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from "@mui/material";

export default function TablaCheck() {
  const { data } = useDemoData({
    dataSet: "city",
    rowLength: 10,
    maxColumns:10 ,
  });
  const [model, setModel] = useState([]); 
  const [array, setArray] = useState([]); 
  const[see, setSee] = useState(false)
const isObjet = (value) =>{return typeof value === 'object' && value !== null;} 
const handleChange = (id) => {
    console.log(id);
 const newArray =    id.map(i => {
        if(!isObjet(i)){
            const busqueda = data.rows.find(data => {return data.id === i});
            i = busqueda; 
            console.log(i);
        }
        return i; 
    }) 
    setArray(newArray); 
    setModel(id); 
}

  return (
    <>
    <TablaGenerica columns={data.columns} data={data.rows} selection={true} handleChange={handleChange} model={model}/>
    <button onClick={()=>{setSee(!see)}}>Ver seleccionados</button>
   {
    see &&  <List>
    {
        array.map((data, index) => {
            return <ListItem key={index}> 
            <ListItemAvatar >
                <Avatar alt={data.name} src={data.avatar} />
            </ListItemAvatar>
            <ListItemText>Name: {data.name}</ListItemText>
            <ListItemText>Email: {data.email}</ListItemText>
            <ListItemText>Phone: {data.phone}</ListItemText>
            <ListItemText>City: {data.city}</ListItemText>
            </ListItem>
        })
    }
   </List>
   }
    </>
  );
}
