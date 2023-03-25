var $name;
var $number;
var $month;
var $date;

$(document).ready(function () {
  formSet();
  clickEvent();
});

function clickEvent() {
  $('#submit1').click(function () {
    $name = $('input#setName').val();
    $number = $('input#setNumber').val();
    $month = $('.select-month option:selected').val();
    $date = $('.select-date option:selected').val();
    $('.info').hide();
    $('.rent').fadeIn(500);
  });
  $('#submit2').click(function () {
    if (bookCount() > 3) {
      alert('책은 3권까지 대여 가능합니다.');
    } else if (bookCount() == 0) {
      alert('책을 선택해 주세요.');
    } else {
      alert(
        `${$name}(${$number})님 ${$month}월 ${$date}일에 대여 예약되었습니다.`
      );
      $('.rent').hide();
      $('.info').show();
    }
  });
}

function bookCount() {
  var count = $('input:checkbox[name=book]:checked').length;
  return count;
}

function formSet() {
  const select_month = document.querySelector('.select-month');
  const select_date = document.querySelector('.select-date');
  makeOptions(select_month, 12);

  select_month.addEventListener('click', () => {
    while (select_date.firstChild) {
      select_date.removeChild(select_date.firstChild);
    }

    let month = select_month.options[select_month.selectedIndex].value;

    if ([1, 3, 5, 7, 8, 10, 12].includes(parseInt(month))) {
      makeOptions(select_date, 31);
    } else if (parseInt(month) == 2) {
      makeOptions(select_date, 28);
    } else {
      makeOptions(select_date, 30);
    }
  });
}

function makeOptions(element, number) {
  for (let i = 1; i <= number; i++) {
    let option = document.createElement('option');
    option.innerHTML = i;
    option.setAttribute('value', i);
    element.appendChild(option);
  }
}
