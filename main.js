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