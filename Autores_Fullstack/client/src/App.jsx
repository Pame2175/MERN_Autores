import { Route, Routes } from 'react-router-dom';
import AuthorList from './AuthorList';
import AuthorDetails from './AuthorDetails';
import AuthorFormUpdate from './components/AuthorFormUpdate';
import AddAuthor from './AddAuthor';

const App = () => {
    return (
        <div className='container mt-3'>
            <h1>Autores</h1>
            
            <Routes>
                <Route path="/" element={<AuthorList />} />
                <Route path="/add" element={<AddAuthor />} />
                <Route path="/author/:id" element={<AuthorDetails />} />
                <Route path="/author/:id/edit" element={<AuthorFormUpdate />} />
            </Routes>
        </div>
    );
};

export default App;
