// @flow

import request from 'browser-request';

function fetch(url: string, httpMethod: string = 'GET'): Promise<XMLHttpRequest> {

  // NOTE: wrapping this arround in a promise
  // because redux-saga doesn't work well callbacks
  // I could use redux-saga's eventChannel, but that is an over kill for this simple use
  // case
  return new Promise((resolve, reject) => {
    request({
        url,
        method: httpMethod,
        json: httpMethod !== 'HEAD'
      },
      (err, response, body) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      }
    );
  });
}

export {
  fetch
};
