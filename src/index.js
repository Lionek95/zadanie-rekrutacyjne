import './style.css';
import $ from 'jquery';

//Choice of the amount

$(function(){
  $('.amount__value').on('click', function(){
    $(this).toggleClass('active');
    $('.amount__value').not(this).removeClass('active');
  });
});

//Form validation

$(function(){
  $('.shipping input').on('blur', function(){
      if(!$(this).val()){
          $(this).addClass('error');
      } else{
          $(this).removeClass('error');
      }

      if(!$(this).val()){
        $('.fill__fields--info').css('display', 'block');
      } else{
        $('.fill__fields--info').css('display', 'none');
      }
  });
});




$(function(){
  $('input[type="checkbox"]').on('click', function(){
    if($(this).prop('checked') == true) {
      $('#send').removeAttr('disabled');
    }
    else if($(this).prop('checked') == false) {
      $('#send').attr('disabled', 'disabled');
    }
  });
});

//The code after submition

$(function(){
  $('#send').on('click', function(){
    $('.code__text').css('display', 'block');
  });
});
