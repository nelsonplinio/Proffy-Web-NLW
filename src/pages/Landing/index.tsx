import React from 'react';

import {
  Container,
  LandingContent,
  LogoContainer,
  HeroImage,
  ButtonsContainer,
  StudyButton,
  GiveClassesButton,
  TotalConnectionsText,
} from './styles';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <LandingContent>
        <LogoContainer>
          <img src={logoImg} alt="proffy" />
          <h2>Sua Plataforma de estudos online.</h2>
        </LogoContainer>

        <HeroImage src={landingImg} alt="plataforma de estudos" />

        <ButtonsContainer>
          <StudyButton href="">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </StudyButton>

          <GiveClassesButton href="">
            <img src={giveClassesIcon} alt="Dar aulas" />
            Dar aulas
          </GiveClassesButton>
        </ButtonsContainer>

        <TotalConnectionsText>
          Total de 200 conexões já realizadas
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </TotalConnectionsText>
      </LandingContent>
    </Container>
  );
};

export { Landing };
