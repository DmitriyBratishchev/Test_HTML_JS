
(function () {
  console.log('hi');

  const content=[
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '10 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего. Проволока 1.0, электроды, пусковое и много-много чего. Проволока 1.0, электроды, пусковое и много-много чего.',
      price: '20 000.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '30 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      // price: '40 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '50 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '60 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '70 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '80 000 р.',
      voltage: '220В',
    },
    {
      img: 'img/svarochnyiy-apparat-77-768x768.jpg',
      name: 'Сварочный аппарат',
      informacion: 'Проволока 1.0, электроды, пусковое и много-много чего',
      price: '90 000 р.',
      voltage: '220В',
    },
  ];


  for (let i = 0; i < 6; i++){
 
    let item = document.createElement('li');
    item.classList.add('item');
    item.innerHTML = `<img class="foto" src="${content[i].img}" alt="">
    <p class="name">Сварочный аппарат</p>
    <p class="inform">${content[i].informacion}</p>
    <div class="use">
      <span class="price">${content[i].price}</span>
      <button class="btn">Заказать</button>
    </div>`;
  
    
    let list = document.querySelector('.list');
    list.append(item);

    if (!content[i].price) {
      let element = document.querySelectorAll('.price');
      element[i].classList.add('displayNone');
    }
    
  }

  let menu = document.getElementById('menu-first');

  menu.addEventListener('mouseenter', showSub, false);
  menu.addEventListener('mouseleave', hideSub, false);

  let elLv1 = document.getElementsByClassName('menu-item');
  for (let i = 0; i < elLv1.length; i++) {
    elLv1[i].addEventListener('mouseenter', showSub, false);
    elLv1[i].addEventListener('mouseleave', hideSub, false);
  }

  function showSub() {
    if(this.children.length > 1) {
      this.children[1].style.display = 'block';
    } else {
      return false;
    }
  }

  function hideSub() {
    if(this.children.length > 1) {
      this.children[1].style.display = 'none';
    } else {
      return false;
    }
  }

})();