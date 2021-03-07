function vantaJS() {
  VANTA.NET({
  el: "#countBloc",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
  color: 0x76e69f,
  backgroundColor: 0x202020,
  maxDistance: 14.00,
  spacing: 19.00
})
}
vantaJS();

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
    const toggle = document.querySelector('.toggle');
    const burMenu = document.querySelector('.burMenu');
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

 (function() {
   var i = 0;
   var txt = '0(555) 11-11-00';

   function printText() {
     var htmlText = document.getElementById('htmlText').innerHTML += txt.charAt(i);
     i++;
     setTimeout(printText, 100);
   }

   setInterval(printText, 1000);
 })()


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