import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './HomePage.css'
import '../MainStyling.css'
import { useNavigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate()
    const gotoHome = () => {
        navigate('/')
    }
    const gotoLogin = () => {
        navigate('/login')
    }
    const Register = () => {

        navigate('/register')
    }
    return (
        <div>


            <Navbar sticky='top' className=' NavbarHome'>
                <Container>
                    <Navbar.Brand onClick={gotoHome} className='Navbar-in'>
                        <img className='w-100 pmbotics-logo' src={require('../../Images/logo-no-background.png')} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <button className='LoginButton' onClick={() => { gotoLogin() }}>
                            Login
                        </button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>




            <div className='section2'>

                <div className='section-2-1'>
                    <h1 className='HeadingHome'>
                        PMBOTICS
                    </h1>
                    <p className='Para'>
                        Tool for managing all processing carried out during a Final year project. where FYP panel, supervisors and team members can handle the project collaboratively
                    </p>
                    <button className='SignUpBTN' onClick={Register}>
                        Register Your Organization
                    </button>
                </div>
                <div className='section-2-2'>
                    <img className='mainimageHome' alt="main image" src={require('../../Images/homepageimage.png')} />
                </div>


            </div>

            <div className='section3'>

                <div className='homeCards'>
                    <h2 className='homeCardsHead'>
                        Step 1
                    </h2>
                    <button className='homeCardsBtn'>
                        Sign up as
                    </button>
                    <p className='homeCardsDesc'>
                        FYP Panel Member
                    </p>
                </div>
                <div className='homeCards'>
                    <h2 className='homeCardsHead'>
                        Step 2
                    </h2>
                    <button className='homeCardsBtn'>
                        Create
                    </button>
                    <p className='homeCardsDesc'>
                        New Projects
                    </p>
                </div>
                <div className='homeCards'>
                    <h2 className='homeCardsHead'>
                        Step 3
                    </h2>
                    <button className='homeCardsBtn'>
                        Add
                    </button>
                    <p className='homeCardsDesc'>
                        Supervisors & Teams
                    </p>
                </div>


            </div>




            <div className='section2'>

                <div className='section-2-1'>

                    <p className='Para'>
                        This application is designed to streamline the process of managing a final year project at a university. It allows FYP panel members, supervisors, and team members to collaborate efficiently and effectively throughout the project. With this application, all project-related communication, documentation, and progress tracking can be done in one centralized location, making it simpler for everyone involved to stay organized and on track. This application will make the FYP process more manageable, allowing you to focus on the important work of completing your project to the best of your ability.
                    </p>

                </div>
                <div className='section-2-2'>
                    <img className='mainimageHome2' alt="main image" src={require('../../Images/home2.png')} />
                </div>


            </div>








        </div>
    )
}

export default HomePage