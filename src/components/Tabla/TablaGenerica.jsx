import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function TablaGenerica({data,columns,loading , height, pageSizeOptions , width , selection, handleChange, model}){

    return(
        <Box sx={{ height: height? height : 425, width: width ? width: '100%' }}>
        <DataGrid
        checkboxSelection={selection? selection: false}
          rows={data}
          columns={columns}
          style={{backgroundColor:"white",borderRadius:10}}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[pageSizeOptions ? pageSizeOptions : 5]}
          loading={loading}
        />
      </Box>
    );
}