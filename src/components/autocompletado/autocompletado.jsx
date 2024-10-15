
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as yup from "yup"; 
import { Box } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
const esquemaValidacion = yup.object().shape({
  id: yup
    .number()
    .nullable()
    .typeError('El campo "id" debe ser un número o nulo'),
  
  idPendiente: yup
    .number()
    .nullable()
    .typeError('El campo "idPendiente" debe ser un número o nulo'),
});
export default function ComboBox() {
  const [data] = useState([...top100FilmsGroup1,...top100FilmsGroup2 ])
  const onSubmit = (values,{resetForm}) =>{
    console.log(values);
    resetForm(); 
  }
   const formik =  useFormik(
    {
      initialValues: {id: null, idPendiente: null},
      validationSchema: esquemaValidacion,
      onSubmit: onSubmit,
    }
   )
   const handleChange = (value)=>{
    console.log(value);
    if(value){
      if(top100FilmsGroup1.find(d =>{return d.id === value.id})){
        console.log("aca paso en el primer grupo");
        formik.setFieldValue("id", value.id); 
        
      }else if(top100FilmsGroup2.find(d =>{return d.id === value.id})){
        console.log("aca paso en el segundo grupo");
        formik.setFieldValue("idPendiente", value.id); 
       
      }
    }else{
      formik.setFieldValue("id", null); 
      formik.setFieldValue("idPendiente", null); 
      
    }
    
   }
  
  return (
    <Box Box component={"form"}  onSubmit={formik.handleSubmit}>
{
  /**
   * 
   * 
  <Autocomplete
    id="asynchronous-demo"
    sx={{ width: 300 }}
    open={open}
    onOpen={() => {
      setOpen(true);
    }}
    onClose={() => {
      setOpen(false);
    }}
    isOptionEqualToValue={(option, value) => option.label === value.label}
    getOptionLabel={(option) => option.label}
    options={options}
    loading={loading}
    renderInput={(params) => (
      <TextField
        {...params}
        label="Asynchronous"
        InputProps={{
          ...params.InputProps,
          endAdornment: (
            <React.Fragment>
              {loading ? <CircularProgress color="inherit" size={20} /> : null}
              {params.InputProps.endAdornment}
            </React.Fragment>
          ),
        }}
      />
    )}
  />
  
   * 
   */
}
<Autocomplete
      options={data}
      getOptionLabel={(option) => option.label}
      onChange={(_, value) =>handleChange(value)}
      value={formik.values.id? top100FilmsGroup1.find(d =>{return d.id === formik.values.id} ): formik.values.idPendiente ? top100FilmsGroup2.find(d =>{return d.id === formik.values.idPendiente}) : null || null }
      renderOption={(props, option) => (
        <Box
          component="tr"
          {...props}
          key={option.id}
          sx={{
            display: 'grid',
            gridTemplateColumns: '70% 30%',
            padding: '8px',
            borderBottom: '1px solid #ddd',
            width: 550,
            backgroundColor:"#ffff"
          }}
          
        >
       
        <td style={{ padding: '8px',  width: '70%',border: '1px solid #ddd' }}>{option.label}</td>
        <td style={{ padding: '8px', width: '30%',border: '1px solid #ddd' }}>{option.year}</td>

        </Box>
      )}
      sx={{ width: 570 , backgroundColor:"#ffff"}}
      renderInput={(params) => <TextField {...params} label="Movie" variant="outlined" />}
      PaperComponent={({ children }) => (
        <Box component={"table"} sx={{ width: 550 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '70% 30%',
              backgroundColor: '#f5f5f5',
              padding: '8px',
              borderBottom: '1px solid #ddd',
              fontWeight: 'bold',
              width: 550,
            }}
            component={"thead"}
          >
          

            <Box component={"tr"} sx={{ display: 'grid',gridTemplateColumns: '65% 35%',  width: 550,}}>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>Title</th>
              <th style={{ padding: '8px', border: '1px solid #ddd', backgroundColor: '#f5f5f5' }}>year</th>
            </Box>
            </Box>
          <tbody>
            {children}
          </tbody>
        </Box>
      )}
    />

    
    <button type='submit'>Haga Click en esto</button>

    
    </Box>

  );
}
// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top

