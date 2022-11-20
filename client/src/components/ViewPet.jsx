import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useHistory, useParams} from "react-router-dom";

const placeHolder = "https://animalclinic.org/wp-content/uploads/2019/05/paw-placeholder.png";

const ViewPet = () => {
    const {id} = useParams();
    const [pet, setPet] = useState("");
    // const [name, setName] = useState("");
    // const [image, setImage] = useState("");
    // const [color, setColor] = useState("");
    // const [description, setDescription] = useState("");
    // const [age, setAge] = useState("");
    // const [gender, setGender] = useState("");

    // const [errors, setErrors] = useState({});
    const history = useHistory();

    useEffect(() => {
        axios.get("http://localhost:8000/api/pets/"+id)
            .then(res => setPet(res.data))
            .catch(err => {
                if(err.response.status === 400) {
                    history.push("/error")
                }
            });
    }, [])

    const deletePet = idPet => {
        axios.delete("http://localhost:8000/api/pets/"+pet._id)
            .then(res => history.push("/"));
    }

    return (
        <div className="container">
            <Link to="/" className="btn btn-danger">Back</Link>
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                <h1>{pet.name}</h1>
                {pet.image ? <img className="img-fluid" height={300} width={300} src={pet.image}/> : <img className="img-fluid" height={300} width={300} src={placeHolder}/>}
            </div>
            <br />
            <div>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Created</th>
                            <th>Updated</th>
                            <th>Color</th>
                            <th>Description</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{pet._id}</td>
                            <td>{pet.createdAt}</td>
                            <td>{pet.updatedAt}</td>
                            <td>{pet.color}</td>
                            <td>{pet.description}</td>
                            <td>{pet.age}</td>
                            <td>{pet.gender}</td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    <Link to={`/pets/edit/${pet._id}`} className="btn btn-primary">Edit</Link>
                    <button className="btn btn-danger" onClick={() => deletePet(pet._id)}>Delete</button>
                </div>
            </div>
        </div>

    )
}

export default ViewPet;