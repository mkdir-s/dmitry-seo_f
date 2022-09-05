const swiper = new Swiper('.services__swiper', {
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
  