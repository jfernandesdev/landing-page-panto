import React from 'react';

import {Container} from './styles';

import ButtonMoreInfo from '../ButtonMoreInfo';

function SectionAbout() {
  return (
    <Container>
      <h2>Por que <br />nos escolher</h2>

      <div>
        <h3>Instalações de luxo</h3>
        <p>
          A vantagem de adquirir nossos produtos é que oferecemos um serviço confortável e instalações completas.
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </div>

      <div>
        <h3>Preço acessível</h3>
        <p>
          Produtos da mais alta qualidade a um preço acessível e ainda com as facilidades que só existem aqui.
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </div>

      <div>
        <h3>Muitas opções</h3>
        <p>
         São muitas opções exclusivas para que você possa escolher ao seu gosto. Você irá se encantar!
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </div>
    </Container>
  );
}

export default SectionAbout;
