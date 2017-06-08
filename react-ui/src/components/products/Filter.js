// @flow

import React from 'react';

const Filter = (props: Object) => {
  

  const _onClick = (category: string) => {
    
    props.actions.filter(category);
  };

  const _renderCategory = (category: string) => {
    
    return (
      <li key={category}>
        <a onClick={_onClick.bind(this, category)} className={props.selectedCategory === category ? 'active' : ''}>
          {category}
        </a>
      </li>
    );
  };

  const _renderCategories = (categories: Array<string>) => {
    
    const categoriesToRender = [];

    categories.forEach(category => {
      categoriesToRender.push(_renderCategory(category));
    });

    return categoriesToRender;
  };

  return (
    <div>
      <ul className="product-filter list-inline text-center">
        { _renderCategories(props.categories) }
      </ul>
    </div>
  );
};

export default Filter;
