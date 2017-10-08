// @flow

import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';
import {Helmet} from "react-helmet";

import FancyHeader from '../shared/FancyHeader';

const About = (props: Object) => {

  return (
    <div>
      <Helmet>
        <title>Sveika gyvensena ir populiarūs sveikatos produktai | bukitesveiki.lt</title>
      </Helmet>
      <FancyHeader title={'Apie mus'} />
      <Grid>
        <section className='animated fadeIn' id='about'>
          <Row>
            <ul className='list-featured'>
              <li>Puslapyje rašoma apie sveiką gyvenseną, populiarius sveikatos produktus.</li>
              <li>Patariame kaip sveikai maitintis, kad būtume sveiki ir gražūs, kaip stiprinti imuninę sistemą natūraliomis priemonėmis.</li>
              <li>Supažindiname su naujausiais mokslo išradimais.</li>
              <li>Siūlome platų asortimentą aukščiausios kokybės, efektyvius, natūralius visapusės sveikatos apsaugos ir ligų prevencijos produktus.</li>
              <li>Informuojame apie renginius, sveikatos diagnostiką.</li>
              <li>Teikiame konsultacijas.</li>
              <li>Dalinamės sveikatos rezultatais.</li>
              <li>Ir svarbiausia, mokome žmones, kaip rūpintis savimi ir savo grožiu ir iš to gauti naudos sau! Kaip pradėti savo asmeninį verslą!</li>
            </ul>
          </Row>

        </section>

      </Grid>

    </div>
  );
};

export default About;
