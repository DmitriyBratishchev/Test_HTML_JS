import {test} from './test.js';
import {generator2} from './generator2.js';
import {generator1} from './generator1.js';

(function() {

  let n = 7;

  // Минимально-достаточная функция для решения задачи генерации валидной строки из скобок
  
  let result = generator(n);
  test(result);
  
  function generator(n) {

    let bracketCouple = ["()", "[]", "{}"];
    let result = '';
  
    for (let i = 0; i < n; i++) {
  
      let position = randomNam(0, result.length);
      let simbol = randomNam(0, bracketCouple.length - 1)
  
      result = result.substring(0, position) + bracketCouple[simbol] + result.substr(position);
    }
  
    console.log('result: ', result);
    return result;
  }

  function randomNam(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  //Варианты решения. с использованием усложнений.

  let result1 = generator1(n);
  test(result1);

  let result2 = generator2(n);
  test(result2);
  test('{[](})(){{}[]}')


  
  

})()
