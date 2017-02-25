$(document).ready(function(){

  showPaymentForm();
  submitPayment()
})

function showPaymentForm(){
  $( "#payment-button" ).on( "click", function() {
    $('#payment-form').show();
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

    // Submit the form:
    $form.get(0).submit();
    if ($('.flash-success').length) {
      $('#payment-form').hide();
    } else if ($('.flash-error').length) {
      console.log($('.flash-error'))
    }
  }
};
