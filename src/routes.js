import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import DataGridColaborador from './components/DataGridColaborador';
import CadastroColaboradores from './pages/CadastroColaboradores';

import token from './data/token.json';
import ListagemColaboradoresCadastrados from './pages/ListagemColaboradoresCadastrados';
import NotFound from './pages/NotFound';
import Menu from './Menu';
import Footer from './components/Footer';
export default function AprecieRouter(){
  return(
    <Router> 
      <Menu/>
      <Routes>
        <Route path="/" element={<ListagemColaboradoresCadastrados/>} /> 
        <Route path="/cadastro" element={<CadastroColaboradores token={token}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}