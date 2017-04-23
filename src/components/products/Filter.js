// @flow

import React from 'react';

const Filter = (props: Object) => {
  debugger;

  const _onClick = (category: string) => {
    debugger;
    props.actions.filter(category);
  };

  const _renderCategory = (category: string) => {
    debugger;
    return (
      <li key={category}>
        <a onClick={_onClick.bind(this, category)} className={props.selectedCategory === category ? 'active' : ''}>
          {category}
        </a>
      </li>
    );
  };

  const _renderCategories = (categories: Array<string>) => {
    debugger;
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
