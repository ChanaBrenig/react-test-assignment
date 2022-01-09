import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddPost(props) {
  //userId from props to know who create the new post
  const userId=props.userId;

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };   
  
  //addPostApi - fake function to create a new post by userId, title and body and send it to the server
  const addPost = () => {
    //addPostApi(userId, title, body);
    setOpen(false);
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add a New Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create a new post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new post, please enter your post title and post body here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write the post title"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => { setTitle(e.target.value) }}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Write the post body"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => { setBody(e.target.value) }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addPost}>Add Post</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}