	Galleria.loadTheme('/plugins/k2/incptvk2imagegallery/incptvk2imagegallery/tmpl/Galleria/js/../themes/classic/galleria.classic.min.js');
	
	Galleria.configure({
		autoplay: 	false,
		carousel: 	true,
		carouselSpeed: 	400,
		carouselSteps: 	'auto',
		clicknext: 	false,
		debug: 	false,
		easing: 	'galleria',
		fullscreenCrop: 	'height',
		fullscreenDoubleTap: 	false,
		fullscreenTransition: 	'fade',
		height: 	300,
		idleMode: 	true,
		idleTime: 	3000,
		idleSpeed: 	200,
		imageCrop: 	false,
		imageMargin: 	0,
		imagePan: 	false,
		imagePanSmoothness: 	12,
		imagePosition: 	'center',
		imageTimeout: 	30000,
		/*initialTransition: 	,*/
		/*keepSource: 	,*/
		layerFollow: 	true,
		lightbox: 	true ,
		lightboxFadeSpeed: 	200,
		lightboxTransitionSpeed: 	300,
		maxScaleRatio: 	undefined,
		minScaleRatio: 	undefined,
		overlayBackground: 	'#0b0b0b',
		overlayOpacity: 	0.85,
		pauseOnInteraction: 	true,
		popupLinks: 	false,
		preload: 	2,
		queue: 	true,
		responsive: 	false,
		show: 	0,
		showCounter: 	false,
		showInfo: 	true,
		showImagenav: 	true,
		swipe: 	true,
		thumbCrop: 	true,
		thumbDisplayOrder: 	true,
		thumbMargin: 	0,
		thumbnails: 	true,
		thumbQuality: 	true,
		touchTransition: 	undefined,
		transition: 	'fade',
		transitionSpeed: 	400,
		trueFullscreen: 	true,
		wait: 	5000,
		width:	450	});

			
	Galleria.run('#galleria');
	
	Galleria.ready(function() {
	    this.bind("thumbnail", function(e) {
		if(e.galleriaData.original.className == "iframe video" || e.galleriaData.original.className == "video")
		{
		    e.thumbTarget.parentNode.addClass("video_" + e.index);
		    jQuery(".galleria-image.video_" + e.index).append("<span class=\"play-btn\"></span>");
		    e.thumbTarget.parentNode.removeClass("video_" + e.index);
		}
	});
});