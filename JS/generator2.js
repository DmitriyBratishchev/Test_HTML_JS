import {randomNam} from './randomNam.js';
import {regularCouple} from './service.js';

export function generator2(n) {

  let result2 = '';

  for (let i = 0; i < n; i++) {

    let position = randomNam(0, result2.length);
    let simbol = randomNam(0, regularCouple.length - 1)

    result2 = result2.substring(0, position) + regularCouple[simbol] + result2.substr(position);
  }

  console.log('result2', result2);
  return result2;
}

