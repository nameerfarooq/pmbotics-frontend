import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import '../Project/projects.css'
import axios from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
function CreateMilestone() {
    const { refreshmilestone } = useContext(MyContext)
    const navigate = useNavigate()
    const gotoAllmilestone = () => {
        navigate('/fyp_panel/all-milestones')
    }
    const [rubrics, setRubrics] = useState({
        rubric_data: [
            {
                title: "",
                points: ["", "", "", "", ""],
            },
            {
                title: "",
                points: ["", "", "", "", ""],
            },
            {
                title: "",
                points: ["", "", "", "", ""],
            },
            {
                title: "",
                points: ["", "", "", "", ""],
            },
            {
                title: "",
                points: ["", "", "", "", ""],
            },
        ],
    });
    const [milestone, setMilestone] = useState({
        milestone_name: "",
        document_submission_date: new Date(),
        milestone_defending_date: new Date(),
        milestone_details: "",
        marks: 0,
        rubrics: rubrics
    })
    function ClearForm(e) {
        e.preventDefault()
        setRubrics({
            rubric_data: [
                {
                    title: "",
                    points: ["", "", "", "", ""],
                },
                {
                    title: "",
                    points: ["", "", "", "", ""],
                },
                {
                    title: "",
                    points: ["", "", "", "", ""],
                },
                {
                    title: "",
                    points: ["", "", "", "", ""],
                },
                {
                    title: "",
                    points: ["", "", "", "", ""],
                },
            ],
        })
        setMilestone({
            milestone_name: "",
            document_submission_date: new Date(),
            milestone_defending_date: new Date(),
            milestone_details: "",
            marks: 0,
            rubrics: rubrics

        })

    }
    async function SubmitForm(e) {
        e.preventDefault()
        const response = await axios.post("createmilestone", milestone)
            .then(res => {
                if (res.data.message === "Success") {
                    alert("Milestone Created Successfully")
                    ClearForm(e)
                    refreshmilestone()
                    gotoAllmilestone()
                }
                else if (res.data.exception === "some exception") {
                    let errorMessages = [];
                    if (typeof res.data.message === "object") {
                        // If the message is an object, extract the error messages from it
                        for (let field in res.data.message) {
                            if (Array.isArray(res.data.message[field])) {
                                errorMessages.push(...res.data.message[field]);
                            }
                        }
                    } else {
                        // Otherwise, add the message to the error messages array
                        errorMessages.push(res.data.message);
                    }
                    if (errorMessages.length > 0) {
                        // If there are error messages, show them in an alert box
                        alert(errorMessages[0]);
                    } else {
                        // Otherwise, show the exception message
                        alert(res.data.exception);
                    }
                } else {
                    alert(res.data.exception);
                }
            }
            )
            .catch(err => {
                console.log("err is equal to : ", err)
            }
            )
    }

    const handleChange = (e) => {
        setMilestone({ ...milestone, [e.target.name]: e.target.value });
    };


    const handleTitleChange = (event, index) => {
        const newRubrics = { ...rubrics };
        newRubrics.rubric_data[index].title = event.target.value;
        setRubrics(newRubrics);
    };

    const handlePointsChange = (event, index, pointIndex) => {
        const newRubrics = { ...rubrics };
        newRubrics.rubric_data[index].points[pointIndex] = event.target.value;
        setRubrics(newRubrics);
    };
    return (

        <div className='CreateProjectScreen-2'>

            <h2 className='CP-Title'>
                Create Milestone
            </h2>
            <h3 className='CP-Title2'>
                Add Milestone details
            </h3>

            <div className='FormMainContainer'>
                <Form>

                    <label >Milestone Name</label>
                    <Form.Control className='form-field-50' value={milestone.milestone_name} name='milestone_name' onChange={handleChange} type="text" />

                    <label >Document Submission Date</label>
                    <Form.Group className='form-field-50' controlId="duedate">
                        <Form.Control
                            type="date"
                            name="document_submission_date"

                            placeholder="document_submission_date"
                            value={milestone.document_submission_date}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <label >Milestone Defending Date</label>
                    <Form.Group className='form-field-50' controlId="duedate">
                        <Form.Control
                            type="date"
                            name="milestone_defending_date"
                            placeholder="Due date"
                            value={milestone.milestone_defending_date}
                            onChange={handleChange}
                        />
                    </Form.Group>


                    <label >Milestone Details</label>
                    <Form.Control className='form-field-50 CM-Des' name='milestone_details' value={milestone.milestone_details} onChange={handleChange} type="text" />


                    <label >Milestone Marks</label>
                    <Form.Control className='form-field-50' name='marks' value={milestone.marks} onChange={handleChange} type="text" />




                    <label >Rubrics</label>

                    {/* <table>
                        <tr>
                            <td>
                                Criteria
                            </td>
                            <td>
                                value 1
                            </td>
                            <td>
                                value 2
                            </td>
                            <td>
                                value 3
                            </td>
                            <td>
                                value 4
                            </td>
                            <td>
                                value 5
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Form.Control className='form-criteria' name='marks' value={milestone.marks} onChange={handleChange} type="text" />
                            </td>
                            <td>
                                <Form.Control name='marks' value={milestone.marks} onChange={handleChange} type="text" />
                            </td>
                            <td>
                                <Form.Control name='marks' value={milestone.marks} onChange={handleChange} type="text" />
                            </td>
                            <td>
                                <Form.Control name='marks' value={milestone.marks} onChange={handleChange} type="text" />
                            </td>
                            <td>
                                <Form.Control name='marks' value={milestone.marks} onChange={handleChange} type="text" />
                            </td>
                            <td>
                                <Form.Control name='marks' value={milestone.marks} onChange={handleChange} type="text" />
                            </td>
                        </tr>
                    </table> */}

                    {rubrics.rubric_data.map((rubric, index) => (
                        <div className='rubric-row' key={index}>
                            <input
                                className='rubric-inp-t'
                                type="text"
                                value={rubric.title}
                                onChange={(event) => handleTitleChange(event, index)}
                            />
                            {rubric.points.map((point, pointIndex) => (
                                <div className='rub-p-row' key={pointIndex}>

                                    <input
                                        className='rub-p-inp'
                                        type="text"
                                        value={point}
                                        onChange={(event) => handlePointsChange(event, index, pointIndex)}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}








                    <div className='PC-btnHolder'>
                        <Button onClick={ClearForm} className='PC-btn1' variant="secondary" type="submit">
                            Cancel
                        </Button>
                        <Button onClick={SubmitForm} className='PC-btn2' variant="primary" type="submit">
                            Create
                        </Button>
                    </div>
                </Form>

            </div>
        </div>


    )
}

export default CreateMilestone