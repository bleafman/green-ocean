import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useAuth0 } from '../react-auth0-wrapper';
import Loading from './Loading.jsx';
// import Logo from './Logo.png';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignContent: 'center',
    color: theme.palette.text.secondary
  },
  mainTitle: {
    fontFamily: 'Lobster Two',
    color: '#58355e'
  },
  subtitle: {
    fontFamily: 'Open Sans'
  },
  button: {
    fontFamily: 'Lobster Two',
    backgroundColor: '#bdbdbd',
    color: '#ffffff'
  },
  link: {
    textDecoration: 'none',
    color: '#880e4f'
  }
}));

function LandingPage() {
  const classes = useStyles();
  const { loginWithRedirect, isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <div
      className="landingPage"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <img src="Logo.png" style={{ margin: 20 }} />
      <Grid item />
      {/* <Grid item xs={6}>
        <Paper className={classes.paper}>
          <Typography variant="h2" className={classes.mainTitle}>
            Cash Overflow
          </Typography>
          <Typography variant="subtitle1" className={classes.subtitle}>
            The simplest way to manage your money, figure out your overspending,
            and get peace of mind about your budget
          </Typography> */}
      {!isAuthenticated ? (
        <Link to="/dashboard" className={classes.link}>
          {/* <Button
            onClick={() => loginWithRedirect({})}
            color="inherit"
            className={classes.button}
          >
            Login
          </Button> */}
        </Link>
      ) : (
        <Link to="/dashboard" className={classes.link}>
          <Button color="inherit" className={classes.button}>
            Dashboard
          </Button>
        </Link>
      )}
      {/* </Paper>
      </Grid>
      <Grid item /> */}
    </div>
  );
}

export default LandingPage;
