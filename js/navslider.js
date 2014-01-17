$(function() {

	$('.d1').hover( function() {
		$('.drop1').stop(true,true).slideDown(300, function() {
			$('.drop1').css({'display':'block'});
		});
	}, function() {
		$('.drop1').stop(true,true).delay(500).slideUp(300, function() {
			$('.drop1').css({'display':'none'});
		});
	});
	
	$('.d2').hover( function() {
		$('.drop2').stop(true,true).slideDown(300, function() {
			$('.drop2').css({'display':'block'});
		});
	}, function() {
		$('.drop2').stop(true,true).delay(500).slideUp(300, function() {
			$('.drop2').css({'display':'none'});
		});
	});
	
	$('.s1').hover( function() {
		$('.drop1').css({'overflow':'visible'});
		$('.s1 ul').stop(true,true).delay(300).slideDown(300, function() {
			$('.s1 ul').css({'display':'block'});
		});
	}, function() {
		$('.s1 ul').stop(true,true).delay(500).slideUp(300, function() {
			$('.s1 ul').css({'display':'none'});
		});
	});
	
});