import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { signUpRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.svg';

export default function SignUp() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é necessário.'),
    email: Yup.string()
      .email('Insira um email válido.')
      .required('O email é necessário.'),
    password: Yup.string().required('A senha é necessária.'),
  });
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password }) {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">
          {loading ? 'Carregando...' : 'Criar conta'}
        </button>
        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
