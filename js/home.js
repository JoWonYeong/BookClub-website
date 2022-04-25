$(document).ready(function () {
    var $img = $('.img');
    var index = 0;

    $img.not('.active').hide();

    function translateImg() {
        $img.eq(index).removeClass('active');
        index++;
        if (index >= $img.length) {
            index = 0;
        }
        $img.eq(index).addClass('active');
        $img.not('.active').hide();
        $img.eq(index).fadeIn(400);
    }

    setInterval(translateImg, 4000);
});