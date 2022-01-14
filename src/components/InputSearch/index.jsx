import React from 'react';

import ButtonIcon from '../ButtonIcon';
import { Search } from '../../styles/Icons';

import { 
  Form,  
  Input 
} from './styles';

function InputSearch() {
  return (
    <Form>
      <Input type='search' name="search" placeholder="Pesquisar móveis" />
      <ButtonIcon dark style={{background: `var(--orange-100)`}}>
        <Search />
      </ButtonIcon>
    </Form>
  );
}

export default InputSearch;