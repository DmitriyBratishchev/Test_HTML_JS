import {randomNam} from './randomNam.js';
import {openStr} from './service.js';
import {closeStr} from './service.js';
import {bracketCouple} from './service.js';

let sumOpen = 0;
let result = '';

export function generator1(n) {

    
  for (let i = 0; i < n*2; i++) {

    if ( sumOpen < n ) {
      result += (randomNam(0,1)) ? openFn() : closeFn(i);  
    } else {
      result += closeFn(i)
    }
  }

  console.log('result1', result);
  return result;
}


function closeFn(i) {

  let prov = result;

  for (let s = 0; s < i; s++) {
    bracketCouple.forEach(elem => prov = prov.replace(elem, '')) ;
    if (!prov) {
      break
    }
  }

  if (openStr.includes(prov[prov.length-1])) {
    return closeStr[openStr.indexOf(prov[prov.length-1])];
  } else {
    return openFn();
  }
}

function openFn() {
  sumOpen++ ;
  return openStr[randomNam(0, openStr.length - 1)];
}