import React from 'react';
import ProfileRPSuccess from './ProfileRPSuccess.jsx';
import ProfileSetRP from './ProfileSetRP.jsx';
import ProfileRPList from './ProfileRPSuccess.jsx';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    width: 400,
    margin: 20,
    textAlign: 'center'
  }
}));

const ProfileRecurringPayments = props => {
  const classes = useStyles();
  const days = Array.from(Array(31).keys()).splice(1);

  if (props.showSuccessMessage) {
    return (
      <div>
        <Paper className={classes.paper}>
          <ProfileRPSuccess toggleSuccessMessage={props.toggleSuccessMessage} />
        </Paper>
      </div>
    );
  } else {
    return (
      //inputDay handleDayChange days handleInputAmount inputCategory handleInputCategory categories inputAccount handleAccountInput
      //handlePayeeInput handleRecurringPayment
      <Paper style={{ margin: 20, padding: 15 }}>
        <ProfileSetRP
          inputDay={props.inputDay}
          handleDayChange={props.handleDayChange}
          days={days}
          handleInputAmount={props.handleInputAmount}
          inputCategory={props.inputCategory}
          categories={props.categories}
          inputAccount={props.inputAccount}
          handleAccountInput={props.handleAccountInput}
          handlePayeeInput={props.handlePayeeInput}
          handleRecurringPayment={props.handleRecurringPayment}
          accounts={props.accounts}
        ></ProfileSetRP>
      </Paper>
    );
  }
};

export default ProfileRecurringPayments;
