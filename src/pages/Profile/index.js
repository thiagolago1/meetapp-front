import React from 'react';
import { MdAddCircleOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { updateProfileRequest } from '~/store/modules/user/actions';
import { Container } from './styles';

export default function Profile() {
  const schema = Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),
    email: Yup.string()
      .email('Insira um email válido.')
      .required('O email é obrigatório'),
    password: Yup.string(),
    newPassword: Yup.string().when('password', (password, fieldSchema) => {
      return password
        ? fieldSchema
            .min(6, 'A senha deve conter no mínimo 6 caracteres.')
            .required('A nova senha é obrigatória')
        : fieldSchema;
    }),
    confirmationPassword: Yup.string().when(
      'password',
      (password, fieldSchema) => {
        return password
          ? fieldSchema
              .min(6, 'A senha deve conter no mínimo 6 caracteres.')
              .oneOf([Yup.ref('newPassword')], 'A senha não é a mesma.')
              .required('Insira a nova senha novamente para confirmar.')
          : fieldSchema;
      }
    ),
  });

  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  function handleEditButtonClick(data) {
    console.tron.log(data);
    dispatch(updateProfileRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleEditButtonClick} initialData={user} schema={schema}>
        <Input name="name" placeholder="Seu nome completo" />
        <Input name="email" type="email" placeholder="Seu endereço de e-mail" />
        <hr />

        <Input name="password" type="password" placeholder="Senha atual" />
        <Input name="newPassword" type="password" placeholder="Nova senha" />
        <Input
          name="confirmationPassword"
          type="password"
          placeholder="Confirmação de senha"
        />
        <button type="submit">
          <MdAddCircleOutline />
          Salvar perfil
        </button>
      </Form>
    </Container>
  );
}
