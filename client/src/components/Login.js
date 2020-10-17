import React, {useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Login = () => {
  const history = useHistory()
  const initialForm = {
    username: '',
    password: ''
  }
  const [user, setUser] = useState(initialForm);

  const changeHandler = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  };
  console.log(user)

  const login = (e) => {
    e.preventDefault();
    axios
    .post('http://localhost:5000/api/login', user)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        history.push('/BubblePage');
      })
      .catch(e=>{console.log(`NO SOUP FOR YOU ${e}`)})
  }

  return (
    
    <div style = {{display: 'flex', flexDirection: 'row', justifyContent:'center', alignContent:'center', alignItems: 'center'}}>
      <h1>Welcome to the Bubble App!</h1>
    
      <Form onSubmit = {login}>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="exampleEmail" className="mr-sm-2">Email</Label>
        <Input onChange = {changeHandler} type="text" name="username" id="exampleEmail" value = {user.username} placeholder="username" />
      </FormGroup>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Label for="examplePassword" className="mr-sm-2">Password</Label>
        <Input onChange = {changeHandler} type="password" name="password" id="examplePassword" value = {user.password} placeholder="don't tell!" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
    </div>
  );
};