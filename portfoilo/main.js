	 const anchors = document.querySelectorAll('header a[href*="#"]');

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