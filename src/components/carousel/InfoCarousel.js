// @flow

import React, { Component} from 'react';

import { Carousel, Image } from 'react-bootstrap';

export default class InfoCarousel extends Component {

  render() {

    return (
      <section>
        <Carousel>
          { this._renderItem() }
          { this._renderItem() }
          { this._renderItem() }
        </Carousel>
      </section>
    );
  }

  // bugas, nes neina padaryt item component, turiu renderint toj pacioj
  // klasej
  _renderItem() {
    return (
      <Carousel.Item>
        <Image width={9999999999} className='responsive' alt="900x500" src="https://react-bootstrap.github.io/assets/carousel.png"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

}
