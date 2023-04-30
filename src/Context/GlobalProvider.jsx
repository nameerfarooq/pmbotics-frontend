import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import axios from "axios";
const GlobalProvider = (props) => {


    const [LoginStatus, setLoginStatus] = useState(localStorage.getItem('LoginStatus'))
    const [userRole, setuserRole] = useState(localStorage.getItem('userRole'))

    const handleLogout = () => {
        localStorage.removeItem('access_token');
        setLoginStatus(false)
        setuserRole('')
    }
    const [departments, setDepartments] = useState([])
    const API_URI_departments = 'https://pmbotics.herokuapp.com/departmentcrud'
    const getDepartments = async () => {
        try {
            const fetchData = await axios.get(API_URI_departments, {

            })

            setDepartments(fetchData.data.data)


        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {

        getDepartments()
    }, [])

    const state = { LoginStatus, userRole, setuserRole, setLoginStatus, handleLogout, departments }
    return (
        <GlobalContext.Provider value={state}>
            {props.children}
        </GlobalContext.Provider>
    )

}
export default GlobalProvider