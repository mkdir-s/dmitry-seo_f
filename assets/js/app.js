const swiper1 = new Swiper('.services__swiper', {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: '.services__swiper-pagination',
    },
    navigation: {
      nextEl: '.services__swiper-button-next',
      prevEl: '.services__swiper-button-prev',
    },
  });
  
  const swiper2 = new Swiper('.cases__swiper', {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 27,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
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
