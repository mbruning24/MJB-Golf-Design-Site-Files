var
infoArray01 = [
	'String 1',
	'String 2',
	'String 3',
	'String 4',
	'String 5'
],
infoArray02 = [
	'String 1a',
	'String 2a',
	'String 3a',
	'String 4a',
	'String 5a'
],
imgPaths01 = [
	'images/design_process/01/1.png',
	'images/design_process/01/2.png',
	'images/design_process/01/3.png',
	'images/design_process/01/4.png',
	'images/design_process/01/5.png'
],
imgPaths02 = [
	'images/design_process/02/1.png',
	'images/design_process/02/2.png',
	'images/design_process/02/3.png',
	'images/design_process/02/4.png',
	'images/design_process/02/5.png'
],
currentIndex,
active_array;

$(function() {

	keyPressHandler();
	coverEvtHandler();
	enlargeHandler();
	prevNextHandler();

}); // end ready

function keyPressHandler() {
	$(window).keydown(function(event) {
		if (event.which == 27 && !$('.cover').hasClass("dontShow") && !$('.photoWrap').hasClass("dontShow")) {
			$('.cover').fadeOut(300);
			$('.photoWrap').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap').addClass("dontShow");
			$('.d_slides').html('');
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.photoWrap').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.photoWrap').addClass("dontShow");
		$('.d_slides').html('');
	});
}

function loadImagesAndDisplay(imagePath_array) {
	//reset
	$('.d_slides').html('');
	$('.info').text('');
	if ($('.controls p:nth-of-type(2)').hasClass('dontShow')) {
		$('.controls p:nth-of-type(2)').removeClass('dontShow');
	}
	
	//Load images
	$('.d_slides').append('<img class="d_slide d_first d_active" style="opacity:1" src=' + imagePath_array[0] + ' />');
	for (var x = 1; x < imagePath_array.length - 1; x++) {
		$('.d_slides').append('<img class="d_slide" src=' + imagePath_array[x] + ' />');
	}
	$('.d_slides').append('<img class="d_slide d_last" src=' + imagePath_array[(imagePath_array.length - 1)] + ' />');
	
	//Load First Info Text
	$('.info').text(active_array[0]);
	currentIndex = 0;
	
	//Since first slide, hide "prev" tag
	if (!$('.controls p:first-child').hasClass('dontShow')) {
		$('.controls p:first-child').addClass('dontShow');
	}
	
	//Display all stuff
	$('.cover').fadeIn(300);
	$('.cover').removeClass('dontShow');
	$('.photoWrap').fadeIn(300);
	$('.photoWrap').removeClass('dontShow');
	$('html, body').animate({scrollTop:0},400);
	
	console.log(active_array);
}

function next() {
	currentIndex += 1;
	var c = $('.d_active');
	var n = c.next();
	console.log(n);
	
	//Animate
	c.animate({'opacity':'0'}, 700);
	n.animate({'opacity':'1'}, 700);
	$('.info').fadeOut(350,function() {
		$('.info').text(active_array[currentIndex]);
		$('.info').fadeIn(350);
	}); // end info fade out
	
	//Add/Remove classes
	n.addClass('d_active');
	c.removeClass('d_active');
}

function prev() {
	currentIndex -= 1;
	var c = $('.d_active');
	var p = c.prev();
	console.log(p);
	
	//Animate
	c.animate({'opacity':'0'}, 700);
	p.animate({'opacity':'1'}, 700);
	$('.info').fadeOut(350,function() {
		$('.info').text(active_array[currentIndex]);
		$('.info').fadeIn(350);
	}); // end info fade out
	
	//Add/Remove classes
	p.addClass('d_active');
	c.removeClass('d_active');
}

function enlargeHandler() {
	$('.img01 img').click(function() {
		active_array = infoArray01;
		loadImagesAndDisplay(imgPaths01);
	});
	$('.img02 img').click(function() {
		active_array = infoArray02;
		loadImagesAndDisplay(imgPaths02);
	});
}

function prevNextHandler() {
	$('.controls p:first-child').click(function() {
		if ($('.d_active').prev().hasClass('d_first')) {
			$(this).addClass('dontShow');
		}
		if ($('.controls p:nth-of-type(2)').hasClass('dontShow')) {
			$('.controls p:nth-of-type(2)').removeClass('dontShow');
		}
		prev();
	});
	$('.controls p:nth-of-type(2)').click(function() {
		if ($('.d_active').next().hasClass('d_last')) {
			$(this).addClass('dontShow');
		}
		if ($('.controls p:first-child').hasClass('dontShow')) {
			$('.controls p:first-child').removeClass('dontShow');
		}
		next();
	});
}


