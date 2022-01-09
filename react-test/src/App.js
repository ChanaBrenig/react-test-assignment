import React, { useState, useEffect } from 'react';
import UserTable from './components/userTable';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



function App() {

  //user list from url
  const [userList, setUserList] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => setUserList(data))
      .catch(err => console.log(err))
  }, []);


  //filter functions

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  //Flag to know when to display the filter user list
  const [flag, setFlag] = useState(false);
  
  //list of users filtered by name or email
  const [filterUserList, setFilterUserList] = useState([]);

  //filter the user list by name
  const filterByName = (name) => {
    const user = userList.filter((user) => name === user.name);
    if (user.length == 0) {
      alert("name not found");
    } else {
      setFilterUserList(user);
      setFlag(true);
    }
  }

  //filter the user list by email
  const filterByEmail = (email) => {
    const user = userList.filter((user) => email === user.email);
    if (user.length == 0) {
      alert("email not found");
    } else {
      setFilterUserList(user);
      setFlag(true);
    }
  }

  //by click on "Canael the filter" change the flag to false and then show the original user list
  const cancel = () => {
    setFlag(false);
  }

  return (
    <div >
      <div className="App">react-test-assignment</div>
      <br />

      {flag ? < UserTable userList={filterUserList} /> : < UserTable userList={userList} />}

      <br />

      <TextField id="outlined-basic" label="Filter by name" variant="outlined" style={{ "margin-left": "50px" }}
        onChange={(e) => { setName(e.target.value) }} />

      <TextField id="outlined-basic" label="Filter by email" variant="outlined" style={{ "margin-left": "975px" }}
        onChange={(e) => { setEmail(e.target.value) }} />
      <br /> <br />

      <Button variant="outlined" style={{ "margin-left": "50px" }} onClick={() => { filterByName(name) }}>Filter by name</Button>
      <Button variant="outlined" style={{ "margin-left": "1115px" }} onClick={() => { filterByEmail(email) }}>Filter by email</Button>
      <div style={{ "textAlign": "center" }}>
        <Button variant="outlined" onClick={() => { cancel() }}>Cancel the filter</Button>
      </div>

      <br /> 
    </div>
  );
}

export default App;
