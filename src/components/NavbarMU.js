import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

export default function Links() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();

  return (
    <Typography className={classes.root}>
      <Link href="/" onClick={preventDefault}>Clients</Link>
      <Link to="/trainings" onClick={preventDefault} color="inherit">Trainings
        {' '}
      </Link>
      <Link href="/calendar" onClick={preventDefault} variant="body2">Calendar
        {' '}
      </Link>
    </Typography>
  );
}