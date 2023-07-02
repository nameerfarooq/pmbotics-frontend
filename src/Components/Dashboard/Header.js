import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';
import { useNavigate } from 'react-router-dom';
function Header() {


  const { handleLogout, userName, userRole } = useContext(GlobalContext)
  const navigate = useNavigate()
  const gotoHome = () => {
    const user_role = localStorage.getItem('userRole')
    if (user_role) {
      navigate(`/${user_role}/`)
    }
    else {
      navigate('/')
    }
  }
  return (
    <Navbar sticky="top" className='Navbar-out'>


      <Container>
        <Navbar.Brand onClick={gotoHome} className='Navbar-in'>
          <img className='w-100 pmbotics-logo' src={require('../../Images/logo-no-background.png')} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {userName && <Navbar.Text>
            <a className='Navbar-in' >Hi, {userName} ({userRole})</a>
            <button className='btnLogout' title='logout' onClick={handleLogout}>

              <img className='w-100' src={require('../../Images/logout.png')} alt="" />

            </button>
          </Navbar.Text>}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;