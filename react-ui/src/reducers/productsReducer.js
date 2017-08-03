// @flow

import { FILTER } from '../constants/ACTION_TYPE';

const initialState = {
  selectedCategory: 'Visi',
  allIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
  byId: {
    '0': {
      id: '0',
      title: 'Antiox+',
      thumbText: '',
      articleFile: 'Antiox.js',
      imgFile: 'antiox.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '1': {
      id: '1',
      title: 'Detox+',
      thumbText: 'Imuniteto stiprinimui, organizmo išvalymui',
      articleFile: 'Detox.js',
      imgFile: 'detox.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '2': {
      id: '2',
      title: 'Pax+ forte',
      thumbText: 'Kasdieninė apsauga nuo streso',
      articleFile: 'PaxForte.js',
      imgFile: 'paxforte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '3': {
      id: '3',
      title: 'Sveltform+',
      thumbText: 'Kaip normalizuoti medžiagų apykaitą ir mažinti svorį?',
      articleFile: 'Sveltform.js',
      imgFile: 'sveltform.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '4': {
      id: '4',
      title: 'Chromevital+',
      thumbText: 'Energijos užtaisas kiekvienai ląstelei',
      articleFile: 'Chromevital.js',
      imgFile: 'chromevital.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '5': {
      id: '5',
      title: 'CardioDrive',
      thumbText: 'Visapusė širdies sveikata',
      articleFile: 'CardioDrive.js',
      imgFile: 'cardiodrive.jpg',
      categories: ['Visi', 'Nauji']
    },
    '6': {
      id: '6',
      title: 'Mistik',
      thumbText: 'Natūralūs ir nekenksmingi migdomieji',
      articleFile: 'Mistik.js',
      imgFile: 'mistik.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '7': {
      id: '7',
      title: 'Artemida+',
      thumbText: 'Hormonų pusiausvyros normalizavimas, pagalba kritinėmis dienomis',
      articleFile: 'Artemida.js',
      imgFile: 'artemida.jpg',
      categories: ['Visi', 'Moterims']
    },
    '8': {
      id: '8',
      title: 'Medisoya+',
      thumbText: 'Atitolina klimakso pradžią, palengvina jo simptomus',
      articleFile: 'Medisoya.js',
      imgFile: 'medisoya.jpg',
      categories: ['Visi', 'Moterims']
    },
    '9': {
      id: '9',
      title: 'Stalon Neo',
      thumbText: 'Pagalba esant potencijos sutrikimams',
      articleFile: 'StalonNeo.js',
      imgFile: 'stalonneo.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '10': {
      id: '10',
      title: 'Lamin',
      thumbText: 'Vyrų energijos ir jėgų šaltinis',
      articleFile: 'Lamin.js',
      imgFile: 'lamin.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '11': {
      id: '11',
      title: 'Artum',
      thumbText: 'Prostatos sveikata',
      articleFile: 'Artum.js',
      imgFile: 'artum.jpg',
      categories: ['Visi', 'Vyrams']
    },
    '12': {
      id: '12',
      title: 'Ursul',
      thumbText: 'Priešuždegiminė priemonė',
      articleFile: 'Ursul.js',
      imgFile: 'ursul.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '13': {
      id: '13',
      title: 'Cupers Neo',
      thumbText: 'Kepenų ląstelių apsauga, toksinų šalinimas',
      articleFile: 'CupersNeo.js',
      imgFile: 'cupersneo.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '14': {
      id: '14',
      title: 'Junior Neo+',
      thumbText: '',
      articleFile: 'JuniorNeo.js',
      imgFile: 'juniorneo.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '15': {
      id: '15',
      title: 'Junior Be Strong',
      thumbText: '',
      articleFile: 'JuniorBeStrong.js',
      imgFile: 'juniorbestrong.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '16': {
      id: '16',
      title: 'Junior Be Smart',
      thumbText: 'Intelektinių gebėjimų padidinimas',
      articleFile: 'JuniorBeSmart.js',
      imgFile: 'juniorbesmart.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '17': {
      id: '17',
      title: 'Junior Be Healthy',
      thumbText: '',
      articleFile: 'JuniorBeHealthy.js',
      imgFile: 'juniorbehealthy.jpg',
      categories: ['Visi', 'Vaikams']
    },
    '18': {
      id: '18',
      title: 'Beesk',
      thumbText: 'Greitas organizmo atstatymas',
      articleFile: 'Beesk.js',
      imgFile: 'beesk.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
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
