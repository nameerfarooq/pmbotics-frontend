import React from 'react'
import './projects.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
function SViewProject() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    


    return (

        <div className='ViewProjectMainDiv'>


            <h1 className='PV-PTitle'>PMBOTICS</h1>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, earum. Voluptatum magni fugiat possimus sit eos voluptatibus illo assumenda, dolore facere, repudiandae neque ut recusandae nam maxime non, ipsam beatae.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio, earum. Voluptatum magni fugiat possimus sit eos voluptatibus illo assumenda, dolore facere, repudiandae neque ut recusandae nam maxime non, ipsam beatae.
            </p>
            <div className='PV-Cardholder'>

                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Documents
                    </h3>
                    <div className='PV-cards-section'>
                       <p>
                        Click on the button to view the documents
                        </p>
                    </div>
                    <Button className='PV-btn'variant="primary" onClick={() => handleShow(true)}>
                        View
                    </Button>
                    <MyVerticallyCenteredModal
                        details={
                            {
                                Head: 'Documents',

                                Desc: 'Not available right now !'
                            }
                        }
                        show={show}
                        onHide={() => handleClose(false)}
                    />
                </div>
                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Final Project
                    </h3>
                    <div className='PV-cards-section'>
                        <p>
                        Click on the button to view the Live Project
                        </p>
                    </div>
                    <Button className='PV-btn'variant="primary">
                        View
                    </Button>

                </div>

                
                <div className='PV-Cards'>

                    <h3 className='PV-cards-heading'>
                        Team Members
                    </h3>
                    <div className='PV-cards-section'>
                        <ul>
                            <li>Muhammad Nameer (19b-071-cs)</li>
                            <li>Ushna Karim (19b-019-cs)</li>
                            <li>Usama Ali (19b-047-cs)</li>
                        </ul>
                        
                    </div>
                    <Button className='PV-btn'variant="primary" >
                        Edit
                    </Button>
                    <Button className='PV-btn m-3'variant="primary" >
                        View
                    </Button>
                   
                </div>

            </div>



        </div>




    )
}

export default SViewProject