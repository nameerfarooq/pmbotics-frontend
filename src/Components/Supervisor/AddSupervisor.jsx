import React from 'react'
import Button from 'react-bootstrap/Button';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
function AddSupervisor() {
    return (
        <div>
            <div className='CreateProjectScreen'>

                <h2 className='CP-Title'>
                    Add Supervisor
                </h2>
                <h3 className='CP-Title2'>
                    Add Supervisor details
                </h3>

                <div className='FormMainContainer'>
                    <Form>

                        <label > Name</label>
                        <Form.Control type="text" />

                        <label > Education</label>
                        <Form.Control type="text" />

                        <label > Program</label>
                        <Form.Control type="text" />

                    
                        <label > Area of interest</label>
                        <Form.Control type="text" />

                        <label >Projects Load wanted</label>
                        <Form.Control type="text" />






                     


















                        <div className='PC-btnHolder'>
                            <Button className='PC-btn1' variant="secondary" type="submit">
                                Cancel
                            </Button>
                            <Button className='PC-btn2' variant="primary" type="submit">
                                Add
                            </Button>
                        </div>
                    </Form>

                </div>
            </div>
        </div>
    )
}

export default AddSupervisor