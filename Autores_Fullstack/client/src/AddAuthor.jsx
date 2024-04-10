import { useState } from 'react';
import AuthorForm from './components/AuthorForm'; // Cambiar la importación del formulario de autor

function ListarCrearAutores() { // Cambiar el nombre del componente

    const [authors, setAuthors] = useState(null); // Cambiar el estado a "authors"

    const updateAuthors = (author) => { // Cambiar el nombre de la función de actualización del estado
        setAuthors([...authors, author]); // Actualiza la lista de autores
    };

    return (
        <div className='row'>
            
            <div className='col-4'>
                <h3 className='mt-5'>Ingreso de Autor</h3>
                <hr />
                <AuthorForm updateAuthors={updateAuthors} /> {/* Renderiza el formulario de autor */}
            </div>
        </div>
    );
}

export default ListarCrearAutores; // Cambia el exportado del componente
