import React from 'react';

import { Star } from '../../styles/Icons';

import { WrapperStarRating } from './styles';

function StarRating({classification}) {
  return (
    <WrapperStarRating classification={classification}>
      {Array.from({length: 5}).map((_, index) => (
        <Star key={index} />
      ))}
    </WrapperStarRating>
  );
}

export default StarRating;
