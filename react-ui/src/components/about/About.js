// @flow

import React from 'react';
import {Grid, Col, Row} from 'react-bootstrap';

import FancyHeader from '../shared/FancyHeader';

const About = (props: Object) => {

  return (
    <div>
      <FancyHeader title={'Apie mus'} />

      <Grid>
        <section id='about'>
          <Row>
            <p className='large-p'>&bdquo;Vision International People&ldquo; yra viena pirmaujančių pasaulinio tinklo bendruomenių, siekiančių skleisti gerovę pasaulyje. Kartu su mūsų unikalia virtualia DEM4 laboratorija ir prestiži&scaron;kiausiomis pasaulio įmonėmis tiekiame platų auk&scaron;tos kokybės, itin efektyvių ir natūralių sveikatos produktų asortimentą.</p>
            <p className='large-p'>DEM4 laboratorija, pasitelkdama savo technologijomis ir patirtimi, sujungė geriausius natūralios ir Ajurvedos medicinos elementus, todėl dabar gali pasiūlyti visapusės sveikatos apsaugos ir ligų prevencijos produktus.</p>
            <p className='large-p'>&Scaron;iandien Vision - tai daugiau nei 80 produktų vaikų, vyrų, moterų ir sportininkų sveikatai, grožiui bei ilgaamži&scaron;kumui.</p>
            <p className='large-p'>Efektyvumas įrodytas daugiau nei 140 000 teigiamais vartotojų atsiliepimais.</p>
            <p className='large-p'>Mūsų DEM4 laboratorija kartu su stambiausiais pasaulio universitetais ir mokslo centrais ie&scaron;ko naujų strategijų dėl produktų kokybės gerinimo. Pastoviai įsisaviname naujausias technologijas, priimame naujausius darbo metodus.</p>
            <p className='large-p'>Atliekama i&scaron;sami sertifikacija. Ekspertai įvertina kiekvieno produkto kokybę, remiantis tarptautiniais standartais.</p>
          </Row>

        </section>

      </Grid>

    </div>
  );
};

export default About;
