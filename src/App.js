import './App.css';
// Importamos los componentes
import Show from './components/Show';
import Edit from './components/Edit';
import Create from './components/Create';
import CreateRh from './components/CreateRh';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Rh from './components/rh';
import Pdf from './components/Pdf'
import Pdf2 from './components/Pdf2'
import Restaurante from './components/Restaurante'


// Importamos el router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/show' element={ <Show /> }/>
          <Route path='/rh' element={ <Rh /> }/>
          <Route path='/restaurante' element={ <Restaurante /> }/>
          <Route path='/pdf' element={ <Pdf /> }/>
          <Route path='/pdfFood' element={ <Pdf2 /> }/>
          <Route path='/' element={ <Home /> }/>
          <Route path='/create' element={ <Create /> }/>
          <Route path='/createRh' element={ <CreateRh /> }/>
          <Route path='/edit/:id' element={ <Edit /> }/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
