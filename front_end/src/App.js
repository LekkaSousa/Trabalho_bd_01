import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Listagem from './pages/Listagem';
import Cadastro from './pages/Cadastro';
import Edicao from './pages/Edicao';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Listagem />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/editar/:id" element={<Edicao />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;