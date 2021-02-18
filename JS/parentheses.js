
(function() {

  const b = '(){}[]<>ЕЭ';
  const openStr = b.split('').filter( pos => b.indexOf(pos) % 2 === 0 );
  const closeStr = b.split('').filter( pos => b.indexOf(pos) % 2 === 1 );
  const reg = [];
  openStr.forEach((elem) => reg.push(`${openStr[openStr.indexOf(elem)]}` + `${closeStr[openStr.indexOf(elem)]}`));

  let n = 30;
  let result = '';
  generator(n);

  function generator(n) {
    

    for (let i = 0; i < n*2; i++) {
      if(i < n){
        result += (randomNam(0,1)) ? openFn() : closeFn(i);  
      } else {
        result += closeFn(i)
      }
    }

    console.log('result', result);
    test();
  }


  function closeFn(i) {

    let prov = result;

    for (let s = 0; s < i; s++) {
      reg.forEach(elem => prov = prov.replace(elem, '')) ;
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
    return openStr[randomNam(0, openStr.length - 1)];
  }

  function randomNam(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

  function test() {
    let prov = result;

    for (let s = 0; s < result.length; s++) {
      reg.forEach(elem => prov = prov.replace(elem, '')) ;
      if (!prov) {
        console.log(`Проверка окончена, строка ${result} валидна.`);
        break
      }
      console.log('step ', s, prov);
    }
  }

})()
