import './style.css';
import $ from 'jquery';

$('.required').on('input', function () {
    var empty = false;
    $('.required').each(function() {
      if ($(this).val() == '') {
        empty = true;
      }
    });

    if (empty) {
      $('#send').attr('disabled', 'disabled');
    } 
    else {
      $('#send').removeAttr('disabled');
    }

    if (empty) {
      $('.required').css('border-color', 'red');
    }
    else {
      $('.required').css('border-color', 'gray');
    }

});