import React, {useState} from "react";
import axios from "axios";
import {Link, useHistory } from "react-router-dom";
import {colors, genders} from "../data/data";

const NewPet = () => {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [color, setColor] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const savePet = e =>{
        e.preventDefault();
        axios.post("http://localhost:8000/api/pets",{
            name,
            image,
            color,
            description,
            age,
            gender
        })
            .then(res => history.push("/"))
            .catch(err => {
                if(err.response.status === 401) {
                    history.push("/login")
                } else {
                    setErrors(err.response.data.errors)
                }
            });
    }

    return (
        <div>
            <Link to="/" className="btn btn-danger">Cancel</Link>
            <h1>New Pet</h1>
            <form onSubmit={savePet}>
                <div className="form-group">
                    <label htmlFor="name">Name <span style={{color:"red"}}>*</span></label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
                    {errors.name ? <span className="text-danger">{errors.name.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="image">URL image:</label>
                    <input type="text" id="image" name="image" value={image} onChange={(e) => setImage(e.target.value)} className="form-control" />
                    {errors.image ? <span className="text-danger">{errors.image.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="color">Color <span style={{color:"red"}}>*</span></label>
                    <br />
                    <select name="color" id="color" value={color} onChange={(e) => setColor(e.target.value)}>
                        <option hidden defaultValue>Choose an option</option>
                        {colors.map(v => <option key={v.label} value={v.value}>{v.label}</option>)}
                    </select>
                    <br />
                    {errors.color ? <span className="text-danger">{errors.color.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <br />
                    <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)} cols="30" rows="10"></textarea>
                    {errors.description ? <span className="text-danger">{errors.description.message}</span> : null}
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age <span style={{color:"red"}}>*</span></label>
                    <input type="number" id="age" name="age" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" />
                    {errors.age ? <span className="text-danger">{errors.age.message}</span> : null}
                </div>
                <div>
                    <label htmlFor="gender">Gender <span style={{color:"red"}}>*</span></label>
                    {genders.map(v => 
                    <div key={v.label}> 
                        <input type="radio" id={v.value} name="gender" value={v.value} onChange={(e) => setGender(e.target.value)}/>
                        <label htmlFor={v.value}>{v.label}</label>
                    </div>
                    )}
                    {errors.gender ? <span className="text-danger">{errors.gender.message}</span> : null}
                </div>
                <input type="submit" value="Create" className="btn btn-success"/>
            </form>
        </div>

    )
}

export default NewPet;