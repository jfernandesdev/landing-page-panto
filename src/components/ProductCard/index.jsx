import React from 'react';
import {Star, Plus} from '../../styles/Icons';
import ButtonIcon from '../ButtonIcon';

import {
  Card,
  CardHeader,
  ImageProduct,
  CardBody,
  TagCategory,
  TitleProduct,
  StarRating,
  Price
} from './styles';

import {categoryProducts} from '../../utils/categoryProducts';

function ProductCard({product}) {
  const categoryName = categoryProducts.find(
    category => category.slug === product.category
  );

  return (
    <Card>
      <CardHeader>
        <ImageProduct image={product.image} />
      </CardHeader>

      <CardBody>
        <TagCategory>{categoryName?.name}</TagCategory>

        <TitleProduct>{product.name}</TitleProduct>

        <StarRating classification={product.starRating}>
          {Array.from({length: 5}).map((_, index) => (
            <Star key={index} />
          ))}
        </StarRating>

        <Price>
          <span>R$</span> {product.price}
        </Price>

        <ButtonIcon dark onClick={() => alert(`ID: ` + product.id)}>
          <Plus />
        </ButtonIcon>
      </CardBody>
    </Card>
  );
}

export default ProductCard;
