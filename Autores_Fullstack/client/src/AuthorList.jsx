import { useState } from 'react';

import AuthorList from './components/AuthorList';

function ListarCrearAutores() {

    const [authors, setAuthors] = useState(null);

    const updateAuthors = (author) => {
        setAuthors([...authors, author]);
    };

    return (
        <div className='row'>
            <div className='col-8'>
                <h3 className='mt-5'>Listado de Autores</h3>
                <hr />
                <AuthorList authors={authors} setAuthors={setAuthors} />
            </div>
            
        </div>
    );
}

export default ListarCrearAutores;
