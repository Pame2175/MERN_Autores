import { useEffect, useState } from "react";
import useForm from "../hooks/useForm";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate, useParams } from "react-router-dom";

const AuthorFormUpdate = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const initialValues = {
        name: 'Cargando...',
        // Otros campos del autor, si los hay
    };

    const { values: author, handleChange, setValues } = useForm(initialValues);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res.data.author);
                setValues({
                    name: res.data.author.name,
                    // Asigna otros campos del autor si es necesario
                });
            })
            .catch(err => console.log(err));
    }, []);

    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/author/${id}`, author)
            .then(res => {
                console.log(res.data.author);
                Swal.fire({
                    icon: "success",
                    title: "¡Actualizado!",
                    text: "¡Actualizaste un autor!"
                });
                navigate("/");
            })
            .catch(err => {
                console.log(err);
                setError(err.response.data.error.message);
            });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="text-danger">{error}</div>
            <div>
                <label className="mt-3">Nombre del autor: </label>
                <input type="text" className="form-control" name="name" value={author.name} onChange={handleChange} />
            </div>
            {/* Otros campos del autor, si los hay */}
            <button type="submit" className="btn btn-outline-primary mt-3">Enviar</button>
            <button type="button" className="btn btn-outline-dark mt-3 ms-3" onClick={() => navigate("/")}>Cancelar - Volver</button>
        </form>
    );
};

export default AuthorFormUpdate;
