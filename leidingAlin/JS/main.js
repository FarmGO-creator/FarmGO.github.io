"use strict";

function btnAnchor() {
  var anchors = document.querySelectorAll('a[href*="#"]');
  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];
    anchor.addEventListener('click', function(ev) {
      ev.preventDefault();
      var anchorId = this.getAttribute('href');
      document.querySelector(anchorId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  };
}
btnAnchor();


function scrollReava() {
  ScrollReveal().reveal('.blocMain', {origin: 'left', scale: 0.85, distance: '200px', duration: 1000});
  ScrollReveal().reveal('.blocLink', {origin: 'right', scale: 0.85, distance: '200px', duration: 1000});
  ScrollReveal().reveal('.col-1-p', { duration: 2000 });
  ScrollReveal().reveal('.col-img', {delay: 400, distance: '200px'});
  ScrollReveal().reveal('.blocLinFot1, .blocLinFot2, .blocLinFot3', { interval: 300, duration: 1000, scale: 0.85 });
}
scrollReava();

function swiperSlid() {
  var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
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
    var toggle = document.querySelector('.toggle');
    var burMenu = document.querySelector('.burMenu');
    toggle.classList.toggle('active');
    burMenu.classList.toggle('active');
 }

 function mobolOcno() {
 	var mobol = document.querySelector('.mobolSection');
 	var btnMobolOk = document.querySelector('.btnMobolOk');
 	var close = document.querySelector('.close');

 	btnMobolOk.onclick = function() {
 		mobol.classList.add('active');
 	}

 	close.onclick = function() {
 		mobol.classList.remove('active');
 	}

 }
 mobolOcno();

 function getTimeOut() {
  var timeBloc = document.querySelector('.snackbar');
  timeBloc.classList.add('show');
  setTimeout(function() {
    timeBloc.classList.remove('show');
  }, 3000)
 }


function svgAnimater() {
  var nameSvg = ['milk', 'nameA', 'nameL', 'nameI', 'nameN', 'nameA-2'];
  for (var i = 0; i < nameSvg.length; i++) {
    function test() {
      var svgID = nameSvg[i];

      return new Vivus(
        svgID, {
          type: 'sync',
          duration: 200,
        }
      );
    }
    test();
  }
}
svgAnimater();

function loder() {
  var loder = document.querySelector('.loder');
  setTimeout(function() {
    loder.style.display = 'none'
  }, 1000)
  loder.classList.add('active');
}

setTimeout(loder, 3500);