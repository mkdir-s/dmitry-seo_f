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
  