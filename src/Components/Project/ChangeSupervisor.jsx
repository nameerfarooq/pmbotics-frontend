import React from 'react'
import Button from 'react-bootstrap/Button';
import '../Project/projects.css'
import Form from 'react-bootstrap/Form';
import '../../Components/MainStyling.css'
function ChangeSupervisor() {
  return (
    <div className='CreateProjectScreen'>

            <h2 className='CP-Title'>
                Change Supervisor
            </h2>
           

            <div className='FormMainContainer'>
                <Form>

                  


                    <label >replace with</label>
                    <Form.Select aria-label="Default select example">
                        <option>select</option>
                        <option value="1">Miss Amna Umair</option>
                        <option value="2">Sir Dr. Waseem</option>
                        <option value="3">Sir Syed Faisal Ali</option>
                        <option value="4">Sir Zeeshan Saleem Khan</option>
                        <option value="5">Sir Dr.Lubaid</option>


                    </Form.Select>






                    <div className='PC-btnHolder'>
                        <Button className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button className='PC-btn2' variant="primary" type="submit">
                            Confirm 
                        </Button>
                    </div>
                </Form>

            </div>
        </div>
  )
}

export default ChangeSupervisor