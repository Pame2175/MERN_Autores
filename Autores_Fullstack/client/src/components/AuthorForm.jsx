import { useState } from "react";
import useForm from "../hooks/useForm";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const AuthorForm = ({ }) => {

    const initialValues = {
        name: '',
        // Otros campos del autor, si los hay
    };
    const { values: author, handleChange, clearData } = useForm(initialValues);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                console.log(res.data.author);
             
                clearData();
                Swal.fire({
                    icon: "success",
                    title: "¡Genial!",
                    text: "¡Autor agregado exitosamente!",
                });
                setError("");
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.error.message);
            });
    };

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div>
                <label className="mt-3">Nombre del autor: </label>
                <input type="text" className="form-control" name="name" value={author.name} onChange={handleChange} />
            </div>
            {/* Otros campos del autor, si los hay */}
            <button type="submit" className="btn btn-outline-primary me-3 mt-3">Enviar</button>
            <Link to="/" className="btn btn-outline-dark mt-3">Volver</Link>
        </form>
        </>
    );
};

AuthorForm.propTypes = {
    updateAuthors: PropTypes.func
};

export default AuthorForm;
