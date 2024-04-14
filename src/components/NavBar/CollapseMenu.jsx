import React, { useState } from "react";
import { Box, Typography, Divider, ListItemButton, Collapse, List,ListItemText,ListItemIcon } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from "react-router-dom";

export function CollapseMenu({ data , frist}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box>
      <Divider />
      <ListItemButton onClick={handleClick}>
      <ListItemText primary={`${data.categoria}`}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={ frist ? !open : open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data?.rutas?.map((ruta, i) => {
            return      <ListItemButton key={i} sx={{ color: 'black', fontSize: 14 }}>
                  <ListItemIcon sx={{color: "black" }}  >
                                            {ruta.icon}
                                        </ListItemIcon>
            <Link component="a" to={ruta.link} className="nav-link">
              {ruta.nombre}
            </Link>
          </ListItemButton>
          }
       
          )}
        </List>
      </Collapse>
    </Box>
  );
}