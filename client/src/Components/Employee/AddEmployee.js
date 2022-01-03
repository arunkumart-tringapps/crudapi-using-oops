import React, {useState} from "react";
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';

const AddEmployee = () => {
    console.log("inside add employee");
    let navigate = useNavigate();
    const [newEmp, setNewEmp] = useState({
        "name": "",
        "age": 0,
        "position": "",
        "salary": 0
    })

    const {name, age, position, salary} = newEmp;

    const onChangeInput = (e) => {
        setNewEmp({...newEmp, [e.target.name]: [e.target.value]});
        console.log(newEmp);
    }
    const isFormValid = () => {
        
        console.log("age", age);
        if(name == "" || age == 0 || age == "" || position == "" || salary == 0 || salary == ""){
            
            return false;
        }
        return true;
    }
    const onSubmit = async (e) => {
        console.log("inside onSubmit");
        e.preventDefault();

        if(isFormValid()){
            console.log("inside isFormValid if condition");
            await Axios.post("http://localhost:3001/create", newEmp);
            navigate('/');
        }else{
            alert("Fill correct user detials");
        }
    }
    return (
        <div className="container">
            <div className="w-75 mx-auto shadow p-5">
                <h2 className="text-center mb-4">Add Employee</h2>
                <form onSubmit={(e) => onSubmit(e)}>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name="name" value={name} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Employee name" pattern="[a-zA-Z][a-zA-Z ]{2,}" required/>
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group mt-10">
                        <input type="number" name = "age" value={age}  onChange={(e) => onChangeInput(e)}  className="form-control form-control-lg" placeholder="Employee age" min="0" max="150" pattern="[0-9]*" inputmode="numeric" required/>
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="text" name = "position" value={position}  onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Employee position" pattern="[a-zA-Z][a-zA-Z ]{2,}" required  />
                    </div>
                    </div>
                    <div className="mt-3">
                    <div className="form-group">
                        <input type="number" name = "salary" value={salary} onChange={(e) => onChangeInput(e)} className="form-control form-control-lg" placeholder="Employee salary" min="0" pattern="[0-9]*" inputmode="numeric" required />
                    </div>
                    </div>
                    <div className="mt-3">
                    <button className="btn btn-primary btn-block">Add Employee</button>
                    </div>
                   
                </form>
            </div>
        </div>
    )
}
export default AddEmployee;