// @flow

import React, { Component} from 'react';
import { Link } from 'react-router';
import { Carousel, Image } from 'react-bootstrap';

export default class InfoCarousel extends Component {

  render() {

    return (
      <div id='header-sliders'>
        <Carousel id='slider' indicators={false} controls={false}>
          { this._renderItem(`slide1`) }
        </Carousel>
      </div>
    );
  }

  // NOTE: not used atm
  // add prevIcon={this._renderArrowIcon('left') and
  // nextIcon={this._renderArrowIcon('right')
  // to Carousel
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
            <h1 className="slide-title fadeInDown animated first">Vision</h1>
            <p className="slide-text flipInX animated second">Naturalūs maisto papildai sveikatai, grožiui ir puikiai savijautai</p>
            <Link to='apiemus' href="#categories" className="page-scroll btn btn-lg btn-primary-filled btn-pill fadeInUp animated third"><i className="fa fa-info-circle" /> <span>Skaityti daugiau</span></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

}
