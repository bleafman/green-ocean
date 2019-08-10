import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import AddIcon from '@material-ui/icons/Add';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  }
}));

export default class Accounts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      accountType: ''
    };

    this.handleAddAccount = this.handleAddAccount.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleAddAccount() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleSelect(event) {
    this.setState({ accountType: event.target.value });
  }

  render() {
    return (
      <div>
        <h1>Accounts</h1>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Account</TableCell>
                    <TableCell align="center">Balance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Account Name</TableCell>
                    <TableCell>$ Balance.00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
            <Chip
              avatar={
                <Avatar>
                  <AddIcon />
                </Avatar>
              }
              label="Add an account"
              color="primary"
              onClick={this.handleAddAccount}
              variant="outlined"
            />
            <Dialog
              open={this.state.open}
              onClose={this.handleClose}
              aria-labelledby="form-dialog-title"
            >
              <DialogTitle id="form-dialog-title">New Account</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Please enter the details of the account you wish to add:
                </DialogContentText>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Account Name"
                  fullWidth
                />

                <FormControl style={{ minWidth: '100%' }}>
                  <InputLabel htmlFor="account-type">Account Type</InputLabel>
                  <Select
                    value={this.state.accountType}
                    onChange={this.handleSelect}
                    input={<Input id="account-type" />}
                  >
                    <MenuItem value={'Checkings'}>Checking</MenuItem>
                    <MenuItem value={'Savings'}>Savings</MenuItem>
                    <MenuItem value={'Credit'}>Credit</MenuItem>
                  </Select>
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Grid>
          <Grid item xs={6}>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell align="center">Transactions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>Transaction 1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}
