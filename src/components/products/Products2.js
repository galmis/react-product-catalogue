// @flow

import React from 'react';

import ProductsThumbnails from './ProductsThumbnails';
import FilterContainer from './FilterContainer';

const Products2 = (props: Object) => {
  debugger;
  return (
    <section id="shop">
        <div className="container">
          <div className="page-header text-center wsub">
            <h2>Produktai</h2>
          </div>

          <div className="row">
            <div className="col-sm-12 content-area">
              <FilterContainer />
              <ProductsThumbnails products={props.products}/>
            </div>{/* / content-area */}
          </div>{/* / row */}
        </div>{/* / container */}
    </section>
  );
};

export default Products2;
