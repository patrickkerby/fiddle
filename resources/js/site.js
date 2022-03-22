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

  // create two separate instances of Instafeed
var bontonFeed = new Instafeed({
  target: 'bonton',
  clientId: '3030563962',
  accessToken: 'IGQVJWT1lxMUU3OHl3WUdVRXRqRzN5R0pXYjlrVjJEX25BVkE5OFUwQnJDWEtuWUFNUllMaGw3ZAmtjWjdKZAk9HZAzlJNXFKRENXWTZAGdGJoYUhyNjBvZA0t4N1U2ckg3bjlZAODlkVzNWVUpEN0FZAOUZArVTFBM2xoSUNpbkRN'
  // rest of settings
});
var rbgFeed = new Instafeed({
  target: 'riverbendgardens',
  clientId: '3837908',
  accessToken: 'IGQVJVWUFEOVBnT2REeVlWQ3FBMTZAiZAjBRY3lFWFdZAWWYyRXFpeXJnQUFqN3Y0YVBRSGVhQThUck1pNnU1OHdKSmplM2JHNGpBZAmJmNV8zQ1gxYWplRTJCUHI3eU1XLXZAhd3EzRklfek5MaFJaWXZAjQ0oxX3pscUpUdWFz'
  // rest of settings
});

// run both feeds
bontonFeed.run();
rbgFeed.run();