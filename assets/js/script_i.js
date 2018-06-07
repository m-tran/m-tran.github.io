$(document).ready(function() {

  $("#a").mouseover(
    function() {
      $("#a-s").css("display", "none");
      $("#a-u").css("display", "flex");
      $("cursor").css("cursor", "pointer");
      $("#a-text").css("font-size", "36px");
      $("#a-container").css("display", "inline-block")
  });

  $("#a").mouseout(
    function() {
      $("#a-s").css("display", "flex");
      $("#a-u").css("display", "none");
      $("cursor").css("cursor", "pointer");
      $("#a-text").css("font-size", "24px");
      $("#a-container").css("display", "none")
  });

  $("#b").mouseover(
    function() {
      $("#b-s").css("display", "none");
      $("#b-u").css("display", "flex");
      $("cursor").css("cursor", "pointer");
      $("#b-text").css("font-size", "36px");
      $("#b-container").css("display", "inline-block")
  });

  $("#b").mouseout(
    function() {
      $("#b-s").css("display", "flex");
      $("#b-u").css("display", "none");
      $("cursor").css("cursor", "pointer");
      $("#b-text").css("font-size", "24px");
      $("#b-container").css("display", "none")
  });

  $("#c").mouseover(
    function() {
      $("#c-s").css("display", "none");
      $("#c-u").css("display", "flex");
      $("cursor").css("cursor", "pointer");
      $("#c-text").css("font-size", "36px");
      $("#c-container").css("display", "inline-block")
  });

  $("#c").mouseout(
    function() {
      $("#c-s").css("display", "flex");
      $("#c-u").css("display", "none");
      $("cursor").css("cursor", "pointer");
      $("#c-text").css("font-size", "24px");
      $("#c-container").css("display", "none")
  });

  $('#webTicker-a').webTicker({
    height: '41px',
    speed: '100',
    startEmpty: 'false',
    duplicate: 'true',
    hoverpause: 'false',
  });

  $('#webTicker-b').webTicker({
    height: '41px',
    speed: '100',
    startEmpty: 'false',
    duplicate: 'true',
    hoverpause: 'false',
    direction: 'right'
  });

  $('#webTicker-c').webTicker({
    height: '41px',
    speed: '100',
    startEmpty: 'false',
    duplicate: 'true',
    hoverpause: 'false',
  });

  $('#webTicker-d').webTicker({
    height: '41px',
    speed: '100',
    startEmpty: 'false',
    duplicate: 'true',
    hoverpause: 'true',
    direction: 'right'
  });


  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }


  $('#myBtn').on("click",function(){
      $(window).scrollTop(0);
  });



})
