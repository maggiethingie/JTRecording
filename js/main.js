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

function enlargeImage(image, title) {
  var largeElem = $('.large');
  largeElem.empty();
  largeElem.addClass('largeBackground');
  largeElem.append(`
    <div class="largeCover">
      <img src="img/art/${image}.jpg"/>
      <p class="caption">${title}</p>
    </div>
    <ion-icon name="close-outline" class="close-icon" onClick="closeImage()"></ion-icon>
  `);
}

function closeImage() {
  var largeElem = $('.large');
  largeElem.empty();
  largeElem.removeClass('largeBackground');
}

function openMenu() {
  var menu = $('.menu');
  menu.toggleClass('black-background');
  var menuContent = $('.menu-content');
  menuContent.toggleClass('visible');
  var icon = $('.icon');
  icon.empty();
  icon.append(`<ion-icon onClick="closeMenu()" name="close-outline" class="close-icon"></ion-icon>`);
}

function closeMenu() {
  var menu = $('.menu');
  menu.toggleClass('black-background');
  var menuContent = $('.menu-content');
  menuContent.toggleClass('visible');
  var icon = $('.icon');
  icon.empty();
  icon.append(`<ion-icon onClick="openMenu()" name="menu-outline" class="menu-icon"></ion-icon>`);
}

function playSound(soundObj) {
    var sound=document.getElementById(soundObj);
    if (soundObj == 'guitar') {
	sound.volume = 0.005
    } else {
	sound.volume = 0.02;
    }
    //sound.play();
}

/*
function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    thissound.currentTime = 0;
}
*/
