// @flow

import React from 'react';

import { Jumbotron, Button, Grid } from 'react-bootstrap';

const jumboStyle = {
  //backgroundColor: 'white',
};

const HomeJumbo = (props: Object) => {

  return (
    <section>
      <div className="jumbotron rounded-jumbotron" style={jumboStyle}>
        <Grid>
          <h1>Vision</h1>
          <p>Naturalūs maisto papildai sveikatai, grožiui ir puikiai savijautai</p>

          <p><Button bsStyle="primary">Skaityti daugiau</Button></p>
        </Grid>
      </div>
    </section>
  );
};

export default HomeJumbo;
