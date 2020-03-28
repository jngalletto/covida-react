import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppAppBar from '../src/views/AppAppBar';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  }
}));

function App() {
  return (
    <div className={useStyles.root}>
      <AppAppBar />
    </div>
  );
}

export default App;
