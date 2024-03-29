import { Button, Divider, FormControl, InputLabel, ListItemButton, ListItemIcon, ListSubheader, MenuItem, Select, Typography } from "@mui/material";
import { linkNavBar } from "../../helpers/links";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function ListNavBar() {

    return(
<>
{
            linkNavBar.map((item, index) => {
                              return  item.data? 
                               <Box key={index}>
                            <Divider  key={index} />
                             <Typography key={index} sx={{textAlign:"center"}} > Menú </Typography>
                         <Box key={index} sx={{overflowY: "auto"}}>
                     {
                        item.data?.map((data, i)=>{
                             return  <>
                               <Divider  key={i} />
                                <ListSubheader key={i} sx={{backgroundColor: '#E3E7F1'}}>{`${data.categoria}`}</ListSubheader>
                                {
                                    data.rutas.map((ruta,iRuta)=>{
                                        return        (<ListItemButton key={iRuta} sx={{color:'black' ,fontSize: 14}}>
                                        <ListItemIcon sx={{color: "black" }}  >
                                            {item.icon}
                                        </ListItemIcon>
                                            <Link component= "a" key={i} to={ ruta.link} className="nav-link" >
                                        {ruta.nombre}
                                      </Link >
                                            </ListItemButton>  ); 
                                    })
                                }
                       
                    
                               </>
                           })
                     }
                   </Box>
                               </Box>
                               :        
                               null
                            })
                        }
</> 
    );
}