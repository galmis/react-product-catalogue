// @flow

import React from 'react';

import { Jumbotron, Button, Grid } from 'react-bootstrap';

const jumboStyle = {
  backgroundColor: 'white',
};

const HomeJumbo = (props: Object) => {

  return (
    <section>
      <Grid>
      <div className="jumbotron rounded-jumbotron" style={jumboStyle}>
        <h1>Vision</h1>
        <p>Naturalūs maisto papildai sveikatai, grožiui ir puikiai savijautai</p>

        <p><Button bsStyle="primary">Skaityti daugiau</Button></p>
      </div>
      </Grid>
    </section>
  );
};


// <p>&bdquo;Vision International People&ldquo; yra viena pirmaujančių pasaulinio tinklo bendruomenių, siekiančių skleisti gerovę pasaulyje. Kartu su mūsų unikalia virtualia DEM4 laboratorija ir prestiži&scaron;kiausiomis pasaulio įmonėmis tiekiame platų auk&scaron;tos kokybės, itin efektyvių ir natūralių sveikatos produktų asortimentą.</p>
// <p>DEM4 laboratorija, pasitelkdama savo technologijomis ir patirtimi, sujungė geriausius natūralios ir Ajurvedos medicinos elementus, todėl dabar gali pasiūlyti visapusės sveikatos apsaugos ir ligų prevencijos produktus.</p>
// <p>&Scaron;iandien Vision - tai daugiau nei 80 produktų vaikų, vyrų, moterų ir sportininkų sveikatai, grožiui bei ilgaamži&scaron;kumui.</p>
// <p>Efektyvumas įrodytas daugiau nei 140 000 teigiamais vartotojų atsiliepimais.</p>
// <p>Mūsų DEM4 laboratorija kartu su stambiausiais pasaulio universitetais ir mokslo centrais ie&scaron;ko naujų strategijų dėl produktų kokybės gerinimo. Pastoviai įsisaviname naujausias technologijas, priimame naujausius darbo metodus.</p>
// <p>Atliekama i&scaron;sami sertifikacija. Ekspertai įvertina kiekvieno produkto kokybę, remiantis tarptautiniais standartais.</p>

export default HomeJumbo;
