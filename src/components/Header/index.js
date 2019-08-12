import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';
import { Container, Content, Profile, SignOutButton } from './styles';
import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const profile = useSelector(state => state.user.profile);
  const dispatch = useDispatch();

  function handleSignOutClick() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <SignOutButton onClick={handleSignOutClick}>Sair</SignOutButton>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
