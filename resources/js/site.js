// Typetura settings
// window.typetura = {
//   selectors: [
//       ".typetura",
//       ".flexible-type",
//       "article",
//       "section",
//       "aside"
//   ]
// }

$(document).ready(function(){
  $('.slideshow').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: false
  });
});

var request = new XMLHttpRequest();
			request.open('GET', 'https://graph.facebook.com/v13.0/me/accounts?access_token=IGQVJWNHhmUF9QXzZATOVlHRU9ZAVjVTSHM4V2Q4c0c4ek1vSVZArbVBQeTJYS3EtOUQ1UHVsQ1ZAwb0dQQkNZAeFMwenhNaTU3TUd5cFFtZAHpVWEE3cVhJbXNvdEFYNnkxbHZArMmFBRERJVW1sdjVxTzZAyNlc2Slg2Um93LWR3&count=9', true);

			request.onload = function(container) {
			  if (request.status >= 200 && request.status < 400) {
			    // Success!
			    var data = JSON.parse(request.responseText);
			    for (var i=0;i < data.data.length;i++) {
			    	var container = document.getElementById('insta-feed');
			    	var imgURL = data.data[i].images.standard_resolution.url;
			    	console.log(imgURL);
					var div = document.createElement('div');
			        div.setAttribute('class','instapic');
			        container.appendChild(div);
			        var img = document.createElement('img');
			        img.setAttribute('src',imgURL)
			        div.appendChild(img);
			    }

			    console.log(data);
			  } else {
			  }
			};
			request.onerror = function() {
			  // There was a connection error of some sort
			};
			request.send();