import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
import { useContext } from 'react';
import GlobalContext from '../../Context/GlobalContext';

function Header() {


  const { handleLogout, userName } = useContext(GlobalContext)

  return (
    <Navbar sticky="top" className='Navbar-out'>
      <Container>
        <Navbar.Brand className='Navbar-in' href="#home">FYPManager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {userName && <Navbar.Text>
            <a href="#login" className='Navbar-in' >Hi, {userName}</a>
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