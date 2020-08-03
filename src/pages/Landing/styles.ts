import styled from 'styled-components';
import { Container as DefaultContent } from '../../components/Container';

interface ButtonLinkProps {
  studyButton?: boolean;
  giveClassesButton?: boolean;
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colorTextInPrimary};
  background: ${({ theme }) => theme.colorPrimary};
`;

export const LandingContent = styled(DefaultContent)`
  @media (min-width: 1100px) {
    max-width: 1100px !important;
    display: grid;
    grid-template-rows: 350px 1fr;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-areas:
      'logo hero hero'
      'buttons buttons total';
  }
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin-bottom: 3.2rem;

  img {
    height: 10rem;
  }

  h2 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 4.6rem;
  }

  @media (min-width: 1100px) {
    grid-area: logo;
    align-self: center;
    margin: 0;
    text-align: left;
    img {
      height: 100%;
    }

    h2 {
      text-align: initial;
      font-size: 3.6rem;
    }
  }
`;

export const HeroImage = styled.img`
  width: 100%;

  @media (min-width: 1100px) {
    grid-area: hero;
    justify-self: end;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3.2rem 0;

  @media (min-width: 1100px) {
    grid-area: buttons;
    justify-content: flex-start;
  }
`;

export const ButtonLink = styled.a<ButtonLinkProps>`
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;

  font: 700 2rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${({ theme }) => theme.colorButtonText};

  transition: background 0.3s;

  & + a {
    margin-left: 1.6rem;
  }

  img {
    margin-right: 2rem;
    width: 4rem;
  }

  @media (min-width: 1100px) {
    font-size: 2.5rem;
  }
`;

export const StudyButton = styled(ButtonLink)`
  background: ${({ theme }) => theme.colorPrimaryLighter};

  &:hover {
    background: ${({ theme }) => theme.colorPrimaryLight};
  }
`;

export const GiveClassesButton = styled(ButtonLink)`
  background: ${({ theme }) => theme.colorSecundary};

  &:hover {
    background: ${({ theme }) => theme.colorSecundaryDark};
  }
`;

export const TotalConnectionsText = styled.div`
  font-size: 1.4rem;

  display: flex;
  align-items: center;

  justify-content: center;

  img {
    margin-left: 0.8rem;
  }

  @media (min-width: 1100px) {
    grid-area: total;
  }
`;
