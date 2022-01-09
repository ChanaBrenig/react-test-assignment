import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import PostList from './postList';
import './userTable.css';

export default function UserTable(props) {
  //user list from props
  const userList = props.userList;
  //posts list from url
  const [postList, setPostList] = useState([]);
  const urlPost = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    fetch(urlPost)
      .then(res => res.json())
      .then(data => setPostList(data))
      .catch(err => console.log(err))
  }, []);

  //Flag to know when to display the post list
  const [flag, setFlag] = useState(false);

  //list of posts filtered by userId
  const [filterPostList, setFilterPostList] = useState([]);

 //filter the posts list by userId and change the flag to true 
  const showPostByUserId = (userId) => {
    const post = postList.filter((post) => userId === post.userId);
    setFilterPostList(post);
    setFlag(true);
  }

  return (<div className='Div'>
    <TableContainer component={Paper} >
      <Table sx={{ minWidth: 650 }} aria-label="simple table" >
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Company Name</TableCell>
            <TableCell align="right">Select user</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userList.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.company.name}</TableCell>
              <TableCell align="right">
                <Button onClick={() => { showPostByUserId(user.id) }}>Select</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br />
    {flag ?<PostList posts={filterPostList} />:<div></div>}
  </div>);
}
