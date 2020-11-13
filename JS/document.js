	function toggle(){
	const toggle = document.querySelector('.toggle');
	const BurgerMenu = document.querySelector('.BurgerMenu')
	toggle.classList.toggle('active');
    BurgerMenu.classList.toggle('active');
 }

$(document).ready(function() {

	window.onload = function () {

		document.body.classList.add('loaded_hiding');

		window.setTimeout(function () {

			document.body.classList.add('loaded');
			document.body.classList.remove('loaded_hiding');

		}, 500);
	};

	let progress = document.getElementById('progressbar');
	let totalHeight = document.body.scrollHeight -
	window.innerHeight;
		
	window.onscroll = function(){
	let progressHeight =(window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
};

	let slides = document.querySelectorAll('#slides .slide');
 	let toggleSlid = 0;
 	let slideInterval = setInterval(nextSlide,3000);
 	function nextSlide() {
 		slides[toggleSlid].className = 'slide';
 		toggleSlid = (toggleSlid+1)%slides.length;
 		slides[toggleSlid].className = 'slide showing';
 	};

	const tabsBtn = document.querySelectorAll('.tabs__nav-btn');
	const tabsItems = document.querySelectorAll('.tabs__item');

	tabsBtn.forEach(cliceid);

	function cliceid(item) {

      item.addEventListener('click', function() {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute('data-tab');
        let currentTab = document.querySelector(tabId);

        if ( ! currentBtn.classList.contains('active')) {

        tabsBtn.forEach(function(item) {
            item.classList.remove('active');
        });

        tabsItems.forEach(function(item) {
            item.classList.remove('active');
        })

        currentBtn.classList.add('active');
        currentTab.classList.add('active');

        }

    })
 document.querySelector('.tabs__nav-btn:nth-child(2)').click();

};

	function scrollTo(element) {
		window.scroll({
			left: 0,
			top: element.offsetTop,
			behavior: 'smooth'
		})
	}

	let buttonTop = document.querySelector('.buttonTop');
	let header = document.querySelector('.header');
	buttonTop.addEventListener('click', function() {
		scrollTo(header);
	})

});