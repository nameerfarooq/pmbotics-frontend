import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import '../Project/projects.css'
import axios from '../../axiosConfig';
import { useNavigate } from 'react-router-dom';
import MyContext from '../../Context/MyContext';
import { useParams } from 'react-router-dom';
function EditMilestone() {
    const { id } = useParams();
    const { milestones, refreshmilestone } = useContext(MyContext)
    const filteredMilestone = milestones.filter(milestone => milestone.id == id)
    const myMilestone = filteredMilestone[0]
    const navigate = useNavigate()
    const gotomilestone = () => {
        navigate(`/fyp_panel/milestone/${id}`)
    }
    const [rubrics, setRubrics] = useState(null);

    const [milestone, setMilestone] = useState(null)
    useEffect(() => {
        if (myMilestone) {

            setRubrics(myMilestone.rubrics)
            setMilestone(myMilestone)
        }


    }, [myMilestone])


    console.log(milestone)

    function ClearForm(e) {
        e.preventDefault()
        navigate(`/fyp_panel/milestone/${id}`)

    }
    async function SubmitForm(e) {
        e.preventDefault()
        console.log("hunh ", milestone)
        const response = await axios.patch("updatemilestone", milestone)
            .then(res => {
                if (res.data.message === "Success") {
                    alert("Milestone updated Successfully")
                    ClearForm(e)
                    refreshmilestone()
                    gotomilestone()
                }
                else {
                    console.log(res)
                    alert(res.data.message)
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
        <>
            {milestone ?

                <div className='CreateProjectScreen-2'>

                    <h2 className='CP-Title'>
                        Edit Milestone
                    </h2>
                    <h3 className='CP-Title2'>
                        Edit Milestone details
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
                                    Back
                                </Button>
                                <Button onClick={SubmitForm} className='PC-btn2' variant="primary" type="submit">
                                    Update
                                </Button>
                            </div>
                        </Form>

                    </div>
                </div>



                : <p>Loading</p>}
        </>

    )
}

export default EditMilestone