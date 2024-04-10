import { useParams, Link } from "react-router-dom";
import useAxios from "./hooks/useAxios";


const AuthorDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useAxios(`http://localhost:8000/api/author/${id}`);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    const { author } = data;

    return (
        <div className="row">
            <div className="col-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{author.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">ID: {author._id}</h6>
                        {/* Otros detalles del autor, si es necesario */}
                        <Link to="/" className="btn btn-outline-dark">Volver</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorDetails;
