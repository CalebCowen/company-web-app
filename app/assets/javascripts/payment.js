$(document).ready(function(){

  showPaymentForm();
  submitPayment();
  $('.close').on('click', closeForm);


  $('.card').on('click', function() {
    $('.card').removeClass('active');
    $(this).addClass('active');
    $('.form').stop().slideUp();
    $('.form').delay(300).slideDown();
  });
});

function showPaymentForm(){
  $( "#payment-button" ).on( "click", function() {
    $('.payment-container').show().animate({'marginTop': '-=1100px'}, 900);
    $('.blur').toggleClass('blur-active');
  });
}

function submitPayment() {
  var $form = $('#payment-form');
  $form.submit(function(event) {
    // Disable the submit button to prevent repeated clicks:
    $form.find('.submit').prop('disabled', true);

    // Request a token from Stripe:
    Stripe.card.createToken($form, stripeResponseHandler);

    // Prevent the form from being submitted:
    return false;
  });
}

function stripeResponseHandler(status, response) {
  // Grab the form:
  var $form = $('#payment-form');

  if (response.error) { // Problem!

    // Show the errors on the form:
    $form.find('.payment-errors').text(response.error.message);
    $form.find('.submit').prop('disabled', false); // Re-enable submission
    console.log(response.error.message)

  } else { // Token was created!

    // Get the token ID:
    var token = response.id;

    // Insert the token ID into the form so it gets submitted to the server:
    $form.append($('<input type="hidden" name="stripeToken">').val(token));
    var validation = validateForm($form);
    // Submit the form:
    if (validation) {
      $form.get(0).submit();
    } else {
      $form.find('.submit').prop('disabled', false);
    }
  }
};

function validateForm(form) {
  var project_name = form.find('[name="project_name"]').val()
  var amount = form.find('[name="amount"]').val()
  $.get('/api/v1/projects/'+project_name, function(response) {
    if (!response) {
      form.find('.payment-errors').text("There is no project with that name.");
      return false;
    } else if (amount > response.amount_owed) {
      form.find('.payment-errors').text("That payment amount is more than you owe!");
      return false;
    } else {
      form.find('.payment-success').text("Transaction has been submitted.");
      return true;
    }
  })
}

function closeForm() {
  $('#payment-form').get(0).reset();
  $('#payment-form').find('.submit').prop('disabled', false);
  $('.blur').toggleClass('blur-active');
  $('.payment-container').animate({'marginTop': '+=1100px'}, 900, function() {
    $('.payment-container').hide();
  });
}
