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
	$('.mainImage img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Fairway - 6th Hole";
		rollText = img01Roll;
		var imgPath = 'images/courses/cc_peoria/6_fairway_lg.png';
		displayCover(imgPath, title, subtitle);
	});
	$('.subImage01 img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Fairway - 7th Hole";
		rollText = img02Roll;
		var imgPath = 'images/courses/cc_peoria/7_lg.png';
		displayCover(imgPath, title, subtitle);
	});
	$('.subImage02 img').click(function() {
		var title = "Country Club of Peoria",
		subtitle = "Green - 8th Hole";
		rollText = img03Roll;
		var imgPath = 'images/courses/cc_peoria/8_lg.png';
		displayCover(imgPath, title, subtitle);
	});
}