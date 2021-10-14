(function () {
    'use strict'
    let input = $('#name');
    let input1 = $('#address');
    let input2 = $('#phone');
    let loader = $('#loader')


    $('#submit').click(function () {


        $('.error-input').hide();

        let name = $('#name');
        let address = $('#address');
        let phone = $('#phone');

        let hasError = false

        if (!name.val()) {
            input.css('border-color', 'red')
            name.siblings('.error-input').show();
            hasError = true;
        } else {
            input.css('border-color', '#b99150')

        }

        if (!address.val()) {
            input1.css('border-color', 'red')
            address.siblings('.error-input').show();
            hasError = true;
        } else {
            input1.css('border-color', '#b99150')

        }

        if (!phone.val()) {
            input2.css('border-color', 'red')
            phone.siblings('.error-input').show();
            hasError = true;
        } else {
            input2.css('border-color', '#b99150')

        }

        if (!hasError) {

            loader.css('display', 'flex')
            $.ajax({
                method: "POST",
                url: "https://itlogia.ru/test/checkout",
                data: {name: name.val(), address: address.val(), phone: phone.val()}
            })
                .done(function (message) {
                    loader.hide();
                    console.log(message);
                    if (message.success) {

                        alert('Спасибо за Ваш заказ. Мы скоро свяжемся с Вами!')
                    } else {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ')
                    }
                });

        }

    });


}());