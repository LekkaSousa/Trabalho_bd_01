import React, { useState } from 'react';
import api from '../services/api';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Form = styled.form`
  padding: 2rem;
  max-width: 400px;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
`;

function Cadastro() {
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);  
    try {
     
      await api.post('/usuarios', {
        nome: form.nome,
        email: form.email,
        senha: form.senha,
      });//envia os dados?

      alert('Usuário criado com sucesso!');
      navigate('/');  //volta pra pagina inicial
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário');
    }
};

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Cadastrar Usuário</h2>
      <Input name="nome" placeholder="Nome" onChange={handleChange} />
      <Input name="email" placeholder="Email" type="email" onChange={handleChange} />
      <Input name="senha" placeholder="Senha" type="password" onChange={handleChange} />
      <Button type="submit">Salvar</Button>
    </Form>
  );
}

export default Cadastro;