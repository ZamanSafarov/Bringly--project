var readURL = function (input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('.form__avatar--img').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}


$(".form__inp--avatar").on('change', function () {
    readURL(this);
});

$(".sprite--camera-js").on('click', function () {
    $(".form__inp--avatar").click();
});
