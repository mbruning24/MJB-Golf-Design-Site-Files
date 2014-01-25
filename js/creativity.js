var string0 = "Rollover to See More Information...",
img01Roll = "Greens are the soul of a golf course.  They provide a climatic finish to the golf hole.  Therefore, you want your greens to say something about your course. For More Information on Green Design, ",
img02Roll = "Classic golf courses are our link to the past.  Many courses choose to revert back to the day it was formed, many choose to move ahead with today's technology.  In either case, you need to make a commitment to your course and carry it throughout the design. For More Information on Classic Design, ",
img03Roll = "Bunkers are the eye candy on the golf course and your style says a lot about your type of course.  So whether a bunker is there for strategy, intimidation, or beauty a bunker should be there for a purpose. For More Information on Bunker Design, ",
rollText,
rollLink;

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
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.photoWrap').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.photoWrap').addClass("dontShow");
		$('.warning').fadeOut(300);
		$('.warning').addClass('dontShow');
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

function rolloverHandler() {
	$('.infoRollover').hover(function() {
		$(this).find('.info').animate({'opacity':'0'},400,function() {
			$('.infoRollover').animate({'width':'760px'},400,function() {
				$(this).find('.info').text(rollText);
				$(this).find('.info').append('<a style="color:white;" href="' + rollLink + '">Click Here.</a>');
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
		rollLink = 'green_design.html';
		var imgPath = 'images/creativity/01_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.img02 img').click(function() {
		rollText = img02Roll;
		rollLink = 'classic_design.html';
		var imgPath = 'images/creativity/02_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
	$('.img03 img').click(function() {
		rollText = img03Roll;
		rollLink = 'bunker_design.html';
		var imgPath = 'images/creativity/03_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
}