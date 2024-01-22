import { Grid } from "@mui/material";
import ContainerBox from "../ContainerBox/ContainerBox";

function Container({ sp }) {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12}>
      <Grid container justifyContent="center" spacing={sp}>
        {[0, 1, 2].map((value) => (
           <ContainerBox text={`Item ${value+1}`} key={value} />
        ))}
      </Grid>
    </Grid>
    </Grid>

  );
}

export default Container;
