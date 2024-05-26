import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

export default function PaginationModelControlled() {
  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 500,
    maxColumns: 6,
  });
  const [paginationModel, setPaginationModel] = React.useState({
    pageSize: 25,
    page: 0,
  });
const handleChange = (e) =>{
  // cada vez que haga  un click en el boton de siguiente pagina. tengo que consultar a la api,
  console.log(e);
  setPaginationModel(e);
}
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        paginationModel={paginationModel}
        onPaginationModelChange={handleChange}
        {...data}
      />
    </div>
  );
}
