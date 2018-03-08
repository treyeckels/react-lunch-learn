$(document).ready(function () {
    $('.hat-filter, .hat-type-filter').change(function (evt) {
        window.location.href = $(this).val();
    });

    $('input').change(function (evt) {
        window.location.href = $(this).val();
    });
});