const top100FilmsGroup1 = [
  { id: 1, label: 'The Shawshank Redemption', year: 1994 },
  { id: 2, label: 'The Godfather', year: 1972 },
  { id: 3, label: 'The Godfather: Part II', year: 1974 },
  { id: 4, label: 'The Dark Knight', year: 2008 },
  { id: 5, label: '12 Angry Men', year: 1957 },
  { id: 6, label: "Schindler's List", year: 1993 },
  { id: 7, label: 'Pulp Fiction', year: 1994 },
  { id: 8, label: 'The Lord of the Rings: The Return of the King', year: 2003 },
  { id: 9, label: 'The Good, the Bad and the Ugly', year: 1966 },
  { id: 10, label: 'Fight Club', year: 1999 },
  { id: 11, label: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001 },
  { id: 12, label: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980 },
  { id: 13, label: 'Forrest Gump', year: 1994 },
  { id: 14, label: 'Inception', year: 2010 },
  { id: 15, label: 'The Lord of the Rings: The Two Towers', year: 2002 },
  { id: 16, label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { id: 17, label: 'Goodfellas', year: 1990 },
  { id: 18, label: 'The Matrix', year: 1999 },
  { id: 19, label: 'Seven Samurai', year: 1954 },
  { id: 20, label: 'Star Wars: Episode IV - A New Hope', year: 1977 },
  { id: 21, label: 'City of God', year: 2002 },
  { id: 22, label: 'Se7en', year: 1995 },
  { id: 23, label: 'The Silence of the Lambs', year: 1991 },
  { id: 24, label: "It's a Wonderful Life", year: 1946 },
  { id: 25, label: 'Life Is Beautiful', year: 1997 },
  { id: 26, label: 'The Usual Suspects', year: 1995 },
  { id: 27, label: 'Léon: The Professional', year: 1994 },
  { id: 28, label: 'Spirited Away', year: 2001 },
  { id: 29, label: 'Saving Private Ryan', year: 1998 },
  { id: 30, label: 'Once Upon a Time in the West', year: 1968 },
  { id: 31, label: 'American History X', year: 1998 },
  { id: 32, label: 'Interstellar', year: 2014 },
  { id: 33, label: 'Casablanca', year: 1942 },
  { id: 34, label: 'City Lights', year: 1931 },
  { id: 35, label: 'Psycho', year: 1960 },
  { id: 36, label: 'The Green Mile', year: 1999 },
  { id: 37, label: 'The Intouchables', year: 2011 },
  { id: 38, label: 'Modern Times', year: 1936 },
  { id: 39, label: 'Raiders of the Lost Ark', year: 1981 },
  { id: 40, label: 'Rear Window', year: 1954 },
  { id: 41, label: 'The Pianist', year: 2002 },
  { id: 42, label: 'The Departed', year: 2006 },
  { id: 43, label: 'Terminator 2: Judgment Day', year: 1991 },
  { id: 44, label: 'Back to the Future', year: 1985 },
  { id: 45, label: 'Whiplash', year: 2014 },
  { id: 46, label: 'Gladiator', year: 2000 },
  { id: 47, label: 'Memento', year: 2000 },
  { id: 48, label: 'The Prestige', year: 2006 },
  { id: 49, label: 'The Lion King', year: 1994 },
  { id: 50, label: 'Apocalypse Now', year: 1979 }
];

const top100FilmsGroup2 = [
  { id: 51, label: 'Alien', year: 1979 },
  { id: 52, label: 'Sunset Boulevard', year: 1950 },
  { id: 53, label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb', year: 1964 },
  { id: 54, label: 'The Great Dictator', year: 1940 },
  { id: 55, label: 'Cinema Paradiso', year: 1988 },
  { id: 56, label: 'The Lives of Others', year: 2006 },
  { id: 57, label: 'Grave of the Fireflies', year: 1988 },
  { id: 58, label: 'Paths of Glory', year: 1957 },
  { id: 59, label: 'Django Unchained', year: 2012 },
  { id: 60, label: 'The Shining', year: 1980 },
  { id: 61, label: 'WALL·E', year: 2008 },
  { id: 62, label: 'American Beauty', year: 1999 },
  { id: 63, label: 'The Dark Knight Rises', year: 2012 },
  { id: 64, label: 'Princess Mononoke', year: 1997 },
  { id: 65, label: 'Aliens', year: 1986 },
  { id: 66, label: 'Oldboy', year: 2003 },
  { id: 67, label: 'Once Upon a Time in America', year: 1984 },
  { id: 68, label: 'Witness for the Prosecution', year: 1957 },
  { id: 69, label: 'Das Boot', year: 1981 },
  { id: 70, label: 'Citizen Kane', year: 1941 },
  { id: 71, label: 'North by Northwest', year: 1959 },
  { id: 72, label: 'Vertigo', year: 1958 },
  { id: 73, label: 'Star Wars: Episode VI - Return of the Jedi', year: 1983 },
  { id: 74, label: 'Reservoir Dogs', year: 1992 },
  { id: 75, label: 'Braveheart', year: 1995 },
  { id: 76, label: 'M', year: 1931 },
  { id: 77, label: 'Requiem for a Dream', year: 2000 },
  { id: 78, label: 'Amélie', year: 2001 },
  { id: 79, label: 'A Clockwork Orange', year: 1971 },
  { id: 80, label: 'Like Stars on Earth', year: 2007 },
  { id: 81, label: 'Taxi Driver', year: 1976 },
  { id: 82, label: 'Lawrence of Arabia', year: 1962 },
  { id: 83, label: 'Double Indemnity', year: 1944 },
  { id: 84, label: 'Eternal Sunshine of the Spotless Mind', year: 2004 },
  { id: 85, label: 'Amadeus', year: 1984 },
  { id: 86, label: 'To Kill a Mockingbird', year: 1962 },
  { id: 87, label: 'Toy Story 3', year: 2010 },
  { id: 88, label: 'Logan', year: 2017 },
  { id: 89, label: 'Full Metal Jacket', year: 1987 },
  { id: 90, label: 'Dangal', year: 2016 },
  { id: 91, label: 'The Sting', year: 1973 },
  { id: 92, label: '2001: A Space Odyssey', year: 1968 },
  { id: 93, label: "Singin' in the Rain", year: 1952 },
  { id: 94, label: 'Toy Story', year: 1995 },
  { id: 95, label: 'Bicycle Thieves', year: 1948 },
  { id: 96, label: 'The Kid', year: 1921 },
  { id: 97, label: 'Inglourious Basterds', year: 2009 },
  { id: 98, label: 'Snatch', year: 2000 },
  { id: 99, label: '3 Idiots', year: 2009 },
  { id: 100, label: 'Monty Python and the Holy Grail', year: 1975 }
];
