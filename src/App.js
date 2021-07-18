import React, { useState } from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyBtn from './MyBtn';

const useStyles = makeStyles((theme) => ({
  btn: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
    // backgroundColor: theme.palette.primary[theme.type],
  },
}));

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const classes = useStyles();
  const prefersDarkMode = useMediaQuery(
    `(prefers-color-scheme: ${isDarkMode ? 'dark' : 'light'})`
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          primary: {
            light: '#2f91d3 ',
            main: '#2ac46a',
            dark: '#ad2f6a',
          },
          tonalOffSet: 0.3,
          text: {
            primary: prefersDarkMode ? '#e8bc0d' : '#de4536',
          },
        },
      }),
    [prefersDarkMode]
  );

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography variant='h6'>Typography</Typography>
      <Button
        className={classes.btn}
        variant='contained'
        onClick={toggleDarkMode}
      >
        Toggle Dark Mode
      </Button>
      <MyBtn />
    </ThemeProvider>
  );
};

export default App;
