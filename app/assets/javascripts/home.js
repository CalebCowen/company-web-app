$(document).ready(function(){
  var $image = $('#banner');
  var $header = $('#banner-header')
  var $contact = $('#contact')
  var $description = $('#description')
  var $real_email = $('#real_email')
  var $fake_email = $('#fake_email')

  $header.delay(3000)
  .fadeIn(2000)
  .delay(1000)
  .animate({'marginTop': '-=200px'}, 1500);

  $contact.delay(3000)
  .fadeIn(2000)
  .delay(800)
  .animate({'marginTop': '+=90px'}, 1200)
  .animate({'marginTop': '-=170px'}, 1100)

  $('#github')
  .delay(6000)
  .animate({'marginLeft': '-=850'}, 1500);

  $('#linkedin')
  .delay(6000)
  .animate({'marginRight': '-=800', 'marginLeft': '+=800'}, 1500);

  $fake_email.delay(6000)
  .animate({'marginTop': '+=600'}, 1300)
  .fadeOut(800)

  $image.delay(500)
  .fadeIn(2000)
  .delay(1000)
  .fadeOut(4000);

  $description.delay(7500)
  .fadeIn(3500)

  $real_email.delay(7000)
  .fadeIn(2000)

});
