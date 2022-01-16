import React from 'react';

import StarRating from '../StarRating';

import {
  CardImage,
  CardContent,
  Avatar,
  Title,
  Subtitle,
  Description
} from './styles';

function TestimonyCard({testimony}) {
  return (
    <CardImage image={testimony.productPhoto}>
      <CardContent>
        <Avatar src={testimony.userImage} />
        <Title>{testimony.name}</Title>
        <Subtitle>{testimony.profession}</Subtitle>
        <Description>"{testimony.description}"</Description>
        <StarRating classification={testimony.starRating} />
      </CardContent>
    </CardImage>
  );
}

export default TestimonyCard;
