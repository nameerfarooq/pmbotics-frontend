import { useContext } from "react";
import { useParams } from "react-router-dom";
import MyContext from "../../Context/MyContext";
import axios from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
function MilestoneDetail() {
    const { id } = useParams();
    const { milestones, refreshmilestone } = useContext(MyContext)
    const navigate = useNavigate()
    const editMilestone = () => {
        navigate(`/fyp_panel/edit-milestone/${id}`)
    }
    // eslint-disable-next-line
    const filteredMilestone = milestones.filter(milestone => milestone.id == id)
    const milestone = filteredMilestone[0]
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
                FYP Panel id
            </h3>
            <h4>
                {milestone.fyp_panel}
            </h4>
            <h3 className="headingsformilestonedetails">
                Rubrics
            </h3>

            <table>
                <thead>
                    <tr>
                        <td>Criteria</td>
                        <td>Marks</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                    </tr>
                </thead>
                <tbody>
                    {milestone.rubrics.rubric_data.map((criteria) => {
                        <tr key={criteria.title}>
                            <td>
                                {criteria.title}
                            </td>
                            {
                                criteria.points.map((point)=>{
                                    <td>
                                        {point}
                                    </td>
                                })
                            }
                        </tr>
                    })}
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
    )
}

export default MilestoneDetail