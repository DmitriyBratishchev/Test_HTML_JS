import {regularCouple} from './service.js';

export function test(result) {
  let prov = result;

  for (let s = 0; s < result.length; s++) {
    regularCouple.forEach(elem => prov = prov.replace(elem, '')) ;
    console.log('step ', s, prov);
    if (!prov) {
      console.log(`Проверка окончена, строка ${result} валидна.`);
      break
    } 
    
    
  }
  if (prov) {
    console.log(`Строка ${result} не валидна, остаток ${prov}`);
  }
}