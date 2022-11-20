import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <h4>We did not find the pet, try to register it</h4>
            <Link to="/new" className="btn btn-success">Create a new Pet</Link>
        </div>

    )
}

export default Error;