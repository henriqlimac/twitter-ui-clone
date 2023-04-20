import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>

        <h1>Henrique Lima</h1>
        <h2>@henriqlimac</h2>

        <p>
          ETEC Maria Cristina Medeiros Student | Projects:
          <a href="https://github.com/henriqlimac"> @GitHub</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            São Paulo, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 8 de janeiro
          </li>
        </ul>

        <Followage>
          <span>
            <span>Seguindo</span>
            <strong> 120</strong>
          </span>
          <span>
            <strong>432</strong>
            <span> Seguidores</span>
          </span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
};

export default ProfilePage;
