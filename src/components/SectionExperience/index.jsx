import React from 'react';

import { Container, WrapperImage, ImageSection, Content } from './styles';

import ImageSectionExperience from '../../assets/images/experiences/banner-experience.jpg';

import TagSection from '../TagSection';
import SectionTitle from '../SectionTitle';
import ButtonMoreInfo from '../ButtonMoreInfo';

function SectionExperience() {
  return (
    <Container>

      <WrapperImage>
        <ImageSection image={ImageSectionExperience} />
      </WrapperImage>

      <Content>
        <TagSection>Experiências</TagSection>
        <SectionTitle>Proporcionamos-lhe a melhor experiência</SectionTitle>
        <p>Você não precisa se preocupar com o resultado porque todos esses interiores são feitos por pessoas que são profissionais em suas áreas com um estilo elegante e luxuoso e com materiais de qualidade premium</p>
        <ButtonMoreInfo toRedirect='#' />
      </Content>
    </Container>
  );
}

export default SectionExperience;