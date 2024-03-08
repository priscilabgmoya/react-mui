import { FormControl ,FormLabel, Radio, Paper, RadioGroup, Grid,FormControlLabel} from '@mui/material';


function Formulario({data,  handleChange}){
    return   <Grid item xs={12} spacing={2}>
    <Paper sx={{ m: 2, p: 2 }}>
      <Grid container>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">spacing</FormLabel>
            <RadioGroup
              name="spacing"
              aria-label="spacing"
              value={data?.spacing?.toString()}
              onChange={handleChange}
              row
            >
              {[0, 0.5, 1, 2, 3, 4, 8, 12].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>

    <Paper sx={{ m: 2, p: 2 }}>
      <Grid container>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">direction</FormLabel>
            <RadioGroup
              name="direction"
              aria-label="direction"
              value={data?.direction?.toString()}
              onChange={handleChange}
              row
            >
              {["row","row-reverse", "column", "column-reverse"].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>

    <Paper sx={{ m: 2, p: 2 }}>
      <Grid container>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">justifyContent</FormLabel>
            <RadioGroup
              name="justifyContent"
              aria-label="justifyContent"
              value={data?.justifyContent?.toString()}
              onChange={handleChange}
              row
            >
              {["flex-start","center", "flex-end","space-between", "space-around", "space-evenly"].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
    <Paper sx={{ m: 2, p: 2 }}>
      <Grid container>
        <Grid item>
          <FormControl component="fieldset">
            <FormLabel component="legend">alignItems</FormLabel>
            <RadioGroup
              name="alignItems"
              aria-label="alignItems"
              value={data?.alignItems?.toString()}
              onChange={handleChange}
              row
            >
              {["flex-start","center", "flex-end", "stretch","baseline"].map((value) => (
                <FormControlLabel
                  key={value}
                  value={value.toString()}
                  control={<Radio />}
                  label={value.toString()}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  </Grid>
}

export default Formulario; 