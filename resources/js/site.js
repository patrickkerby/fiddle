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
    accessToken: 'AQDVNU6cwmMDNgGtkEo_CWu-bnOxF4mzaW3meWgQYZXtyE27MCqWtEEFWltlghYVWHA5LfYqzIn8nzHIwRIapAAsfHpSGHn3VBH3rpFWoHOgWhvjW0W4EizRej1iGQMDCTZ8JryXCG9a1YpupPAFPWfVmUgriLlqm2IwZHXI24VwGlr4qcypm5bjqVfP7HXiZ7Je8FBlDz3HFdJV3xq1_JErE2a4C9kgdrjlEymauVAbNg'
  });
  feed.run();
