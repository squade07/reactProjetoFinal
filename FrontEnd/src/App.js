import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import NavScroll from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import CadastroDoador from './components/pages/CadastroDoador';
import CadastroEscola from './components/pages/CadastroEscola';
import Doacoes from './components/pages/Doacoes';
import Login from './components/pages/Login';
import EncontrarEscola from './components/pages/EncontrarEscola';

function App() {
  return (
    <Router>
      <NavScroll/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cadastroDoador" element={<CadastroDoador/>}/>
        <Route path="/cadastroEscola" element={<CadastroEscola/>}/>
        <Route path="/doacoes" element={<Doacoes/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/encontrarEscola" element={<EncontrarEscola/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
