import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import styled from 'styled-components';

const Form = styled.form`
  padding: 2rem;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
`;

const Button = styled.button`
  padding: 0.5rem;
`;

function Edicao() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: '', email: '', senha: '' });

  useEffect(() => {
    api.get(`/usuarios/${id}`).then((res) => {
      setForm(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.put(`/usuarios/${id}`, form).then(() => navigate('/'));
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Editar Aventureiro</h2>
      <Input name="nome" value={form.nome} onChange={handleChange} />
      <Input name="email" value={form.email} onChange={handleChange} />
      <Input name="senha" type="password" value={form.senha} onChange={handleChange} />
      <Button type="submit">Atualizar</Button>
    </Form>
  );
}

export default Edicao;