$(document).ready(function() {
	$('#submit').click(function(event) {
		var email = $('#email').val();
		var subject = $('#subject').val();
		var message = $('#message').val();
		var statusElem = $('#status')
		statusElem.empty()

		if (email.length > 5 && email.includes('@') && email.includes('.')) {
			statusElem.append('<div>email is valid</div>')
		} else {
			event.preventDefault();
			statusElem.append('<div>email is not valid</div>')
		}

		if (subject.length > 0) {
			statusElem.append('<div>Subject is valid</div>')
		} else {
			event.preventDefault();
			statusElem.append('<div>Subject is not valid</div>')
		}

		if (message.length > 0) {
			statusElem.append('<div>Message is valid</div>')
		} else {
			event.preventDefault();
			statusElem.append('<div>Message is not valid</div>')
		}
	})
});

$(document).keydown(function(e) {
	var largeElem = $('.large')
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        largeElem.empty();
        largeElem.removeClass('largeBackground');
    }
});

