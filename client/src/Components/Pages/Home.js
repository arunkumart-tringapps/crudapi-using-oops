import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {Link} from 'react-router-dom';
const Home = () => {

    const [employeesList, setEmployeesList] = useState([]);

    useEffect(()=>{
        loadEmployees();
    }, []);

    const deleteAllEmployees = async () => {
        if (window.confirm("Do you really want to delete ALL EMPLOYEES?")) { 
            const response = await Axios.delete(
              "http://localhost:3001/deleteall"
            );
            console.log("delete response", response);
            setEmployeesList([]);
        }

      
    };

    const deleteEmployee = async (empId) => {
        if(window.confirm("Do you really want to delete?")){
            const response = await Axios.delete(`http://localhost:3001/delete/${empId}`);
            console.log("response", response);
            setEmployeesList(employeesList.filter(emp => emp.id !== empId));
        }
        
    }

    const loadEmployees = async () => {

        const result = await Axios.get("http://localhost:3001/get");        
        setEmployeesList(result.data);
        
    }

    return(
        <div className='container'>
            <div className='py-4'>
                <h1>Employee details</h1>
                <button className='btn btn-danger' onClick={()=> deleteAllEmployees()}>Delete all Employees</button>
                <table className='table border shadow'>
                    <thead className='thead-dark'>
                        <tr>
                            <th scope='col'>Id</th>
                            <th scope='col'>Name</th>
                            <th scope='col'>Age</th>
                            <th scope='col'>Position</th>
                            <th scope='col'>Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employeesList.map((emp) => 
                        <tr key={emp.id}>
                                <td scope='row'>{emp.id}</td>
                                <td scope='row'>{emp.name}</td>
                                <td scope='row'>{emp.age}</td>
                                <td scope='row'>{emp.position}</td>
                                <td scope='row'>{emp.salary}</td>
                                <td >
                                    <Link className='btn btn-primary' to={`/updateemployee/${emp.id}`}>Edit</Link>
                                    
                                    <button className='btn btn-danger mr-2' onClick={() => deleteEmployee(emp.id)}>Delete</button>
                                </td>
                            </tr>
                        
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Home;