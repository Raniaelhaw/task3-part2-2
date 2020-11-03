import React from 'react';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import styled from 'styled-components';

 function Home() {
    return (
        <div>
         <b><center>you can sign in!</center></b>   
            <Form>
  <Form.Group className="form-container" controlId="formBasicEmail">
    <Form.Label style={{ color:'#343a40'}}>Email address</Form.Label>
    <Form.Control type="email"  placeholder="Enter email" style={{ color:'#343a40'}}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </div>
    )
}
export default Home;
const FormContainer = styled.form`
div
{
    width:50px;
    background:var(--mainDark);
}

`;