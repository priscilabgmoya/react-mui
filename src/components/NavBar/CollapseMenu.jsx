import React, { useState } from "react";
import { Box, Typography, Divider, ListItemButton, Collapse, List,ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Link } from "react-router-dom";

export function CollapseMenu({ data }) {
  const [open, setOpen] = useState(true);

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
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {data?.rutas?.map((ruta, i) => (
            <ListItemButton key={i} sx={{ color: 'black', fontSize: 14 }}>
              <Link component="a" to={ruta.link} className="nav-link">
                {ruta.nombre}
              </Link>
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </Box>
  );
}

