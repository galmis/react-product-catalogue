// @flow

import { FILTER } from '../constants/ACTION_TYPE';

const initialState = {
  selectedCategory: 'Visi',
  allIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
  byId: {
    '0': {
      id: '0',
      title: 'Antiox+',
      thumbText: '',
      articleFile: 'Antiox.js',
      imgFile: 'antiox-crop.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '1': {
      id: '1',
      title: 'Detox+',
      thumbText: 'Imuniteto stiprinimui, organizmo išvalymui',
      articleFile: 'Detox.js',
      imgFile: 'detox-crop.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '2': {
      id: '2',
      title: 'Pax+ forte',
      thumbText: 'Kasdieninė apsauga nuo streso',
      articleFile: 'PaxForte.js',
      imgFile: 'pax-forte-crop.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '3': {
      id: '3',
      title: 'Sveltform+',
      thumbText: 'Kaip normalizuoti medžiagų apykaitą ir mažinti svorį?',
      articleFile: 'Sveltform.js',
      imgFile: 'sveltform-crop.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '4': {
      id: '4',
      title: 'Chromevital+',
      thumbText: 'Energijos užtaisas kiekvienai ląstelei',
      articleFile: 'Chromevital.js',
      imgFile: 'chromevital-crop.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '5': {
      id: '5',
      title: 'CardioDrive',
      thumbText: 'Visapusė širdies sveikata',
      articleFile: 'CardioDrive.js',
      imgFile: 'cardio-drive-crop.jpg',
      categories: ['Visi', 'Nauji']
    },
    '6': {
      id: '6',
      title: 'Mistik',
      thumbText: 'Natūralūs ir nekenksmingi migdomieji',
      articleFile: 'Mistik.js',
      imgFile: 'cardio-drive-crop.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '7': {
      id: '7',
      title: 'Artemida+',
      thumbText: 'Hormonų pusiausvyros normalizavimas, pagalba kritinėmis dienomis',
      articleFile: 'Artemida.js',
      imgFile: 'cardio-drive-crop.jpg',
      categories: ['Visi', 'Moterims']
    },
    '8': {
      id: '8',
      title: 'Medisoya+',
      thumbText: 'Atitolina klimakso pradžią, palengvina jo simptomus',
      articleFile: 'Medisoya.js',
      imgFile: 'cardio-drive-crop.jpg',
      categories: ['Visi', 'Moterims']
    },
    '9': {
      id: '9',
      title: 'Stalon Neo',
      thumbText: 'Pagalba esant potencijos sutrikimams',
      articleFile: 'StalonNeo.js',
      imgFile: 'cardio-drive-crop.jpg',
      categories: ['Visi', 'Vyrams']
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
