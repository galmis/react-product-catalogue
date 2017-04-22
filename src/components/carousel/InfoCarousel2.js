// @flow

import React from 'react';
import { Carousel } from 'react-bootstrap';

const InfoCarousel2 = (props: Object) => {

  return (
    <div id="header-sliders">
        {/* slider */}
        <div id="slider" className="carousel slide">
          <div className="carousel-inner">
            {/* slide 1 */}
            <div className="item active slide1 fashion">
              <div className="container">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-12 slider-content">
                      <h3 className="slide-title fadeInDown animated first"><span className="text-primary">in</span>Cart - Fashion</h3>
                      <p className="slide-text flipInX animated second">Quisque vitae tempor libero. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                      <a href="#categories" className="page-scroll btn btn-lg btn-primary-filled btn-pill fadeInUp animated third"><i className="lnr lnr-cart" /> <span>Shop Now</span></a>
                    </div>{/* slider-content */}
                  </div>{/* / row */}
                </div>{/* / carousel-caption */}
              </div>{/* / container */}
            </div>{/* / slide 1 */}
            {/* slide 2 */}
            <div className="item slide2 furniture">
              <div className="container">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-12 slider-content">
                      <h3 className="slide-title fadeInDown animated first"><span className="text-primary">in</span>Cart - Furniture</h3>
                      <p className="slide-text flipInX animated second">Vivamus facilisis sapien enim, eget lobortis ante faucibus vel. In hendrerit arcu eget arcu fringilla.</p>
                      <a href="index2.html" className="btn btn-lg btn-primary-filled btn-pill fadeInUp animated third"><i className="lnr lnr-store" /> <span>Visit Shop</span></a>
                    </div>{/* slider-content */}
                  </div>{/* / row */}
                </div>{/* / carousel-caption */}
              </div>{/* / container */}
            </div>{/* / slide 2 */}
            {/* slide 3 */}
            <div className="item slide3 art">
              <div className="container">
                <div className="carousel-caption">
                  <div className="row">
                    <div className="col-md-12 slider-content">
                      <h3 className="slide-title fadeInDown animated first"><span className="text-primary">in</span>Cart - Art</h3>
                      <p className="slide-text flipInX animated second">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus sapien libero.</p>
                      <a href="index3.html" className="btn btn-lg btn-primary-filled btn-pill fadeInUp animated third"><i className="lnr lnr-store" /> <span>Visit Shop</span></a>
                    </div>{/* slider-content */}
                  </div>{/* / row */}
                </div>{/* / carousel-caption */}
              </div>{/* / container */}
            </div>{/* / slide 3 */}
          </div>{/* /carousel-inner */}
          {/* controls */}
          <a className="left carousel-control" href="#slider" data-slide="prev"><span className="lnr lnr-chevron-left" /></a>
          <a className="right carousel-control" href="#slider" data-slide="next"><span className="lnr lnr-chevron-right" /></a>
          {/* / controls */}
        </div>
        {/* / slider*/}
      </div>
  );
};

export default InfoCarousel2;
