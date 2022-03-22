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
    accessToken: 'IGQVJWT1lxMUU3OHl3WUdVRXRqRzN5R0pXYjlrVjJEX25BVkE5OFUwQnJDWEtuWUFNUllMaGw3ZAmtjWjdKZAk9HZAzlJNXFKRENXWTZAGdGJoYUhyNjBvZA0t4N1U2ckg3bjlZAODlkVzNWVUpEN0FZAOUZArVTFBM2xoSUNpbkRN'
  });
  feed.run();

  // create two separate instances of Instafeed
var bontonFeed = new Instafeed({
  target: 'bonton',
  clientId: '3030563962',
  accessToken: 'IGQVJWT1lxMUU3OHl3WUdVRXRqRzN5R0pXYjlrVjJEX25BVkE5OFUwQnJDWEtuWUFNUllMaGw3ZAmtjWjdKZAk9HZAzlJNXFKRENXWTZAGdGJoYUhyNjBvZA0t4N1U2ckg3bjlZAODlkVzNWVUpEN0FZAOUZArVTFBM2xoSUNpbkRN'
  // rest of settings
});
var rbgFeed = new Instafeed({
  target: 'riverbendgardens',
  clientId: '728851544',
  accessToken: 'IGQVJWT1lxMUU3OHl3WUdVRXRqRzN5R0pXYjlrVjJEX25BVkE5OFUwQnJDWEtuWUFNUllMaGw3ZAmtjWjdKZAk9HZAzlJNXFKRENXWTZAGdGJoYUhyNjBvZA0t4N1U2ckg3bjlZAODlkVzNWVUpEN0FZAOUZArVTFBM2xoSUNpbkRN'
  // rest of settings
});

// run both feeds
bontonFeed.run();
rbgFeed.run();