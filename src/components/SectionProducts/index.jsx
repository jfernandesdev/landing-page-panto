import React from 'react';

import SectionTitle from '../SectionTitle';
import MenuCategory from '../MenuCategory';
import ProductCard from '../ProductCard';
import ButtonMoreInfo from '../ButtonMoreInfo';
import ButtonIcon from '../ButtonIcon';

import {ArrowLeft, ArrowRight} from '../../styles/Icons';
import {Container, WrapperCarousel} from './styles';

import {listProducts} from '../../utils/listProducts';

import Carousel from 'react-grid-carousel';

function SectionProducts() {
  return (
    <Container>
      <SectionTitle>Produtos mais vendidos</SectionTitle>
      <MenuCategory />

      <WrapperCarousel>
        <Carousel 
        cols={4}  
        gap={10} 
        loop
        >
          {listProducts.map((product, index) => (
            <Carousel.Item key={index}>
              <ProductCard product={product} />
            </Carousel.Item>
          ))}
        </Carousel>
      </WrapperCarousel>

      <ButtonMoreInfo toRedirect='#' viewAll />
    </Container>
  );
}

export default SectionProducts;
