// @flow

const initialState = {
  allIds: ['0', '1', '2', '3', '4'],
  byId: {
    '0': {
      id: '0',
      title: 'Antiox',
      thumbText: 'Aha.. Antioxas gerai!',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg'
    },
    '1': {
      id: '1',
      title: 'Detox',
      thumbText: 'Laba diena su vistiena',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg'
    },
    '2': {
      id: '2',
      title: 'Pax Forte',
      thumbText: 'Liurbis Antanas',
      articleFile: 'PaxForte.js',
      imgFile: 'paxForte.jpg'
    },
    '3': {
      id: '3',
      title: 'HeparD',
      thumbText: 'Gera diena...',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg'
    },
    '4': {
      id: '4',
      title: 'Cardio Drive',
      thumbText: 'Cardio vairavims... kon to?',
      articleFile: 'Detox.js',
      imgFile: 'paxForte.jpg'
    }
  }
};

// for now always returns initialState, but this might change
export default function productsReducer(state: Object = initialState, action: Object) {

  return state;
}
