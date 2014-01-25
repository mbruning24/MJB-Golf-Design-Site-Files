var
infoArray01 = [
	'Wrapping up construction.  How do we get to this point?  Putting a project together is about art, commitment, and communication.  The process of getting a sound design in place can involve months of discussion.  In a nutshell, here is how the process can take place.',
	'With technology today we can call up a course with the use of Google Earth or Bing Maps.  We can even look through past photos to see when changes took place.  Putting together a Site Analysis is a starting point to developing the plan.',
	'The cornerstone to getting a plan in place is working through the schematic design phase.  This involves multiple concepts and meetings to discuss the ideas and put together a plan that best fits your course and your budget.  It is only after we all agree on a concept that we move to the next phase.',
	'Once a design is approved we start to create the construction documents.  These plans mark in detail the work to take place.  They are then distributed to the contractor for bidding.  Sound construction documents can help minimize confusion during construction and limit lost time or cost increases.',
	'Once construction begins being onsite in essential to completing the project.  Meetings with the owner and contractor helps minimize delays.  It also allows us to keep on top of the work to be completed and make sure the project stays on budget.  Put together, these steps mark the process involved in completing your project.'
],
infoArray02 = [
	"The finished product.  Using the latest technologies, we can help show you what your project will look like before it's completed.  The following slides will show how these useful tools can create computer enhanced photos to present the design.",
	'In this design for the ninth hole at Jester Park we created a drivable par 4.  By adding bunkers around the green, we create many risk and reward scenarios.  But many people have a hard time visualizing what this will look like.  The next slides will showing photo manipulation will help them see the finished product.',
	'The existing green with little flare.  The plan calls for adding a bunker on the front right of the green and two bunkers short of the green.  Can you picture this?  Click next and see the potential we see in this green site.',
	'Presto!  Adding bunkers to the existing photos allows you to see how the finished product could look.  Not only is this a great sales tool for your members or patrons, but also helps the contractor during construction.  Again, saving time and money!',
	"Once again, the finished product.  This tool is helping many of my clients get projects approved.  It creates a buzz among the golfers and actually has them looking forward to the construction.  Therefore, the golfers still come out while the work is taking place so you don't experience that typical drop in rounds."
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
			$('.warning').fadeOut(300);
			$('.cover').addClass("dontShow");
			$('.photoWrap').addClass("dontShow");
			$('.warning').addClass('dontShow');
			$('.d_slides').html('');
		}
	});
}

function coverEvtHandler() {
	$('.cover').click(function() {
		$('.cover').fadeOut(300);
		$('.photoWrap').fadeOut(300);
		$('.warning').fadeOut(300);
		$('.cover').addClass("dontShow");
		$('.photoWrap').addClass("dontShow");
		$('.warning').addClass('dontShow');
		$('.d_slides').html('');
	});
}

function loadImagesAndDisplay(imagePath_array) {
	//reset
	$('.d_slides').html('');
	$('.info').text('');
	if ($('.controls a:nth-of-type(2)').hasClass('dontShow')) {
		$('.controls a:nth-of-type(2)').removeClass('dontShow');
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
	if (!$('.controls a:first-child').hasClass('dontShow')) {
		$('.controls a:first-child').addClass('dontShow');
	}
	
	//Display all stuff
	$('.cover').fadeIn(300);
	$('.cover').removeClass('dontShow');
	$('.photoWrap').fadeIn(300);
	$('.photoWrap').removeClass('dontShow');
	$('.warning').fadeIn(300);
	$('.warning').removeClass('dontShow');
	$('html, body').animate({scrollTop:0},400);
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
	$('.controls a:first-child').click(function() {
		if ($('.d_active').prev().hasClass('d_first')) {
			$(this).addClass('dontShow');
		}
		if ($('.controls a:nth-of-type(2)').hasClass('dontShow')) {
			$('.controls a:nth-of-type(2)').removeClass('dontShow');
		}
		prev();
		return false;
	});
	$('.controls a:nth-of-type(2)').click(function() {
		if ($('.d_active').next().hasClass('d_last')) {
			$(this).addClass('dontShow');
		}
		if ($('.controls a:first-child').hasClass('dontShow')) {
			$('.controls a:first-child').removeClass('dontShow');
		}
		next();
		return false;
	});
}


