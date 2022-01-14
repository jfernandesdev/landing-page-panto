import React from 'react';

import { Link } from './styles';
import IconMoreInfo from '../../assets/images/icon-more-info.svg';

function ButtonMoreInfo({ toRedirect}) {
  return (
    <Link href={toRedirect}>
      Ver mais 
     <img src={IconMoreInfo} />
  </Link>
  );
}

export default ButtonMoreInfo;