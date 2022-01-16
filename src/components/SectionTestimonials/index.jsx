import React from 'react';

import TagSection from '../TagSection';
import SectionTitle from '../SectionTitle';
import TestimonyCard from '../TestimonyCard';

import {Container, WrapperCarousel} from './styles';

import {listTestimonials} from '../../utils/listTestimonials';

import Carousel from 'react-grid-carousel';

function SectionTestimonials() {
  return (
    <Container>
      <TagSection>Depoimentos</TagSection>
      <SectionTitle>Comentários de nossos clientes</SectionTitle>
     
      <WrapperCarousel>
        <Carousel 
        cols={3}  
        gap={10} 
        loop
        >
          {listTestimonials.map((testimony, index) => (
            <Carousel.Item key={index}>
              <TestimonyCard testimony={testimony} />
            </Carousel.Item>
          ))}
        </Carousel>
      </WrapperCarousel>
    </Container>
  );
}

export default SectionTestimonials;
