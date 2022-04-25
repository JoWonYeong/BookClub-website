var $name;
var $number;
var $month;
var $date;

$(document).ready(function () {
    clickEvent();
});

function clickEvent() {
    $('#submit1').click(function () {
        info();
        $('.info').hide();
        $('.rent').fadeIn(500);
    });
    $('#submit2').click(function () {
        if (bookCount() > 3) {
            alert('책은 3권까지 대여 가능합니다.');
        }
        else if (bookCount() == 0) {
            alert('책을 선택해 주세요.');
        }
        else {
            alert(`${$name}(${$number})님 ${$month}월 ${$date}일에 대여 예약되었습니다.`);
            $('.rent').hide();
            $('.info').show();
        }
    });
}

function info() {
    $name = $('input#setName').val();
    $number = $('input#setNumber').val();
    $month = $('.setMonth option:selected').val();
    $date = $('input.setDate').val();
}

function bookCount() {
    var count = $('input:checkbox[name=book]:checked').length;
    return count;
}