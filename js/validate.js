function validateForm() {
  //get input field values data to be sent to server
  //   document.getElementById('status').innerHTML = 'Sending...';
  formData = {
    name: $('input[name=name]').val(),
    email: $('input[name=email]').val(),
    // subject: $('input[name=subject]').val(),
    message: $('textarea[name=message]').val()
  };

  $.ajax({
    url: 'sendemail.php',
    type: 'POST',
    data: formData,
    success: function(data, textStatus, jqXHR) {
      document.getElementById('submitStatus').innerHTML = data.message;
      $('#contact-modal').modal('show');
      if (data.code)
        //If mail was sent successfully, reset the form.
        $('#contact-form')
          .closest('form')
          .find('input[type=text], textarea')
          .val('');
    },
    error: function(jqXHR, textStatus, errorThrown) {
      //   $('#status').text(jqXHR);
      document.getElementById('submitStatus').innerHTML = text(jqXHR);
      $('#contact-modal').modal('show');
    }
  });
}
