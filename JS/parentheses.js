import {test} from './test.js';
import {generator2} from './generator2.js';
import {generator1} from './generator1.js';

(function() {

  let n = 7;

  let result1 = generator1(n);
  test(result1);

  let result2 = generator2(n);
  test(result2);
  

})()
