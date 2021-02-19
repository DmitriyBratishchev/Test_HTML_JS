
const b = '(){}[]<>';
export const openStr = b.split('').filter( pos => b.indexOf(pos) % 2 === 0 );
export const closeStr = b.split('').filter( pos => b.indexOf(pos) % 2 === 1 );
export const bracketCouple = [];
openStr.forEach((elem) => bracketCouple.push(`${openStr[openStr.indexOf(elem)]}` + `${closeStr[openStr.indexOf(elem)]}`));
