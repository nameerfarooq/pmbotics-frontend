import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import '../Milestone/milestone.css'
import { Table } from "react-bootstrap";
function MilestoneDetail() {
    const { id } = useParams();
    const { milestones, refreshmilestone } = useContext(MyContext)
    const navigate = useNavigate()
    const editMilestone = () => {
        navigate(`/fyp_panel/edit-milestone/${id}`)
    }
    // eslint-disable-next-line
    console.log("agaya milestone", milestones)
    const filteredMilestone = milestones.filter(milestone => milestone.id == id)
    const milestone = filteredMilestone[0]
    console.log("agaya milestone", milestone)
    var singleMarks;
    if (milestone) {

        singleMarks = ((milestone.marks) / (milestone.rubrics.rubric_data.length)) / (milestone.rubrics.rubric_data.length)
    }

    const deleteMilestone = async () => {
        await axios.delete(`deletemilestone/${id}`)
            .then((res) => {
                alert(res.data.message)
                if (res.data.message === "Successfuly deleted") {
                    refreshmilestone()
                    navigate('/fyp_panel/all-milestones')
                }
            })
            .catch((err) => {
                alert(err)
            })
    }
    return (
        <>
            {milestone ?


                <div className="MilestoneDetailContainer">

                    <Table striped hover bordered>
                        <thead>
                            <tr style={{ color: '#08c076', fontSize:'16px', fontWeight:'bold' }}>
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



                    
                    <h3 style={{ color: '#08c076', fontSize:'24px', fontWeight:'bolder' }} >
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
                            {console.log("me hun", milestone.rubrics.rubric_data)}
                            {milestone.rubrics.rubric_data.map((criteria,Index) => (
                                <tr id="tr-rubrics" key={criteria.title+Index}>
                                    <td  key={criteria.title+Index+Index}className="td-rub-1">
                                        {criteria.title}
                                    </td>
                                    <td key={criteria.title+Index+Index+Index} className="td-rub-1">
                                        {((milestone.marks) / (milestone.rubrics.rubric_data.length))}
                                    </td >
                                    {
                                        criteria.points.map((point,Index) => (
                                            <td key={point+Index} className="td-rub" >
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



                    <div>
                        <button className="dangerbtn" onClick={() => deleteMilestone()} >
                            Delete Milestone
                        </button>
                        <button className="MS-Card-btn3" onClick={() => editMilestone()} >
                            Edit Milestone
                        </button>
                    </div>
                </div>








                :
                <p>Loading</p>}

        </>
    )
}

export default MilestoneDetail