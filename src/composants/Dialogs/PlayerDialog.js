import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


function PlayerDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddPlayer = () => {
    const name = document.getElementById("player_input_from_dialog").value;
    console.log("nom a ajouter:", name);
    props.handleAddPlayer(name);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a player</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter the name of the player to add.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="player_input_from_dialog"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAddPlayer}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PlayerDialog;