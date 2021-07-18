import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btn: {
    // backgroundColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary[theme.palette.type],
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

const MyBtn = () => {
  const classes = useStyles();
  return (
    <Button className={classes.btn} variant='contained'>
      A Simple Button
    </Button>
  );
};

export default MyBtn;
