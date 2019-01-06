// @flow

import { FILTER } from '../constants/ACTION_TYPE';

const initialState = {
  selectedCategory: 'Visi',
  allIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26'
  ],
  byId: {
    '0': {
      id: '0',
      title: 'Antiox+',
      slug: 'antiox',
      thumbText: 'Apsaugo nuo laisvųjų radikalų, lėtina senėjimo procesus, teigiamai veikia širdies ir kraujagyslių sistemą, stiprina imunitetą',
      articleFile: 'Antiox.js',
      imgFile: 'antiox.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '1': {
      id: '1',
      title: 'Detox+',
      slug: 'detox',
      thumbText: 'Organizmo valymas ląstelių lygmenyje, imuniteto stiprinimas, gamtinis antibiotikas',
      articleFile: 'Detox.js',
      imgFile: 'detox.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '2': {
      id: '2',
      title: 'Pax+ forte',
      slug: 'pax-forte',
      thumbText: 'Kasdienė apsauga nuo streso, dirglumo, nervingumo mažinimas, širdies veiklos ir ritmo normalizavimas',
      articleFile: 'PaxForte.js',
      imgFile: 'paxforte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '3': {
      id: '3',
      title: 'Sveltform+',
      slug: 'sveltform',
      thumbText: 'Normalizuoja medžiagų apykaitą, degina riebalus, mažina svorį, teigiamai veikia skydliaukės ir kasos darbą, mažina cholesterolio kiekį kraujyje',
      articleFile: 'Sveltform.js',
      imgFile: 'sveltform.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '4': {
      id: '4',
      title: 'Chromevital+',
      slug: 'chromevital',
      thumbText: 'Suteikia energijos kiekvienai ląstelei, mažina nuovargį, didina protinį ir fizinį darbingumą, saugo nervų sistemą, normalizuoja ir palaiko cukraus kiekį kraujyje',
      articleFile: 'Chromevital.js',
      imgFile: 'chromevital.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '5': {
      id: '5',
      title: 'CardioDrive',
      slug: 'cardio-drive',
      thumbText: 'Visapusė širdies sveikata',
      articleFile: 'CardioDrive.js',
      imgFile: 'cardiodrive.jpg',
      categories: ['Visi', 'Nauji']
    },
    '6': {
      id: '6',
      title: 'Mistik',
      slug: 'mistik',
      thumbText: 'Natūralūs ir nekenksmingi migdomieji, netolygaus miego ir naktinių košmarų šalinimas, miego kokybės gerinimas',
      articleFile: 'Mistik.js',
      imgFile: 'mistik.jpg',
      categories: ['Visi']
    },
    '7': {
      id: '7',
      title: 'Artemida+',
      slug: 'artemida',
      thumbText: 'Hormonų pusiausvyros ir menstruacinio ciklo normalizavimas, pagalba kritinėmis dienomis, libido didinimas',
      articleFile: 'Artemida.js',
      imgFile: 'artemida.jpg',
      categories: ['Visi', 'Moterims']
    },
    '8': {
      id: '8',
      title: 'Medisoya+',
      slug: 'medisoya',
      thumbText: 'Atitolina klimakso pradžią, palengvina jo simptomus, atkuria hormonų pusiausvyrą, padidina libido, apsaugo odą nuo senėjimo, neleidžia atsirasti osteoporozei',
      articleFile: 'Medisoya.js',
      imgFile: 'medisoya.jpg',
      categories: ['Visi', 'Moterims']
    },
    '9': {
      id: '9',
      title: 'Stalon Neo',
      slug: 'stalon-neo',
      thumbText: 'Pagalba esant potencijos sutrikimams',
      articleFile: 'StalonNeo.js',
      imgFile: 'stalonneo.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '10': {
      id: '10',
      title: 'Lamin',
      slug: 'lamin',
      thumbText: 'Vyrų energijos ir jėgų šaltinis',
      articleFile: 'Lamin.js',
      imgFile: 'lamin.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '11': {
      id: '11',
      title: 'Artum',
      slug: 'artum',
      thumbText: 'Prostatos sveikata, vyriškos jaunystės šaltinis, mažina impotencijos riziką, normalizuoja hormonų lygį, užkerta kelią prostatos adenomai',
      articleFile: 'Artum.js',
      imgFile: 'artum.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '12': {
      id: '12',
      title: 'Ursul',
      slug: 'ursul',
      thumbText: 'Priešuždegiminė priemonė vyrams ir moterims, neleidžia augti ir daugintis patogeninėms bakterijoms, virusams, grybeliams, mažina lytiniu keliu plintančių ligų riziką',
      articleFile: 'Ursul.js',
      imgFile: 'ursul.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '13': {
      id: '13',
      title: 'Cupers Neo',
      slug: 'cupers-neo',
      thumbText: 'Kepenų ląstelių apsauga, valymas ir atkūrimas, kepenų ir tulžies latakų ligų rizikos mažinimas, virškinimo sistemos normalizavimas',
      articleFile: 'CupersNeo.js',
      imgFile: 'cupersneo.jpg',
      categories: ['Visi']
    },
    '14': {
      id: '14',
      title: 'Junior Neo+',
      slug: 'junior-neo',
      thumbText: 'Geriausias vitaminų ir mineralų kompleksas vaikams, atitinka augančio, harmoningai besivystančio organizmo poreikius',
      articleFile: 'JuniorNeo.js',
      imgFile: 'juniorneo.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '15': {
      id: '15',
      title: 'Junior Be Strong',
      slug: 'junior-be-strong',
      thumbText: '',
      articleFile: 'JuniorBeStrong.js',
      imgFile: 'juniorbestrong.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '16': {
      id: '16',
      title: 'Junior Be Smart',
      slug: 'junior-be-smart',
      thumbText: 'Intelektinių gebėjimų padidinimas',
      articleFile: 'JuniorBeSmart.js',
      imgFile: 'juniorbesmart.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '17': {
      id: '17',
      title: 'Junior Be Healthy',
      slug: 'junior-be-healthy',
      thumbText: '',
      articleFile: 'JuniorBeHealthy.js',
      imgFile: 'juniorbehealthy.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '18': {
      id: '18',
      title: 'Di Guard Nano',
      slug: 'di-guard-nano',
      thumbText: 'Šalina sunkiuosius metalus ir toksinus, padeda apsaugoti nuo buitinės radiacijos, atkuria kepenų ląsteles, padeda apsinuodijus, suriša ir šalina alergenus, padeda įveikti pagirias',
      articleFile: 'DiGuardNano.js',
      imgFile: 'diguardnano.jpg',
      categories: ['Visi']
    },
    '19': {
      id: '19',
      title: 'VenoStrong',
      slug: 'veno-strong',
      thumbText: 'Kova su lėtiniu venų nepakankamumu',
      articleFile: 'VenoStrong.js',
      imgFile: 'venostrong.jpg',
      categories: ['Visi']
    },
    '20': {
      id: '20',
      title: 'EnjoyNT',
      slug: 'enjoy-nt',
      thumbText: 'Kompleksinė sąnarių apsauga – grąžina sąnariams judrumą ir lankstumą, padeda atstatyti pažeistą kremzlinį audinį sąnariuose ir stubure',
      articleFile: 'EnjoyNT.js',
      imgFile: 'enjoynt.jpg',
      categories: ['Visi']
    },
    '21': {
      id: '21',
      title: 'Lifepac Senior',
      slug: 'lifepac-senior',
      thumbText: 'Vitaminų ir mineralų kompleksas su probiotikais',
      articleFile: 'LifepacSenior.js',
      imgFile: 'lifepacsenior.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '22': {
      id: '22',
      title: 'OsteoSanum',
      slug: 'osteosanum',
      thumbText: 'Osteoporozės profilaktika, kaulų struktūros gerinimas, dantų, plaukų, nagų stiprinimas',
      articleFile: 'Osteosanum.js',
      imgFile: 'osteosanum.jpg',
      categories: ['Visi']
    },
    '23': {
      id: '23',
      title: 'Nutrimax+',
      slug: 'nutrimax',
      thumbText: 'Slopina uždegimus, palaiko ir normalizuoja inkstų, šlapimo pūslės ir lytinės sistemos veiklą, padeda pašalinti smėlį iš inkstų ir šlapimtakių, taip pat neleidžia jiems susidaryti',
      articleFile: 'Nutrimax.js',
      imgFile: 'nutrimax.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '24': {
      id: '24',
      title: 'Cheviton',
      slug: 'cheviton',
      thumbText: 'Išpuoselėti plaukai, stiprūs nagai, grožio vaistinėlė, vitaminų, amino rūgščių šaltinis',
      articleFile: 'Cheviton.js',
      imgFile: 'cheviton.jpg',
      categories: ['Visi', 'Direct Hit']
    },
    '25': {
      id: '25',
      title: 'Junior Be Big',
      slug: 'junior-be-big',
      thumbText: 'Kalcio šaltinis vaiko kaulams ir dantims stiprinti aktyvaus augimo laikotarpiu',
      articleFile: 'JuniorBeBig.js',
      imgFile: 'junior-be-big.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '26': {
      id: '26',
      title: 'Nortia',
      slug: 'nortia',
      thumbText: 'Moters sveikatos harmonija, psichoemocinis stabilimas, skydliaukės funkcijos normalizavimas, širdies ritmo, vainikinių širdies arterijų kraujotakos gerinimas',
      articleFile: 'Nortia.js',
      imgFile: 'nortia.jpg',
      categories: ['Visi', 'Moterims']
    }
  }
};

export default function productsReducer(state: Object = initialState, action: Object) {

  switch(action.type) {
    case FILTER: {
      return {
        ...state,
        selectedCategory: action.payload.category
      }
    }
  }

  return state;
}
