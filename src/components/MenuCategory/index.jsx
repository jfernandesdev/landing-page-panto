import React, { useState } from 'react';
import { categoryProducts } from '../../utils/categoryProducts';

import { 
  CategoryMenu, 
  CategoryItem 
} from './styles';

function MenuCategory() {
  const [categorySelected, setCategorySelected] = useState('chair'); 
 
  const handleCategorySelected = (slug) => {
    setCategorySelected(slug);
  }

  return(
    <CategoryMenu>
      {categoryProducts.map(category => (
        <CategoryItem 
          active={category.slug === categorySelected ? true : false} 
          key={category.slug}
          onClick={() => handleCategorySelected(category.slug)}
        >
          {category.name}
        </CategoryItem>
      ))}
    </CategoryMenu>
  );
}

export default MenuCategory;