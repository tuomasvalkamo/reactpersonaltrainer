import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Traininglist = () => {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    fetchTrainings();
  }, []);

  const fetchTrainings = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
      .then(response => response.json())
      .then(data => setTrainings(data.content))
      .catch(err => console.log(err));
  }

  const columns = [
    { field: 'date', sortable: true, filterable: true },
    { field: 'duration', sortable: true, filterable: true },
    { field: 'activity', sortable: true, filterable: true }
  ]

  return (
    <div className="ag-theme-material" style={{ height: 620, width: '90%', margin: 'auto' }}>
      <AgGridReact
        rowData={trainings}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  )
}

export default Traininglist
