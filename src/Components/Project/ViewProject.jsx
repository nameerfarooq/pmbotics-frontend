import React, { useContext, useEffect } from 'react'
import './projects.css'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import { useParams } from 'react-router-dom';
import MyContext from '../../Context/MyContext';

function ViewProject() {
    const { id } = useParams()
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { projects, supervisors } = useContext(MyContext);

    const [loaded, setLoaded] = useState(false);
    const [myProject, setMyProject] = useState(null);
    const [mySupervisor, setMySupervisor] = useState(null);

    useEffect(() => {
        if (projects && supervisors) {

            const filteredProject = projects.filter(project => project.id == id);
            const project = filteredProject.length ? filteredProject[0] : null;
            setMyProject(project);
            setLoaded(true);

        }
    }, [id, projects, supervisors]);

    useEffect(() => {

        if (myProject && supervisors) {
            console.log("mera", mySupervisor)
            const filteredSupervisor = supervisors.filter(supervisor => supervisor.id == myProject.supervisor);
            const supervisor = filteredSupervisor.length ? filteredSupervisor[0] : null;
            setMySupervisor(supervisor);
        }
    }, [myProject, supervisors]);

    return (
        <>
            {myProject && mySupervisor ?


                <div className='ViewProjectMainDiv'>


                    <h1 className='PV-PTitle'>{myProject.title}</h1>
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
                            <Button className='PV-btn' variant="primary" onClick={() => handleShow(true)}>
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
                            <Button className='PV-btn' variant="primary">
                                View
                            </Button>

                        </div>

                        <div className='PV-Cards'>

                            <h3 className='PV-cards-heading'>
                                Supervisor
                            </h3>
                            <div className='PV-cards-section'>
                                <p>
                                    {mySupervisor.name}
                                </p>
                                <br />
                                <br />
                            </div>
                            <Button className='PV-btn' variant="primary">
                                Change
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
                            <Button className='PV-btn' variant="primary" >
                                Edit
                            </Button>

                        </div>

                    </div>



                </div>



                :
                <p>Loading</p>
            }
        </>
    )
}

export default ViewProject