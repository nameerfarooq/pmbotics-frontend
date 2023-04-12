import React from 'react'
import './FinalProjectSubmit.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function FinalProjectSubmit() {
    return (
        <div className='MainDiv'>
            <h2 className='Heading'>
                Final Project Submission
            </h2>
            <br />
            <div className="SubmitCard">

                <h4 className='Head'>
                    Submit your final work here!
                </h4>
                <Form className='FormPro'>


                    <label >Final Submission Repository link</label>
                    <Form.Control type="text" className='CM-Des1' />


                    <div className='PC-btnHolder'>

                        <Button className='SubmitFYP' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default FinalProjectSubmit