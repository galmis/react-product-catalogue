// @flow

const initialState = {
  allIds: ['0', '1', '2', '3', '4'],
  byId: {
    '0': {
      id: '0',
      title: 'Antiox',
      thumbText: 'Aha.. Antioxas gerai!',
      htmlText: '<p><script>alert("XSS attack MUHAHA!");</script> Valio Antiox! </p>'
    },
    '1': {
      id: '1',
      title: 'Detox',
      thumbText: 'Laba diena su vistiena',
      htmlText: '<p> Valio Detox! </p>'
    },
    '2': {
      id: '2',
      title: 'Pax Forte',
      thumbText: 'Liurbis Antanas',
      htmlText: '<p> Valio Pax! </p>'
    },
    '3': {
      id: '3',
      title: 'HeparD',
      thumbText: 'Gera diena...',
      htmlText: '<p> Valio HeparD! </p>'
    },
    '4': {
      id: '4',
      title: 'Cardio Drive',
      thumbText: 'Cardio vairavims... kon to?',
      htmlText: '<p> Valio Cardio! </p>'
    }
  }
};

// for now always returns initialState, but this might change
export default function productsReducer(state: Object = initialState, action: Object) {

  return state;
}
