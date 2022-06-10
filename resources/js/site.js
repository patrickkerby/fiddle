window.typetura = {
  selectors: [
      ".typetura",
      ".flexible-type",
      "article",
      "section",
      "aside"
  ]
}

// Gallery Carousel Settings
$(document).ready(function(){
  $('.slideshow').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    variableWidth: true,
    adaptiveHeight: false
  });
});

// Instagram Feed
// var bontonFeed = new Instafeed({
//   target: 'bonton',
//   clientId: '17841452573119419',
//   accessToken: 'IGQVJYcXJVcmo1QlpXZAEVvWHh3Mlh2X19IdE95U2hPeFIzT3p2YTBzZAGRrYkVKWFVGUU5raFFwUk1MWmd0T0hsY2wzZATFTRS1QdmxKT3E4bWQyRE5QMHdUYjNjQ2VWUWthVllHM0dQeWVSUjl6WGF1ZAi1xLU5TdTU5dFpF',
//   template: '<div><img title="{{caption}}" src="{{image}}" /></div>'
// });

var stream1Feed = new Instafeed({
  target: 'stream1',
  clientId: '17841401857240059',
  accessToken: InstagramToken,
  limit: 4,
  template: '<div><img title="{{caption}}" src="{{image}}" /><span class="username"><a href="{{link}}">{{username}}</a></span></div>'
});

var stream2Feed = new Instafeed({
  target: 'stream2',
  clientId: '17841400011612286',
  accessToken: 'IGQVJXbjIzeVFIb2lZAeWJ4X0NhRVBnUHlleTA4bEV2RWhNc3k5VUFHUXNMX05iV3RRQmp4NVhrRUF6eDlPOVkwQ1Q1djY1dUw0bms4ZAHV2SXkwbW9qWEpGWmc0a1p5QWpBaE1JTl9B',
  limit: 4,
  template: '<div><img title="{{caption}}" src="{{image}}" /><span class="username"><a href="{{link}}">{{username}}</span></a></div>'
});

stream1Feed.run();
stream2Feed.run();

// Add class to nav so it can have a bg on scroll
$(function() {
  var header = $(".main-nav");
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
  
      if (scroll >= 200) {
          header.removeClass('header-static').addClass("header-scroll");
      } else {
          header.removeClass("header-scroll").addClass('header-static');
      }
  });
});

// add/remove class on body when hamburger menu is toggled.
$( '.hamb' ).click(function() {
  $( 'body' ).toggleClass( 'menu-open' );
});

$( '.mobile-nav a' ).click(function() {
  $( 'body' ).removeClass( 'menu-open' );
});

// Smooth scroll for on-page nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});