import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';
import logo from '../../assets/logo.svg';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um email válido.')
      .required('O email é necessário.'),
    password: Yup.string().required('A senha é necessária.'),
  });
  const loading = useSelector(state => state.auth.loading);
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="MeetApp logo" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
