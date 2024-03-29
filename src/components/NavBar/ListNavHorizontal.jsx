import { Button, Divider, FormControl, InputLabel, ListItemButton, ListItemIcon, MenuItem, Select, Typography } from "@mui/material";
import { linkNavBar } from "../../helpers/links";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function ListNavBarHorizontal() {
    return(
<>
{
            linkNavBar.map((item, index) => {
                               return  !item.data?     
                               <ListItemButton key={index} sx={{color:'white' ,fontSize: 15}}>
                               <ListItemIcon sx={{color:"white" }}  >
                                   {item.icon}
                               </ListItemIcon>
                                   <Link component= "a" key={index} to={item.link}  className="navLink">
                               {item.nombre}
                             </Link >
                                   </ListItemButton>  : null 
                            })
                        }
</> 
    );
}