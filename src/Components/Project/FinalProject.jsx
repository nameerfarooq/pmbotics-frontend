import React from 'react'
import Button from 'react-bootstrap/Button';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
import '../../Components/MainStyling.css'
function FinalProject() {
    return (
        <div className='MainContainerFP'>
            <h2 className='Heading BlueTxt'>
                Final Project
            </h2>
            <div className='FP-Card AddShadow'>

                <h3 className='SubHeading GreyTxt FP-1'>
                    Final Project Repository
                </h3>
                <p className='WhiteTxt FP-2'>
                    Github or any other repository link here !

                </p>

            </div>
            <div className='GradesHolderFP'>
                <h3 className='SubHeading'>
                    Final Grades
                </h3>
                <p className='GreyTxt'>Enter Grades</p>


                <Form>

                    <label >Muhammad Nameer</label>
                    <Form.Control className='widthControl' type="text" />


                    <label >Ushna Karim</label>
                    <Form.Control className='widthControl' type="text" />

                    <label >Usama Ali</label>
                    <Form.Control className='widthControl' type="text" />


                    <div>
                        <label className='SubHeading ' >Enter Remarks</label>
                        <Form.Control type="text" className='widthControl2 HeightInput'/>
                       
                    </div>










                    <div className='PC-btnHolder'>
                        <Button className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button className='PC-btn2' variant="primary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div >
    )
}

export default FinalProject