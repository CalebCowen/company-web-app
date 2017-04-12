$(document).ready(function(){
  var $image = $('#banner');
  var $header = $('#banner-header')
  var $subtitle = $('#banner-subtitle')
  var $github = $('#links')
  var $description = $('#description')
  var $real_email = $('#real_email')
  var $fake_email = $('#fake_email')


  $header.delay(3300)
  .fadeIn(2000)
  .delay(1000)
  .animate({'marginTop': '-=200px'}, 1500);

  $subtitle.delay(3300)
  .fadeIn(2000)
  .delay(1000)
  .animate({'marginTop': '+=150px'}, 1100)
  .animate({'marginTop': '-=180px'}, 1500);

  $github.delay(3300)
  .fadeIn(2000)
  .delay(1000)
  .animate({'marginTop': '+=150px'}, 1100)
  .animate({'marginTop': '-=130px'}, 1500);

  $fake_email.delay(3300)
  .fadeIn(2000)
  .delay(1000)
  .animate({'marginTop': '+=900'}, 1500)
  .fadeOut(800)

  $description.delay(7500)
  .fadeIn(3500)

  $real_email.delay(7500)
  .fadeIn(3000)
});
