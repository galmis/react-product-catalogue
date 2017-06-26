// @flow

import React, {Component} from 'react';

import {Grid, Row} from 'react-bootstrap';

export default class Footer extends Component {

  render() {
    return (
      <footer className="color-footer">
        <div className="widget-area">
          <Grid>
            <Row>
              <div className="col-sm-6 col-md-4 widget">
                <div className="widget-title">
                  <h4>Kontaktai</h4>
                </div>
                <div className="contact-widget">
                  <div className="info">
                    <a href="tel:+37060023315"><i className="lnr lnr-phone-handset" /><span>++370 600 23315</span></a>
                  </div>
                  <div className="info">
                    <a href="mailto:vilmute1966@gmail.com"><i className="lnr lnr-envelope" /><span>vilmute1966@gmail.com</span></a>
                  </div>
                </div>
              </div>
            </Row>
          </Grid>
        </div>
      </footer>

    );
  }

}
