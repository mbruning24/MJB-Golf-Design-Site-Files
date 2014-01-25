var string0 = "Rollover to See More Information...",
img01Roll = "It is said the golf is like billiards, each shot should set up the next.  Bunkers help to define a golf hole and create that strategy.  In the case above, the bunkers challenge the golfer to make an aggressive play in order to set up the best approach for the next shot.",
img02Roll = "Ireland or Scotland?  No, this is the sand belt of Australia.  It shows that bunker styles have no boundaries.  Selecting the best style for your course should take into account your site, your clientele, and your maintenance budget.  All these will allow your course to stay relevant with today's technology.",
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
			$('.warning').fadeOut(300);
			$('.warning').addClass('dontShow');
		}
		if (event.which == 27 && !$('.cover').hasClass("dontShow") && !$('.photoWrap_p').hasClass("dontShow")) {
			$('.cover').fadeOut(300);
			$('.photoWrap_p').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap_p').addClass("dontShow");
			$('.warning').fadeOut(300);
			$('.warning').addClass('dontShow');
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.warning').fadeOut(300);
		$('.warning').addClass('dontShow');
		if (!$('.photoWrap').hasClass('dontShow')) {
			$('.photoWrap').fadeOut(300);
			$('.photoWrap').addClass('dontShow');
		}
		if (!$('.photoWrap_p').hasClass('dontShow')) {
			$('.photoWrap_p').fadeOut(300);
			$('.photoWrap_p').addClass('dontShow');
		}
	});
}

function displayCover(imgPath) {
	var imgHTML = '<img class="d_slide" style="opacity:1" src="' + imgPath + '" />';
	$('.d_slides').html(imgHTML);
	
	if ($('.cover').hasClass("dontShow") && $('.photoWrap').hasClass("dontShow")) {
		$('.cover').fadeIn(300);
		$('.photoWrap').fadeIn(300);
		$('.cover').removeClass("dontShow");
		$('.photoWrap').removeClass("dontShow");
		$('.warning').fadeIn(300);
		$('.warning').removeClass('dontShow');
	}
}

function displayCover_p(imgPath) {
	var imgHTML = '<img class="d_slide_p" style="opacity:1" src="' + imgPath + '" />';
	$('.d_slides_p').html(imgHTML);
	
	if ($('.cover').hasClass("dontShow") && $('.photoWrap').hasClass("dontShow") && $('.photoWrap_p').hasClass("dontShow")) {
		$('.cover').fadeIn(300);
		$('.photoWrap_p').fadeIn(300);
		$('.cover').removeClass("dontShow");
		$('.photoWrap_p').removeClass("dontShow");
		$('.warning').fadeIn(300);
		$('.warning').removeClass('dontShow');
	}
}

function rolloverHandler() {
	$('.photoWrap .infoRollover').hover(function() {
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
	
	$('.photoWrap_p .infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'503px'},400,function() {
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
	$('.img01 img').click(function() {
		rollText = img01Roll;
		var imgPath = 'images/bunker_design/01_xl.png';
		displayCover_p(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.img02 img').click(function() {
		rollText = img02Roll;
		var imgPath = 'images/bunker_design/02_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
}