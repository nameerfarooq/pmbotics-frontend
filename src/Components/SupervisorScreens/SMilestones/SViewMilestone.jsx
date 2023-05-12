import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";
import '../../Milestone/milestone.css'
import { Table } from "react-bootstrap";
function SViewMilestone() {
    const { id } = useParams();
    const [milestones, setMilestones] = useState('')
    const navigate = useNavigate()
    
    const getAllMilestones = async () => {
        await axios.get('getallmilestone')
            .then((res) => {
                if (res.data.message) {
                    setMilestones(res.data.body)
                }
            })
    }
    useEffect(() => {
        getAllMilestones()
    }, [])
    // eslint-disable-next-line
    const filteredMilestone = milestones? milestones.filter(milestone => milestone.id == id) : null;
    const milestone = filteredMilestone? filteredMilestone[0] : null
    var singleMarks;
    if (milestone) {

        singleMarks = ((milestone.marks) / (milestone.rubrics.rubric_data.length)) / (milestone.rubrics.rubric_data.length)
    }

    
    return (
        <>
            {milestone ?


                <div className="MilestoneDetailContainer">

                    <Table striped hover bordered>
                        <thead>
                            <tr style={{ color: '#08c076', fontSize: '16px', fontWeight: 'bold' }}>
                                <td>Title</td>
                                <td>Details</td>
                                <td>Submission Date</td>
                                <td>Defending Date</td>
                                <td>Total Marks</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{milestone.milestone_name}</td>
                                <td>{milestone.milestone_details}</td>
                                <td>{milestone.document_submission_date}</td>
                                <td>{milestone.milestone_defending_date}</td>
                                <td>{milestone.marks}</td>
                            </tr>
                        </tbody>
                    </Table>




                    <h3 style={{ color: '#08c076', fontSize: '24px', fontWeight: 'bolder' }} >
                        Rubrics
                    </h3>

                    <table className="table-rubric" >
                        <thead>
                            <tr className="t-head" key='head-r'>
                                <td>Criteria</td>
                                <td>Marks</td>
                                <td>
                                    {(singleMarks).toFixed(1)}
                                </td>
                                <td>
                                    {(singleMarks + singleMarks).toFixed(1)}
                                </td>
                                <td>
                                    {(singleMarks + singleMarks + singleMarks).toFixed(1)}
                                </td>
                                <td>
                                    {(singleMarks + singleMarks + singleMarks + singleMarks).toFixed(1)}
                                </td>
                                <td>
                                    {(singleMarks + singleMarks + singleMarks + singleMarks + singleMarks).toFixed(1)}
                                </td>

                            </tr>
                        </thead>
                        <tbody>
                            {milestone.rubrics.rubric_data.map((criteria, Index) => (
                                <tr id="tr-rubrics" key={criteria.title + Index}>
                                    <td key={criteria.title + Index + Index} className="td-rub-1">
                                        {criteria.title}
                                    </td>
                                    <td key={criteria.title + Index + Index + Index} className="td-rub-1">
                                        {((milestone.marks) / (milestone.rubrics.rubric_data.length))}
                                    </td >
                                    {
                                        criteria.points.map((point, Index) => (
                                            <td key={point + Index} className="td-rub" >
                                                {point}
                                            </td>
                                        ))
                                    }
                                </tr>
                            )
                            )
                            }
                        </tbody>
                    </table>



                   
                </div>








                :
                <p>Loading</p>}

        </>
    )
}

export default SViewMilestone