import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import '../Project/projects.css'
import axios from 'axios';
function CreateMilestone() {
    const [Duedate, setDueDate] = useState(new Date());
    const [Defendingdate, setDefendingDate] = useState(new Date());
    const [MilestoneName, setMilestoneName] = useState("")
    const [MilestoneDetails, setMilestoneDetails] = useState("")
    const [FYPpanel, setFYPpanel] = useState("")

    function ClearForm(e) {
        e.preventDefault()
        setDueDate(new Date())
        setDefendingDate(new Date())
        setMilestoneName("")
        setMilestoneDetails("")
        setFYPpanel("")

    }
    async function SubmitForm(e) {
        e.preventDefault()
        
        const item = {
            "milestone_name": MilestoneName,
            "document_submissin_date": "2023-01-23",
            "milestone_defending_date": "2023-01-25",
            "milestone_details": MilestoneDetails,
            "fyp_panel": 9

        }

        const response = await axios.post("http://127.0.0.1:8000/milestone", item)
            .then(res => {
                if(res.data.message==="success"){
                    alert(res.data.message)
                    ClearForm(e)
                }
                else{
                    alert(res.data.message)
                }
            }
            )
            .catch(err => {
                console.log("err is equal to : ", err)
            }
            )
    }
    return (

        <div className='CreateProjectScreen'>

            <h2 className='CP-Title'>
                Create Milestone
            </h2>
            <h3 className='CP-Title2'>
                Add Milestone details
            </h3>

            <div className='FormMainContainer'>
                <Form>

                    <label >Milestone Name</label>
                    <Form.Control value={MilestoneName} onChange={(e) => setMilestoneName(e.target.value)} type="text" />

                    <label >Document Submission Date</label>
                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            value={Duedate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </Form.Group>
                    <label >Milestone Defending Date</label>
                    <Form.Group controlId="duedate">
                        <Form.Control
                            type="date"
                            name="duedate"
                            placeholder="Due date"
                            value={Defendingdate}
                            onChange={(e) => setDefendingDate(e.target.value)}
                        />
                    </Form.Group>


                    <label >Milestone Details</label>
                    <Form.Control value={MilestoneDetails} onChange={(e) => setMilestoneDetails(e.target.value)} type="text" className='CM-Des' />


                    <label >FYP Panel</label>
                    <Form.Control value={FYPpanel} onChange={(e) => setFYPpanel(e.target.value)} type="text" className='' />


                    <div className='PC-btnHolder'>
                        <Button onClick={ClearForm} className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button onClick={SubmitForm} className='PC-btn2' variant="primary" type="submit">
                            Create Milestone
                        </Button>
                    </div>
                </Form>

            </div>
        </div>


    )
}

export default CreateMilestone