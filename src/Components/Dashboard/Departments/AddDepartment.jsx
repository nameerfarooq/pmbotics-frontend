import { useState } from 'react';
import '../../Project/projects.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
function AddDepartment() {


    const navigate = useNavigate()


    const [department, setDepartment] = useState({
        name: "",
        hod: ""
    });
    const handleSubmit = async e => {
        e.preventDefault();

        await axios.post('https://pmbotics.herokuapp.com/departmentcrud', department)
            .then(response => {
                alert(JSON.stringify(response.data.message));
                if (response.data.message === "Success") {
                    setDepartment({
                        name: "",
                        hod: ""
                    });
                    
                }
            })
            .catch(error => {
                alert(error)

            });

        // clear form data after successful submission
        navigate('/fyp_panel/all-departments')



    };


    const handleChange = (e) => {
        setDepartment({ ...department, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <div className='CreateProjectScreen'>

                <h2 className='CP-Title'>
                    Add Department
                </h2>
                <h3 className='CP-Title2'>
                    Add Department details
                </h3>

                <div className='FormMainContainer'>
                    <form onSubmit={handleSubmit}>


                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input required type="text" className="form-control" id="name" name="name" value={department.name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hod">Head of Department</label>
                            <input required type="text" className="form-control" id="hod" name="hod" value={department.hod} onChange={handleChange} />
                        </div>

                        <button type="submit" className=" m-2 btn btn-primary">Add</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddDepartment