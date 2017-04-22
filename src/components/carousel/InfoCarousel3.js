// @flow

import React, { Component} from 'react';

import { Carousel, Image } from 'react-bootstrap';

export default class InfoCarousel3 extends Component {

  render() {

    return (
      <section>
        <div id='header-sliders'>
          <Carousel id='slider' indicators={false} prevIcon={this._renderArrowIcon('left')} nextIcon={this._renderArrowIcon('right')}>
            { this._renderItem(`slide1`) }
            { this._renderItem(`slide2`) }
            { this._renderItem(`slide3`) }
          </Carousel>
        </div>
      </section>
    );
  }

  _renderArrowIcon(direction: string) {
    return (
      <span className={'lnr lnr-chevron-' + direction} />
    );
  }

  // bugas, nes neina padaryt item component, turiu renderint toj pacioj
  // klasej
  _renderItem(itemId: string) {
    return (
      <Carousel.Item id={itemId}>
        <Carousel.Caption>
          <div className="slider-content">
            <h3 className="slide-title fadeInDown animated first"><span className="text-primary">in</span>Cart - Fashion</h3>
            <p className="slide-text flipInX animated second">Quisque vitae tempor libero. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
            <a href="#categories" className="page-scroll btn btn-lg btn-primary-filled btn-pill fadeInUp animated third"><i className="lnr lnr-cart" /> <span>Shop Now</span></a>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

}
