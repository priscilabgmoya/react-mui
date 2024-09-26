import * as React from "react";
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export  function TablaBienes({data,columns,loading, pageSizeOptions , height}){

    return(
        <Box sx={{ height: height ? height : 550, overflow: "auto" }}>
        <DataGrid
          rows={data}
          columns={columns}
          style={{backgroundColor:"white",borderRadius:10}}
          initialState={{
            ...data.initialState,
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[5, 10, 25, 30]}
          loading={loading}
        />
      </Box>
    );
}