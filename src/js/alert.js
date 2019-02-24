(function (window) {
    'use strict';

    function defineAlert() {

        var Alert = {};

        Alert.show = function (options) {

            $('body').append('<div class="overlay d-flex">' +
                '<div class="col-lg-5 col-md-8 col-10 alert">' +
                '<div class="head-icon col-12 text-center p-2"></div>' +
                '<div class="head col-12 text-center p-2">' + options.title + '</div>' +
                '<div class="content col-12 p-2">' + options.text + '</div>' +
                '</div>' +
                '</div>');

            $('.content').append('<div class="form_inputs row mt-4"></div>');
            if (typeof options.form !== "undefined") {
                if (typeof options.form != null) {
                    $('.form_inputs').append('<form class="col-12" name="' + options.form.form_name + '" id="' + options.form.form_id + '" action="' + options.form.form_action + '"></form>');
                }
                if (typeof options.form.inputs != null) {
                    $.each(options.form.inputs, function (key, value) {
                        if (typeof options.form != null && typeof options.form.form_id != null) {
                            $('#'+options.form.form_id).append('<input class="' + value.class + '" type="' + value.type + '" name="' + value.name + '" id="' + value.id + '" placeholder="' + value.placeholder + '" value="' + value.value + '">');
                        }else {
                            $('.form_inputs').append('<input class="' + value.class + '" type="' + value.type + '" name="' + value.name + '" id="' + value.id + '" placeholder="' + value.placeholder + '" value="' + value.value + '">');
                        }
                    });
                }
            }

            if (options.type === "success") {
                $('.head-icon').append('<i style="color: green" class="fas fa-check fa-2x"></i>');
            } else if (options.type === "warning") {
                $('.head-icon').append('<i style="color: #fbbb14" class="fas fa-exclamation-triangle fa-2x"></i>');
            } else if (options.type === "error") {
                $('.head-icon').append('<i style="color: #a4090b" class="fas fa-skull-crossbones fa-2x"></i>');
            } else if (options.type === "info") {
                $('.head-icon').append('<i style="color: #12a0ff" class="fas fa-info-circle fa-2x"></i>');
            }

            $('.alert').append('<div class="footer text-center p-2 col-12"></div>').addClass('animated ' + options.openAnimateClass);
            if (options.showCancelButton === true) {
                let cancelButtonText;
                if (typeof options.cancelButtonText === "undefined") {
                    cancelButtonText = "Cancel";
                } else {
                    cancelButtonText = options.cancelButtonText;
                }
                $('.footer').append('<button class="col-6 btn rounded-0 btn-danger cancel">' + cancelButtonText + '</button>');
            }
            if (options.showConfirmButton === true) {
                let confirmButtonText;
                if (typeof options.confirmButtonText === "undefined") {
                    confirmButtonText = "Okay";
                } else {
                    confirmButtonText = options.confirmButtonText;
                }
                $('.footer').prepend('<button class="col-6 rounded-0 btn btn-primary okay">' + confirmButtonText + '</button>');
            }

            $('.overlay').addClass('d-flex justify-content-center align-items-center');


            $(document).keyup(function (event) {
                if (event.which === 27) {
                    $('.overlay').addClass('animated ' + options.closeAnimateClass);
                    setTimeout(function () {
                        $('.overlay').remove();
                    }, 500);
                }
            });
            $('.cancel').click(function () {
                $('.overlay').addClass('animated ' + options.closeAnimateClass);
                setTimeout(function () {
                    $('.overlay').remove();
                }, 500);
            });

            $('.okay').click(function () {
                if (typeof options.okFunction === "function") {
                    $('.overlay').remove();
                    options.okFunction();
                } else {
                    $('.overlay').addClass('animated ' + options.closeAnimateClass);
                    setTimeout(function () {
                        $('.overlay').remove();
                    }, 500);
                }
            });

        };

        return Alert;

    }

    if (typeof (Alert) === "undefined") {
        window.Alert = defineAlert();
    }
    return Alert;
})(window);