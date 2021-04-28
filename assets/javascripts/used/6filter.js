$('.filter__sort--selected--js').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.filter__sort--dropdown').slideToggle()
})

$('.js--clearfilters').click(function (e) {
    e.preventDefault();
    $(this).parent('form').find('input').removeAttr('checked').change()
})

$('.js--filterSort').click(function (e) {
    e.preventDefault();
    $val = $(this).attr('href');
    $('.js--formFilter').val($val).change()
})
