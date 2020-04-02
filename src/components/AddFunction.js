import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AddClient(props) {

    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname:'', lastname:'', streetaddress:'', postcode:'', city:'', email:'', phone:''

    });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChange = (event) =>{
      setCustomer({...customer, [event.target.name]: event.target.value})

  };
  const addClient = () =>{
      props.saveClient(customer);
      handleClose();

  }
    return(
        <div>
            <Button style={{margin: 10}} color="primary" onClick={handleClickOpen}>
                Add new client
            </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add Client</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    name="firstname"
                    value={customer.firstname}
                    onChange={event => handleChange(event)}
                    label="First name"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="lastname"
                    value={customer.lastname}
                    onChange={e => handleChange(e)}
                    label="Last name"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="streetaddress"
                    value={customer.streetaddress}
                    onChange={e => handleChange(e)}
                    label="Address"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    name="postcode"
                    value={customer.postcode}
                    onChange={e => handleChange(e)}
                    label="Postal code"
                    fullWidth
                />
                 <TextField
                    margin="dense"
                    name="city"
                    value={customer.city}
                    onChange={e => handleChange(e)}
                    label="City"
                    fullWidth
                />
                 <TextField
                    margin="dense"
                    name="email"
                    value={customer.email}
                    onChange={e => handleChange(e)}
                    label="Email"
                    fullWidth
                />
                 <TextField
                    margin="dense"
                    name="phone"
                    value={customer.phone}
                    onChange={e => handleChange(e)}
                    label="Phone"
                    fullWidth
                />
                
            </DialogContent>
        <DialogActions>
            <Button onClick={handleClose} color="primary">
                Cancel
            </Button>
            <Button onClick={addClient} color="primary">
                Save
            </Button>
        </DialogActions>
      </Dialog>

        </div>

    );


}