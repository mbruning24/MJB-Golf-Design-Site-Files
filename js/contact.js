$(function() {

	$('.form_submit').click(function() {
		validateContactFormAndSend();
		return false;
	});

}); // end ready

function validateContactFormAndSend() {

	var
	name = $('.form_name').val(),
	email = $('.form_email').val(),
	message = $('.form_message').val(),
	phone = $('.form_phone1').val() + $('.form_phone2').val() + $('.form_phone3').val(),
	radio = $("input:radio[name='where']:checked").val(),
	print = $('.print').val(),
	other = $('.other').val(),
	where = '',
	errors = 0;
	
	clearErrors();
	
	if (name == '' || !(/^[A-Za-z .-]*$/.test(name))) {
		invalid('.form_name','#name p','Please enter a valid name');
		errors += 1;
	}
	if (email == '' || !(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/.test(email))) {
		invalid('.form_email','#email p','Please enter a valid email');
		errors += 1;
	}
	if (message == '') {
		invalid('.form_message','.ta p','Please enter a message');
		errors += 1;
	}
	if (phone != '' && !(/^[0-9]{10}$/.test(phone))) {
		invalidPhone();
		errors += 1
	}
	
	if (radio == 'word_of_mouth') {
		where = 'Word of Mouth';
	} else if (radio == 'facebook') {
		where = 'Facebook';
	} else if (radio == 'twitter') {
		where = 'Twitter';
	} else if (radio == 'print_article') {
		where = 'Print Article: ';
		if (print == '') {
			where += 'User had no input';
		} else {
			where += print;
		}
	} else {
		where = 'Other: ';
		if (other == '') {
			where += 'User had no input';
		} else {
			where += other
		}
	}
	
	if (errors == 0) {
		//ajax call
		$.ajax({
			type: 'post',
			url: 'mail.php',
			data: {
				'name': name,
				'email': email,
				'message': message,
				'phone': phone,
				'where': where
			},
			dataType: 'json',
			success: function(data) {
				$('.form').html('\
				<h1>Thank you for Submitting this Form.</h1>\
				<p>Your form submission has been received. I will try to get back to you as soon as \
				possible. Thank you for visiting MJBGolfDesign.com! <a href="index.html">Click Here</a> \
				to return to the home page.</p>');
			},
			error: function() {
				alert('Error: There seems to be a problem processing the submission form. Please try again in a few minutes. If the problem persists, please send an email to info@mjbgolfdesign.com.');
			}
		});
	} else {
		return false;
	}

}

function invalid(container,c2,text) {
	$(container).css({'background-color':'rgba(255,0,0,.2)'});
	$(c2).text(text);
}
function invalidPhone() {
	$('#phone p').text('Please enter a valid phone number');
	$('.form_phone1').css({'background-color':'rgba(255,0,0,.2)'});
	$('.form_phone2').css({'background-color':'rgba(255,0,0,.2)'});
	$('.form_phone3').css({'background-color':'rgba(255,0,0,.2)'});
}
function clearErrors() {
	$('#name p').text('');
	$('#email p').text('');
	$('.ta p').text('');
	$('#phone p').text('');
	$('.form_name').css({'background-color':'white'});
	$('.form_email').css({'background-color':'white'});
	$('.form_message').css({'background-color':'white'});
	$('.form_phone1').css({'background-color':'white'});
	$('.form_phone2').css({'background-color':'white'});
	$('.form_phone3').css({'background-color':'white'});
}