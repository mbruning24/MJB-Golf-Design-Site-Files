var string0 = "Rollover to See More Information...",
img01Roll = "Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria - Text for 6th hole fairway at Country Club of Peoria",
img02Roll = "Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria - Text for 7th hole fairway at Country Club of Peoria",
img03Roll = "Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria - Text for 8th hole green at Country Club of Peoria",
rollText;

$(function() {

	keyPressHandler();
	coverEvtHandler();
	rolloverHandler();
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

function rolloverHandler() {
	$('.infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'760px'},400,function() {
				$(this).find('.info').text(rollText);
				$(this).find('.info').animate({'opacity':'1'});
			}); // end width animate
		}); // end text animate
	}, function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'100px'},400,function() {
				$(this).find('.info').text(string0);
				$(this).find('.info').animate({'opacity':'1'});
			}); // end animate
		});
	}); // end hover
}

function imgClickHandler() {
	//Canyata
	$('.canyata .mainImage img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/canyata/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.canyata .subImage01 img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/canyata/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.canyata .subImage02 img').click(function() {
		var title = "Canyata Golf Club",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/canyata/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});

	//CC Peoria
	$('.cc_peoria .mainImage img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/cc_peoria/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.cc_peoria .subImage01 img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/cc_peoria/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.cc_peoria .subImage02 img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/cc_peoria/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//National
	$('.national .mainImage img').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/national/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.national .subImage01 img').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/national/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.national .subImage02 img').click(function() {
		var title = "The National at Eagle Creek",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/national/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//Garland
	$('.garland .mainImage img').click(function() {
		var title = "Garland Resort",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/garland/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.garland .subImage01 img').click(function() {
		var title = "Garland Resort",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/garland/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.garland .subImage02 img').click(function() {
		var title = "Garland Resort",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/garland/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//Jester Park
	$('.jester_park .mainImage img').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/jester_park/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.jester_park .subImage01 img').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/jester_park/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.jester_park .subImage02 img').click(function() {
		var title = "Jester Park Golf Course",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/jester_park/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	
	//St. Charles
	$('.st_charles .mainImage img').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/st_charles/01_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.st_charles .subImage01 img').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/st_charles/02_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.st_charles .subImage02 img').click(function() {
		var title = "St. Charles Country Club",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/st_charles/03_xl.png';
		displayCover(imgPath, title, subtitle);
		$('html, body').animate({scrollTop:0},400);
	});
}