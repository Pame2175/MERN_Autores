import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

const AuthorList = ({ authors, setAuthors }) => {

    const deleteAuthor = (authorId) => {
        Swal.fire({
            title: "¿Seguro que deseas eliminar?",
            text: "Estás a punto de eliminar un autor.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminarlo"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:8000/api/author/${authorId}`)
                .then(res => {
                    console.log(res);
                    Swal.fire({
                        icon: "success",
                        title: "¡Eliminado!",
                        text: "Has eliminado un autor."
                    });
                    setAuthors(authors.filter(author => author._id !== authorId));
                });
            }
        });
    };

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/author")
            .then((response) => {
                console.log(response.data.authors);
                setAuthors(response.data.authors);
                setIsLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
    }, [setAuthors]);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
        <Link to={`/add`} className="btn btn-outline-primary btn-sm mb-3">Agregar</Link> 
  
        <table className="table table-striped table-hover mt-5">
            <thead>
                <tr>
                    <th>Nombre del autor</th>
                    {/* Otros encabezados de columna, si es necesario */}
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    authors.map(author => (
                        <tr key={author._id}>
                            <td>{author.name}</td>
                            {/* Otras columnas, si es necesario */}
                            <td>
                                <Link to={`/author/${author._id}`} className="btn btn-outline-primary btn-sm me-1">Detalle</Link>
                                <Link to={`/author/${author._id}/edit`} className="btn btn-outline-warning btn-sm me-1">Actualizar</Link>
                                <button onClick={() => deleteAuthor(author._id)} className="btn btn-outline-danger btn-sm">Eliminar</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        </>
    );
};

AuthorList.propTypes = {
    authors: PropTypes.array,
    setAuthors: PropTypes.func.isRequired
};

export default AuthorList;
