import { Grid, Paper } from "@mui/material";

function ContainerBox({ text }) {
  return (
    <Grid item>
    <Paper
      sx={{
        height: 140,
        width: 100,
        backgroundColor: "warning.main",
      }}
    >
      {text}
    </Paper>
    </Grid>
  );
}

export default ContainerBox;
