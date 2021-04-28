$('#register-form').on('submit', function (e) {
    e.preventDefault();
    $_this = $(this)
    $formData = $_this.serialize();

    $submitBtn = $_this.find('.form__submit--btn');
    $submitBtnTxt = $submitBtn.text()

    $submitBtn.text('')
        .addClass('buttonspinner')
        .attr('disabled', true)

    $.ajax({
        url: '/private/register',
        type: $_this.attr('method'),
        data: $formData,
        complete: function (data) {
            $resp = JSON.parse(data.responseText);

            if (!$resp.success){
                $submitBtn.text($submitBtnTxt)
                    .removeClass('buttonspinner')
                    .attr('disabled', false);

                $.each($resp.errors, function(key,err){
                    $_this.find('input[name="Customers['+key+']"]')
                        .addClass('error');
                })
            }

            if ($resp.success){
                $submitBtn
                    .addClass('buttonspinner--success');

                setTimeout(function () {
                    $submitBtn.text($submitBtnTxt)
                        .removeClass('buttonspinner')
                        .attr('disabled', false);
                },1500);
                setTimeout(function () {
                    $_this.parent('.form__widget-h').removeClass('form__widget-h--active')
                    $('#login--widget').addClass('form__widget-h--active');
                },1000)
            }

            $_this.find('input').on('keydown', function () {
                $_this.find('input').removeClass('error')
            })
        }
    })
})


$('#login-form').on('submit', function (e) {
    e.preventDefault();
    $_this = $(this)
    $formData = $_this.serialize();

    $submitBtn = $_this.find('.form__submit--btn');
    $submitBtnTxt = $submitBtn.text()

    $submitBtn.text('')
        .addClass('buttonspinner')
        .attr('disabled', true)

    $.ajax({
        url: '/private/login',
        type: $_this.attr('method'),
        data: $formData,
        complete: function (data) {
            $resp = JSON.parse(data.responseText);

            if (!$resp.success){
                $submitBtn.text($submitBtnTxt)
                    .removeClass('buttonspinner')
                    .attr('disabled', false);

                $.each($resp.errors, function(key,err){
                    $_this.find('input[name="LoginForm['+key+']"]')
                        .addClass('error');
                })
            }

            if ($resp.success){
                $submitBtn
                    .addClass('buttonspinner--success');

                setTimeout(function () {
                    $submitBtn.text($submitBtnTxt)
                        .removeClass('buttonspinner')
                        .attr('disabled', false);
                },1500);
                setTimeout(function () {
                    $('#login--modal').removeClass('is-open')
                        .attr('aria-hidden', true);
                    window.location.reload()
                },1000)
            }

            $_this.find('input').on('keydown', function () {
                $_this.find('input').removeClass('error')
            })
        }
    })
})
