import React from 'react';

import { Link } from './styles';
import IconMoreInfo from '../../assets/images/icon-more-info.svg';

function ButtonMoreInfo({ toRedirect, viewAll}) {
  return (
    <Link href={toRedirect}>
      {viewAll ? 'Ver todos' : 'Ver mais'} 
     <img src={IconMoreInfo} />
  </Link>
  );
}

export default ButtonMoreInfo;