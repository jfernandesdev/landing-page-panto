import React from 'react';

import { Container, Wrapper, Subtitle } from './styles';

import SectionTitle from '../SectionTitle';
import ButtonMoreInfo from '../ButtonMoreInfo';

function SectionAbout() {
  return (
    <Container>
      <SectionTitle>Por que <br />nos escolher</SectionTitle>

      <Wrapper>
        <Subtitle>Instalações de luxo</Subtitle>
        <p>
          A vantagem de adquirir nossos produtos é que oferecemos um serviço confortável e instalações completas.
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </Wrapper>

      <Wrapper>
        <Subtitle>Preço acessível</Subtitle>
        <p>
          Produtos da mais alta qualidade a um preço acessível e ainda com as facilidades que só existem aqui.
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </Wrapper>

      <Wrapper>
        <Subtitle>Muitas opções</Subtitle>
        <p>
         São muitas opções exclusivas para que você possa escolher ao seu gosto. Você irá se encantar!
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </Wrapper>
    </Container>
  );
}

export default SectionAbout;
