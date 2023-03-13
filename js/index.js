$(document).ready(function () {
  setInterval(move, 3500);
});

function move() {
  $('.one').css(
    {
      left: '1000px',
    },
    800
  );
  $('.two').animate(
    {
      left: '-1000px',
    },
    800
  );
  $('.three').animate(
    {
      left: '0px',
    },
    800
  );

  changeClass();
}

function changeClass() {
  // 현재 1번에 위치한 사진 -> 3번으로
  $('.now1').addClass('three');
  $('.now1').removeClass('one');
  //   $('.now1').removeClass('center');
  //   $('.now1').addClass('around');
  $('.now1').removeClass('now1');

  // 현재 2번에 위치한 사진 -> 1번으로
  // center -> around
  $('.now2').addClass('one');
  $('.now2').removeClass('two');
  $('.now2').removeClass('center');
  $('.now2').addClass('around');
  $('.now2').removeClass('now2');

  // 현재 3번에 위치한 사진 -> 2번으로
  // around -> center
  $('.now3').addClass('two');
  $('.now3').removeClass('three');
  $('.now3').addClass('center');
  $('.now3').removeClass('around');
  $('.now3').removeClass('now3');

  $('.one').addClass('now1');
  $('.two').addClass('now2');
  $('.three').addClass('now3');
}
