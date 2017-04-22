// @flow

import React from 'react';

import ProductsThumbnails from './ProductsThumbnails';

const Products2 = (props: Object) => {
  debugger;
  return (
    <section id="shop">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 content-area">
              {/* product filter */}
              <ul className="product-filter list-inline text-center">
                <li><a href="#" data-group="all" className="active">Visi</a></li>
                <li><a href="#" data-group="bags" className>Vaikams</a></li>
                <li><a href="#" data-group="mens" className>Vyrams</a></li>
                <li><a href="#" data-group="womens" className>Moterims</a></li>
                <li><a href="#" data-group="shirt" className>Klasikiniai</a></li>
              </ul>
              {/* / product filter */}
              <ProductsThumbnails products={props.products}/>
            </div>{/* / content-area */}
          </div>{/* / row */}
        </div>{/* / container */}
      </section>

  );
};

export default Products2;
