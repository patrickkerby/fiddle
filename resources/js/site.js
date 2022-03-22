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

  var feed = new Instafeed({
    accessToken: 'IGQVJWNHhmUF9QXzZATOVlHRU9ZAVjVTSHM4V2Q4c0c4ek1vSVZArbVBQeTJYS3EtOUQ1UHVsQ1ZAwb0dQQkNZAeFMwenhNaTU3TUd5cFFtZAHpVWEE3cVhJbXNvdEFYNnkxbHZArMmFBRERJVW1sdjVxTzZAyNlc2Slg2Um93LWR3'
  });
  feed.run();
