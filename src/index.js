import './style.css';
import $ from 'jquery';

//Choice of the amount

$(function(){
  $('.amount__value').on('click', function(){
    $(this).toggleClass('active');
    $('.amount__value').not(this).removeClass('active');
  });
});

//Reset the choice of the amount with the support button alert

$(function(){
  $('.support__button').on('click', function(){
    $('.amount__value').not(this).removeClass('active');
  });
});


//Support button alert

$(function(){
  $('.support__button').on('click', function(){
    alert('Dziękujemy za wpłatę!');
  });
});

//Slider

$(function() {
  
  var slideCount =  $(".slider ul li").length;
  var slideWidth =  $(".slider ul li").width();
  var slideHeight =  $(".slider ul li").height();
  var slideUlWidth =  slideCount * slideWidth;
  
  $(".slider").css({"max-width":slideWidth, "height": slideHeight});
  $(".slider ul").css({"width":slideUlWidth });
  $(".slider ul li:last-child").prependTo($(".slider ul"));
  
  function moveLeft() {
    $(".slider ul").finish().animate({
      left: + slideWidth
    },700, function() {
      $(".slider ul li:last-child").prependTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  function moveRight() {
    $(".slider ul").finish().animate({
      left: - slideWidth
    },700, function() {
      $(".slider ul li:first-child").appendTo($(".slider ul"));
      $(".slider ul").css("left","");
    });
  }
  
  
  $(".next").on("click",function(){
    moveRight();
  });
  
  $(".prev").on("click",function(){
    moveLeft();
  });
  
  
});