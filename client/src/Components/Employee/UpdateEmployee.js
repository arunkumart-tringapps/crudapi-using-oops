import React, {useEffect, useState} from "react";
import Axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

const UpdateEmployee = () => {
    let navigate = useNavigate();
    const {id} = useParams();
    // alert(id);
    const [newEmp, setNewEmp] = useState({
        "name": "",
        "age": "",
        "position": "",
        "salary": ""
    })

    const {name, age, position, salary} = newEmp;
    
    useEffect(()=>{
        fetchEmployeeById();
    }, []);

    const fetchEmployeeById = async () =>{
        const response = await Axios.get(`http://localhost:3001/get/${id}`);
        console.log(response.data);
        const {name, age, position, salary} = response.data[0];
        console.log("name: ", name);
        setNewEmp({ name, age, position, salary});
    }

    const onChangeInput = (e) => {
        setNewEmp({...newEmp, [e.target.name]: [e.target.value]});
        console.log("new emp inside onchangeinput: ",newEmp);
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("newEmp", newEmp);
        console.log("id, name, age, salary, position", id, name, age, salary, position)
        await Axios.put("http://localhost:3001/updateall", {id, name, age, salary, position});
        navigate('/');
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Update Employee</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name="name" value={name} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Employee name" />
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group mt-10">
                        <input type="number" name = "age" value={age}  onChange={(e) => onChangeInput(e)}  className="form-control form-control-lg" placeholder="Employee age" min="0" max="150" />
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name = "position" value={position}  onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Employee position"  />
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="number" name = "salary" value={salary} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Employee salary" min="0" />
                    </div>
                    </div>
                    <div className="mt-3">
                    <button className="btn btn-primary btn-block">Update Employee</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}
export default UpdateEmployee;