import React, { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

const Customerlist = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data.content))
      .catch(err => console.log(err));
  }

  const columns = [
    { field: 'firstname', sortable: true, filterable: true },
    { field: 'lastname', sortable: true, filterable: true },
    { field: 'streetaddress', sortable: true, filterable: true },
    { field: 'postcode', sortable: true, filterable: true },
    { field: 'city', sortable: true, filterable: true },
    { field: 'email', sortable: true, filterable: true },
    { field: 'phone', sortable: true, filterable: true }
  ]

  return (
    <div className="ag-theme-material" style={{ height: 620, width: '90%', margin: 'auto' }}>
      <AgGridReact
        rowData={customers}
        columnDefs={columns}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  )
}

export default Customerlist
