const swiper1 = new Swiper('.services__swiper', {
    loop: true,
    pagination: {
      el: '.services__swiper-pagination',
    },
    navigation: {
      nextEl: '.services__swiper-button-next',
      prevEl: '.services__swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      757: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 4.5,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 4,
        spaceBetween: 20,
      }
    }
});
  
  const swiper2 = new Swiper('.cases__swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      757: {
        slidesPerView: 2,
        spaceBetween: 27,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
  });

  

  const swiper3 = new Swiper('.tarifs__items_mobile', {
    navigation: {
      nextEl: '.tarifs-button-next',
      prevEl: '.tarifs-button-prev',
    },
  });
  

document.querySelectorAll('.questions__item-trigger').forEach(item => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if(parent.classList.contains('questions__item_active')) {
            parent.classList.remove('questions__item_active');
        } else {
            document
                    .querySelectorAll('.questions__item')
                    .forEach(child => child.classList.remove('questions__item_active'));
            parent.classList.add('questions__item_active')
        }
    })
});
