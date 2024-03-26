import { Button, Divider, FormControl, InputLabel, ListItemButton, ListItemIcon, MenuItem, Select, Typography } from "@mui/material";
import { linkNavBar } from "../../helpers/links";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";

export default function ListNavBar() {
    return(
<>
{
            linkNavBar.map((item, index) => {
                               return  item.data? 
                               <>
                                    <Divider />
                                     <Typography> ???? </Typography>
                                     <Box key={index} sx={{height:300 ,overflowY: "auto"}}>
                     {
                        item.data?.map((data, index)=>{
                               return    <ListItemButton key={index} sx={{color:'black' ,fontSize: 13}}>
                               <ListItemIcon sx={{color: "black" }}  >
                                   {item.icon}
                               </ListItemIcon>
                                   <Link component= "a" key={index} to={data.link}  className="navLink">
                               {data.nombre}
                             </Link >
                                   </ListItemButton>     
                   
                           })
                     }
                   </Box>
                 
                               </>
                               :        
                               <>
                               <Divider />
                               <ListItemButton key={index} sx={{color:'black' ,fontSize: 13}}>
                        <ListItemIcon sx={{color:"black" }}  >
                            {item.icon}
                        </ListItemIcon>
                            <Link component= "a" key={index} to={item.link}  className="navLink">
                        {item.nombre}
                      </Link >
                            </ListItemButton>           
                          </>
               
                            })
                        }
</> 
    );
}