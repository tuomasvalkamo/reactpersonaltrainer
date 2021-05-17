import { useState } from 'react';
import Customerlist from './components/Customerlist';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import './App.css';
import Traininglist from './components/Traininglist';

function App() {
  const [value, setValue] = useState('customers');

  const handleChange = (event, value) => {
    setValue(value);
  }

  return (
    <div className="App">
      <AppBar position="static" style={{ marginBottom: 20 }}>
        <Toolbar>
          <Typography variant="h6">
            Personal Trainer App
          </Typography>
          <Tabs value={value} onChange={handleChange}>
            <Tab value="customers" label="Customers" />
            <Tab value="trainings" label="Trainings" />
          </Tabs>
        </Toolbar>
      </AppBar>
      {value === 'customers' && <Customerlist />}
      {value === 'trainings' && <Traininglist />}
    </div>
  );
}

export default App;
