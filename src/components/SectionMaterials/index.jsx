import React from 'react';

import {Container, Content, GridImages, Image} from './styles';

import ImageMaterials1 from '../../assets/images/materials/banner-material-1.jpg';
import ImageMaterials2 from '../../assets/images/materials/banner-material-2.jpg';
import ImageMaterials3 from '../../assets/images/materials/banner-material-3.jpg';

import TagSection from '../TagSection';
import SectionTitle from '../SectionTitle';
import ButtonMoreInfo from '../ButtonMoreInfo';

function SectionMaterials() {
  return (
    <Container>
      <Content>
        <TagSection>Meterais</TagSection>
        <SectionTitle>Materiais muito sérios <br /> para fazer móveis</SectionTitle>
        <p>
          Porque a Panto leva muito a sério a concepção de móveis para o nosso
          ambiente, usando um capital muito caro e famoso, mas a um preço
          relativamente baixo.
        </p>
        <ButtonMoreInfo toRedirect='#' />
      </Content>

      <GridImages>
        <Image image={ImageMaterials1} />
        <Image image={ImageMaterials2} />
        <Image image={ImageMaterials3} />
      </GridImages>
    </Container>
  );
}

export default SectionMaterials;
