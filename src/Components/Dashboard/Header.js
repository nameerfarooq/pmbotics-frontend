import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './style.css'
function Header(props) {
  const UserName = props.UserName
  return (
    <Navbar sticky="top" className='Navbar-out '>
      <Container>
        <Navbar.Brand className='Navbar-in' href="#home">FYPManager</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            {UserName && <Navbar.Text>
            <a href="#login" className='Navbar-in' >Hello, {UserName}</a>
            <button className='btnLogout' title='logout'>

              <img className='w-100' src={require('../../Images/logout.png')} alt="" />

            </button>
          </Navbar.Text>}
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;