import { useState } from 'react';
import '../../Project/projects.css'
import { useNavigate } from 'react-router-dom';
import axios from '../../../axiosConfig';
function AddDepartment({ setshowScreen }) {
    const navigate = useNavigate()
    const [department, setDepartment] = useState({
        "dep_name": "",
        "hod_name": "",

        "email": "",
        "password": "",
        "facultyid": "",
        "designation": "",
        "phoneno": ""
    });
    // const bearerToken = localStorage.getItem('access_token');

    // // Create headers object with the Authorization header
    // const headers = {
    //     'Authorization': `Bearer ${bearerToken}`,
    //     'Content-Type': 'application/json' // You can add other headers if needed
    // };
    const handleSubmit = async e => {
        e.preventDefault();
        console.log(department, "department")
        await axios.post('departmentcrud', department)
            .then(response => {
                alert(JSON.stringify(response.data.message));
                if (response.data.message === "Success") {
                    setDepartment({
                        "dep_name": "",
                        "hod_name": "",
                        "email": "",
                        "password": "",
                        "facultyid": "",
                        "designation": "",
                        "phoneno": ""
                    });

                    setshowScreen(0)
                }
                console.log(response)
            })
            .catch(error => {
                alert(error)
                console.log(error)
            });

    };


    const handleChange = (e) => {
        setDepartment({ ...department, [e.target.name]: e.target.value });
    };
    return (
        <div className='Add-department-screen'>
            <div >

                <h2 className='CP-Title'>
                    Add Department
                </h2>
                <h3 className='CP-Title2'>
                    Add Department details
                </h3>

                <div className='FormMainContainer'>
                    <form onSubmit={handleSubmit}>


                        <div className="form-group">
                            <label htmlFor="name">Department Name</label>
                            <input required type="text" className="form-control" id="dep_name" name="dep_name" value={department.dep_name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="hod_name">Head of Department</label>
                            <input required type="text" className="form-control" id="hod_name" name="hod_name" value={department.hod_name} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">HOD email</label>
                            <input required type="email" className="form-control" id="email" name="email" value={department.email} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input required type="password" className="form-control" id="password" name="password" value={department.password} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="facultyid">facultyid</label>
                            <input required type="text" className="form-control" id="facultyid" name="facultyid" value={department.facultyid} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="designation">designation</label>
                            <input required type="text" className="form-control" id="designation" name="designation" value={department.designation} onChange={handleChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phoneno">phoneno</label>
                            <input required type="text" className="form-control" id="phoneno" name="phoneno" value={department.phoneno} onChange={handleChange} />
                        </div>

                        <button type="" onClick={() => setshowScreen(0)} className=" m-2 btn btn-danger">Cancel</button>
                        <button type="submit" className=" m-2 btn btn-primary">Add</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default AddDepartment