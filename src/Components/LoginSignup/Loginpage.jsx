import React, { useContext, useState, useEffect } from 'react'
import './LoginSignup.css'
import Header from '../Dashboard/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import GlobalContext from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';
function Loginpage(props) {

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const { LoginStatus, userRole, setLoginStatus, setuserRole, setuserName } = useContext(GlobalContext)
  const navigate = useNavigate()
  useEffect(() => {
    if(LoginStatus && userRole){
      
      navigate(`/${userRole}`)
    }
  }, [])
  
  const Navigate = (e) => {
    navigate(`/${e}`)
  }
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
    const response = await axios.post("https://pmbotics.herokuapp.com/login", item)
      .then(res => {
        console.log(res)
        if (res.data.message === "Login Succes") {
          alert(res.data.message)
          console.log(res)
          var userRole = res.data.data.role
          var userName = res.data.data.name
          localStorage.setItem('access_token', res.data.data.access_token);
          localStorage.setItem('LoginStatus', true);
          localStorage.setItem('userRole', userRole);
          localStorage.setItem('userName', userName);
          localStorage.setItem('userId', res.data.data.id);
          localStorage.setItem('departmentId', res.data.data.dep_id);
          setLoginStatus(localStorage.getItem('LoginStatus'))
          setuserRole(localStorage.getItem('userRole'))
          setuserName(localStorage.getItem('userName'))
          
          ClearForm(e)
          Navigate(userRole)
        }
        else {
          alert("Username or password is wrong")

        }
        ;
      }

      )
      .catch(err => {
        
        console.log(err)
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