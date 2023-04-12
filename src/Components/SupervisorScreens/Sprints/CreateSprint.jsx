import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function CreateSprint() {

    const [Duedate, setDueDate] = useState(new Date());
    const [Defendingdate, setDefendingDate] = useState(new Date());
    return (
        <div>
            <div className='CreateProjectScreen'>

                <h2 className='CP-Title'>
                    Create Sprint
                </h2>
                <h3 className='CP-Title2'>
                    Add Sprint details
                </h3>

                <div className='FormMainContainer'>
                    <Form>

                        <label >Sprint Name</label>
                        <Form.Control type="text" />

                        <label >Sprint Due Date</label>
                        <Form.Group controlId="duedate">
                            <Form.Control
                                type="date"
                                name="duedate"
                                placeholder="Due date"
                                value={Defendingdate}
                                onChange={(e) => setDefendingDate(e.target.value)}
                            />
                        </Form.Group>















                        <label >Sprint Details</label>
                        <Form.Control type="text" className='CM-Des' />
                     <h3 className='m-3'>
                        Assign tasks to members
                     </h3>
                        <label >Muhammad Nameer</label>
                        <Form.Control type="text" className='' placeholder='Enter Tasks, Use Comma (,) to enter multiple tasks' />
                        <label >Ushna Karim</label>
                        <Form.Control type="text" className='' placeholder='Enter Tasks, Use Comma (,) to enter multiple tasks' />
                        <label >Usama Ali</label>
                        <Form.Control type="text" className='' placeholder='Enter Tasks, Use Comma (,) to enter multiple tasks' />











                        <div className='PC-btnHolder'>
                            <Button className='PC-btn1' variant="secondary" type="submit">
                                Cancel
                            </Button>
                            <Button className='PC-btn2' variant="primary" type="submit">
                                Create Sprint
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default CreateSprint