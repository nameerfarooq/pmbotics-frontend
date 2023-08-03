import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../../axiosConfig";
import { useNavigate } from "react-router-dom";
import '../../Milestone/milestone.css'
import { Table } from "react-bootstrap";
function TViewMilestone({ projectStatus, projectId }) {
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
    const filteredMilestone = milestones ? milestones.filter(milestone => milestone.id == id) : null;
    const milestone = filteredMilestone ? filteredMilestone[0] : null
    var singleMarks;
    if (milestone) {

        singleMarks = ((milestone.marks) / (milestone.rubrics.rubric_data.length)) / (milestone.rubrics.rubric_data.length)
    }


    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleUpload = async () => {
        if (selectedFile) {
            let formData = new FormData();
            formData.append('file', selectedFile);
            formData.append('title', 'milestone file');
            formData.append('description', 'submission of file');
            formData.append('milestone_id', parseInt(id, 10));
            formData.append('project_id', projectId);

            try {
                const response = await axios.post('submitwork', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data', // Set the content type correctly for form data.
                    },
                });

                console.log(response);

                if (response.data.status === 200) {
                    alert('Milestone Work Submitted Successfully');
                    setSelectedFile('');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            alert('Select a file to be uploaded');
        }
    };

    const today = new Date().toISOString().split('T')[0]



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
                    {
                        projectStatus === "ongoing" ?

                            <div className="uploadFileSection">

                                <div>
                                    <h4>Upload Milestone Work</h4>
                                    <p>Note: only upload a single file</p>

                                </div>
                                {milestone.document_submission_date > today ?
                                    <div className="uploadField">
                                        <input type="file" onChange={handleFileChange} />
                                        <button className="uploadbtn" onClick={handleUpload}>Upload</button>
                                    </div>
                                    :
                                    <p style={{ color: 'red' }}>Submissions Closed! Submission date has been passed</p>
                                }

                            </div>
                            :
                            <div>
                                Project Marked as completed! Submissions closed
                            </div>
                    }

                </div>

                :
                <p>Loading</p>}

        </>
    )
}

export default TViewMilestone