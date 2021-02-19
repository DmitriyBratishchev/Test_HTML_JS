import {bracketCouple} from './service.js';

export function test(result) {
  let prov = result;

  for (let s = 0; s < result.length; s++) {
    bracketCouple.forEach(elem => prov = prov.replace(elem, '')) ;
    if (!prov) {
      console.log(`Проверка окончена, строка ${result} валидна.`);
      break
    } 
  }
  if (prov) {
    console.log(`Строка ${result} не валидна, остаток ${prov}`);
  }
}