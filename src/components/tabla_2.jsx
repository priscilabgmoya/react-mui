import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Typography, IconButton, Collapse, List, ListItem, ListItemText } from '@material-ui/core';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const CustomDataGrid = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const handleRowExpand = (id) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter(rowId => rowId !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  const columns = [
    { field: 'id', headerName: 'Oficina', width: 150 },
    {
      field: 'bienes',
      headerName: 'Bienes',
      width: 300,
      renderCell: (params) => (
        <GoodsList
          goods={params.row.bienes}
          expanded={expandedRows.includes(params.row.id)}
          onExpand={() => handleRowExpand(params.row.id)}
        />
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableColumnMenu
        autoHeight
      />
    </div>
  );
};

const GoodsList = ({ goods, expanded, onExpand }) => {
    console.log(goods);
  return (
    <>
      <IconButton onClick={onExpand}>
        {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </IconButton>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <List>
          {goods.map(good => {
            return     <ListItem key={good.id}>
            <ListItemText primary={good.tarea} />
          </ListItem>
          }
       
          )}
        </List>
      </Collapse>
    </>
  );
};

export default CustomDataGrid;
