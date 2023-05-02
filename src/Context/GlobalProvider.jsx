import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from 'axios';
const GlobalProvider = (props) => {


    const [LoginStatus, setLoginStatus] = useState(localStorage.getItem('LoginStatus'))
    const [userRole, setuserRole] = useState(localStorage.getItem('userRole'))
    const [userName, setuserName] = useState('')
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setLoginStatus(false)
        setuserRole('')
        setuserName('')
    }
    const [departments, setDepartments] = useState([])
    const API_URI_departments = 'https://pmbotics.herokuapp.com/departmentcrud'
   
    const getDepartments = async () => {
        axios.get(API_URI_departments)
        .then((res)=>{
            console.log(res)
            setDepartments(res.data.data)
        })
    }
    useEffect(() => {

        getDepartments()
    }, [])
    const state = { userName, setuserName, LoginStatus, userRole, setuserRole, setLoginStatus, handleLogout, departments }
    return (
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalProvider