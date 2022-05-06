import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Result from '../components/Result';
import defaultJson from '../mocks/jsonMock';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const {children, value, index, ...other} = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{p: 3}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
})

const Main = () => {
  const [tab, setTab] = React.useState(0);
  const [config, setConfig] = React.useState(JSON.stringify(defaultJson, undefined, 2));
  const [result, setResult] = React.useState(defaultJson);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  };

  const handleConfigChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig(event.target.value);
  };

  const createResult = () => {
    setResult(JSON.parse(config));
    setTab(1);
  }

  return (
    <div className="main">
      <Box sx={{width: '100%'}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
          <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Config" {...a11yProps(0)} />
            <Tab label="Result" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <Box sx={{width: '100%'}}>
            <TextField
              id="standard-multiline-flexible"
              label="JSON"
              multiline
              value={config}
              onChange={handleConfigChange}
              variant="filled"
              fullWidth
              rows={25}
            />
          </Box>
          <Box sx={{width: '100%', textAlign: 'right', marginTop: '2em'}}>
            <Button onClick={createResult} variant="contained">Apply</Button>
          </Box>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Result data={result}/>
        </TabPanel>
      </Box>
    </div>
  );
}

export default Main;
