import React from "react";
import { Box,Typography} from '@mui/material';
import { linkNavBar } from "../../helpers/links";
import { CollapseMenu } from "./CollapseMenu";


export default function ListNavBar() {
  return (
    <>
    <Typography sx={{ textAlign: "center" }}>Menú</Typography>
      {linkNavBar.map((item, index) => {
    return item.data ? 
    <Box key={index}>
      <CollapseMenu data={item.data} />
    </Box>
  : null
      }
  
      )}
    </>
  );
}
