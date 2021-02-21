(function () {
  VANTA.NET({
  el: "#countBloc",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x17a7d4,
  backgroundColor: 0x181818
})
})()

function btnAnchor() {
  const anchors = document.querySelectorAll('a[href*="#"]');
  for (anchor of anchors) {
    anchor.addEventListener('click', function(event) {
      event.preventDefault();
      anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };
}
btnAnchor();

function scrollReava() {
  ScrollReveal().reveal('.bloc-1-img', {delay: 400, distance: '200px'});
  ScrollReveal().reveal('.blocMain', {origin: 'left', distance: '200px', duration: 1000});
  ScrollReveal().reveal('.blocLink', {origin: 'right', distance: '200px', duration: 1000});
  ScrollReveal().reveal('.col-1-p', { duration: 2000 });
  ScrollReveal().reveal('.col-img', {delay: 400, distance: '200px'});
  ScrollReveal().reveal('.blocLinFot1, .blocLinFot2, .blocLinFot3', { interval: 300, duration: 1000 });
}
scrollReava();

function swiperSlid() {
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
swiperSlid();

  function toggle() {
    const toggle = document.querySelector('.toggle');
    const burMenu = document.querySelector('.burMenu');
    toggle.classList.toggle('active');
    burMenu.classList.toggle('active');
  }