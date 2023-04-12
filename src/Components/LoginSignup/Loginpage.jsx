import React, { useState } from 'react'
import './LoginSignup.css'
import Header from '../Dashboard/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
function Loginpage() {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")


  function ClearForm(e) {
    e.preventDefault()
    setEmail("")
    setPassword("")
  }
  async function SubmitForm(e) {
    console.log(Email, Password)
    let item = {
      "email": Email,
      "password": Password
    }
    e.preventDefault()
    const response = await axios.post("http://127.0.0.1:8000/login", item)

      .then(res => {
        console.log(res.data.message)
        if (res.data.message === "Login Succes") {
          alert(res.data.message)

          ClearForm(e)
        }
        else {
          alert("Username or password is wrong")

        }
        ;
      }

      )
      .catch(err => {
        if (err.data.message === "login fail") {
          alert("Username or password is wrong")
        };
        // alert("Username or password is wrong")
      })

  }



  return (
    <div>
      <Header />
      <h2 className='Heading1'>
        Login
      </h2>
      <div className="formsHolder">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={Email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>



          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={Password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
          </Form.Group>





          <Button onClick={SubmitForm} variant="primary" >
            Login
          </Button>
        </Form>


      </div>
    </div>
  )
}

export default Loginpage