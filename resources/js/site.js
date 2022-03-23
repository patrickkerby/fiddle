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
// var bontonFeed = new Instafeed({
//   target: 'bonton',
//   clientId: '17841452573119419',
//   accessToken: 'IGQVJYcXJVcmo1QlpXZAEVvWHh3Mlh2X19IdE95U2hPeFIzT3p2YTBzZAGRrYkVKWFVGUU5raFFwUk1MWmd0T0hsY2wzZATFTRS1QdmxKT3E4bWQyRE5QMHdUYjNjQ2VWUWthVllHM0dQeWVSUjl6WGF1ZAi1xLU5TdTU5dFpF',
//   template: '<div><img title="{{caption}}" src="{{image}}" /></div>'
// });

var rbgFeed = new Instafeed({
  target: 'riverbendgardens',
  clientId: '17841401857240059',
  accessToken: InstagramToken,
  limit: 8,
  template: '<div><img title="{{caption}}" src="{{image}}" /></div>'
});

// run both feeds
// bontonFeed.run();
rbgFeed.run();

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});