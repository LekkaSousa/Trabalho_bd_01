import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  text-align: left; 

`;
const Acoes = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  background-color:rgb(66, 85, 67); /* Cor verde */
  border: none;
  color: white;
  padding: 7px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  
  &:hover {
    background-color:rgb(58, 122, 58);
  }
`;

function Listagem() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    api.get('/usuarios/').then((res) => {
      setUsuarios(res.data);
    });
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`);
      setUsuarios(prev => prev.filter(user => user.id !== id));
    } catch (err) {
      console.error("Erro ao deletar usuário:", err);
    }
  };

  return (
    <Container>
      <h2>Usuários</h2>
      <Link to="/cadastro">
        <Button>Cadastrar Novo Usuário</Button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.nome}</td>
              <td>{user.email}</td>
              <td>
                <Acoes>
                  <Link to={`/editar/${user.id}`}>Editar</Link>
                  <button onClick={() => handleDelete(user.id)}>Deletar</button>
                </Acoes>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default Listagem;