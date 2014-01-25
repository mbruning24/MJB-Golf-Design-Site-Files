var string0 = "Rollover to See More Information...",
img01Roll = "I grew up playing on, and working on, the Donald Ross designed Cedar Rapids Country Club.  I then played on the golf team at Perry Maxwell's Veenker Golf Course at Iowa State.  These experiences allowed me to study the designs of these great architects and carry those tools with me today.",
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

function displayCover(imgPath,title,subtitle) {
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
		var imgPath = 'images/classic_design/01_xl.png';
		displayCover(imgPath);
		$('html, body').animate({scrollTop:0},400);
	});
}