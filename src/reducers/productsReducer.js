// @flow

import ACTION_TYPE from '../constants/ACTION_TYPE';

const initialState = {
  selectedCategory: 'Visi',
  allIds: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
  byId: {
    '0': {
      id: '0',
      title: 'Antiox',
      thumbText: 'Aha.. Antioxas gerai!',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '1': {
      id: '1',
      title: 'Detox',
      thumbText: 'Laba diena su vistiena',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '2': {
      id: '2',
      title: 'Pax Forte',
      thumbText: 'Liurbis Antanas',
      articleFile: 'PaxForte.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '3': {
      id: '3',
      title: 'HeparD',
      thumbText: 'Gera diena...',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nauji']
    },
    '4': {
      id: '4',
      title: 'Cardio Drive',
      thumbText: 'Cardio vairavims... kon to?',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nauji']
    },
    '5': {
      id: '5',
      title: 'Mistik',
      thumbText: 'Padies ismeguote',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nuo streso']
    },
    '6': {
      id: '6',
      title: 'Kuperis',
      thumbText: 'Aha.. Kuperis gerai!',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nauji']
    },
    '7': {
      id: '7',
      title: 'Lifepack',
      thumbText: 'Laba diena su vistiena',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '8': {
      id: '8',
      title: 'Nutrimax',
      thumbText: 'Liurbis Antanas',
      articleFile: 'PaxForte.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Klasikiniai']
    },
    '9': {
      id: '9',
      title: 'Shetons',
      thumbText: 'Gera diena...',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nauji']
    },
    '10': {
      id: '10',
      title: 'Venostrong',
      thumbText: 'Kon to?',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nauji']
    },
    '11': {
      id: '11',
      title: 'Passilat',
      thumbText: 'Irgi padies ismeguote',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg',
      categories: ['Visi', 'Nuo streso']
    }
  }
};

export default function productsReducer(state: Object = initialState, action: Object) {
  debugger;
  switch(action.type) {
    case ACTION_TYPE.FILTER: {
      return {
        ...state,
        selectedCategory: action.payload.category
      }
    }
  }

  return state;
}
