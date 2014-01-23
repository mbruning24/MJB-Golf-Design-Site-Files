$(function() {

	keyPressHandler();
	coverEvtHandler();
	imgClickHandler();

}); // end ready

function keyPressHandler() {
	$(window).keydown(function(event) {
		if (event.which == 27 && !$('.cover').hasClass("dontShow") && !$('.photoWrap').hasClass("dontShow")) {
			$('.cover').fadeOut(300);
			$('.photoWrap').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap').addClass("dontShow");
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.photoWrap').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.photoWrap').addClass("dontShow");
	});
}

function displayCover(imgPath,title,subtitle) {
	$('.titleBar .title').text(title);
	$('.titleBar .subtitle').text(subtitle);
	var imgHTML = '<img class="d_slide" style="opacity:1" src="' + imgPath + '" />';
	$('.d_slides').html(imgHTML);
	
	if ($('.cover').hasClass("dontShow") && $('.photoWrap').hasClass("dontShow")) {
		$('.cover').fadeIn(300);
		$('.photoWrap').fadeIn(300);
		$('.cover').removeClass("dontShow");
		$('.photoWrap').removeClass("dontShow");
	}
}

function imgClickHandler() {
	//Canyata
	$('.canyata .mainImage img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Hole 4";
		var imgPath = 'images/courses/canyata/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.canyata .subImage01 img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Hole 12";
		var imgPath = 'images/courses/canyata/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.canyata .subImage02 img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Hole 15";
		var imgPath = 'images/courses/canyata/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});

	//CC Peoria
	$('.cc_peoria .mainImage img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Hole 6";
		var imgPath = 'images/courses/cc_peoria/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.cc_peoria .subImage01 img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Hole 7";
		var imgPath = 'images/courses/cc_peoria/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.cc_peoria .subImage02 img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Hole 8";
		var imgPath = 'images/courses/cc_peoria/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//National
	$('.national .mainImage img').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Hole 18";
		var imgPath = 'images/courses/national/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.national .subImage01 img').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Hole 12";
		var imgPath = 'images/courses/national/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.national .subImage02 img').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Hole 13";
		var imgPath = 'images/courses/national/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//Garland
	$('.garland .mainImage img').click(function() {
		var title = "Garland Resort",
		subtitle = "Hole 1";
		var imgPath = 'images/courses/garland/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.garland .subImage01 img').click(function() {
		var title = "Garland Resort",
		subtitle = "Hole 3";
		var imgPath = 'images/courses/garland/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.garland .subImage02 img').click(function() {
		var title = "Garland Resort",
		subtitle = "Hole 4";
		var imgPath = 'images/courses/garland/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//Jester Park
	$('.jester_park .mainImage img').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Hole 9";
		var imgPath = 'images/courses/jester_park/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.jester_park .subImage01 img').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Hole 12";
		var imgPath = 'images/courses/jester_park/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.jester_park .subImage02 img').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Hole 18";
		var imgPath = 'images/courses/jester_park/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//St. Charles
	$('.st_charles .mainImage img').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "Hole 5 (Quarry)";
		var imgPath = 'images/courses/st_charles/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.st_charles .subImage01 img').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "Hole 5 (Bendelow)";
		var imgPath = 'images/courses/st_charles/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.st_charles .subImage02 img').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "Hole 11 (Bendelow)";
		var imgPath = 'images/courses/st_charles/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
}