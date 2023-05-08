import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import '../Milestone/milestone.css'

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
                    <h3 className="headingsformilestonedetails">
                        Title
                    </h3>
                    <h2>
                        {milestone.milestone_name}
                    </h2>
                    <h3 className="headingsformilestonedetails">
                        Details
                    </h3>
                    <p>
                        {milestone.milestone_details}
                    </p>
                    <h3 className="headingsformilestonedetails">
                        Document submission date
                    </h3>
                    <h4>
                        {milestone.document_submission_date}
                    </h4>
                    <h3 className="headingsformilestonedetails">
                        Defending Date
                    </h3>
                    <h4>
                        {milestone.milestone_defending_date}
                    </h4>
                    <h3 className="headingsformilestonedetails">
                        Milestone Marks
                    </h3>
                    <h4>
                        {milestone.marks}
                    </h4>

                    <h3 className="headingsformilestonedetails">
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