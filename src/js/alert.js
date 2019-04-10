(function (window) {
    'use strict';

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    function defineAlert() {

        var Alert = {};

        Alert.show = function (options) {
            if (event.target.id === "") {
                return console.log(new Error('event id not found'), 1);
            }
            let relatedTargetId = event.target.id;
            $('#' + relatedTargetId).keydown(false).css('pointer-events', 'none');

            let randomInt = getRandomInt(0, 9999);
            $('body').append('<div id="overlay" class="overlay' + randomInt + ' d-flex">' +
                '<div id="alert" class="col-lg-5 col-md-8 col-10 alert' + randomInt + '">' +
                '<div id="head-icon" class="head-icon' + randomInt + ' col-12 text-center p-2"></div>' +
                '<div id="head" class="head' + randomInt + ' col-12 text-center p-2">' + options.title + '</div>' +
                '<div id="content" class="content' + randomInt + ' col-12 p-2">' + options.text + '</div>' +
                '</div>' +
                '</div>');

            $('.content' + randomInt).append('<div class="form_inputs' + randomInt + ' row mt-4"></div>');
            if (typeof options.form !== "undefined") {
                if (typeof options.form != null) {
                    $('.form_inputs' + randomInt).append('<form class="col-12" name="' + options.form.form_name + '" id="' + options.form.form_id + '" action="' + options.form.form_action + '"></form>');
                }
                if (typeof options.form.inputs != null) {
                    $.each(options.form.inputs, function (key, value) {
                        if (typeof options.form != null && typeof options.form.form_id != null) {
                            $('#' + options.form.form_id).append('<input class="' + value.class + '" type="' + value.type + '" name="' + value.name + '" id="' + value.id + '" placeholder="' + value.placeholder + '" value="' + value.value + '">');
                        } else {
                            $('.form_inputs' + randomInt).append('<input class="' + value.class + '" type="' + value.type + '" name="' + value.name + '" id="' + value.id + '" placeholder="' + value.placeholder + '" value="' + value.value + '">');
                        }
                    });
                }
            }

            if (options.type === "success") {
                $('.head-icon' + randomInt).append('<i style="color: green" class="fas fa-check fa-2x"></i>');
            } else if (options.type === "warning") {
                $('.head-icon' + randomInt).append('<i style="color: #fbbb14" class="fas fa-exclamation-triangle fa-2x"></i>');
            } else if (options.type === "error") {
                $('.head-icon' + randomInt).append('<i style="color: #a4090b" class="fas fa-skull-crossbones fa-2x"></i>');
            } else if (options.type === "info") {
                $('.head-icon' + randomInt).append('<i style="color: #12a0ff" class="fas fa-info-circle fa-2x"></i>');
            }

            $('.alert' + randomInt).append('<div class="footer' + randomInt + ' text-center p-2 col-12"></div>').addClass('animated ' + options.openAnimateClass);
            if (options.showCancelButton === true) {
                let cancelButtonText;
                if (typeof options.cancelButtonText === "undefined") {
                    cancelButtonText = "Cancel";
                } else {
                    cancelButtonText = options.cancelButtonText;
                }
                $('.footer' + randomInt).append('<button class="col-6 btn rounded-0 btn-danger cancel' + randomInt + '">' + cancelButtonText + '</button>');
            }
            if (options.showConfirmButton === true) {
                let confirmButtonText;
                if (typeof options.confirmButtonText === "undefined") {
                    confirmButtonText = "Okay";
                } else {
                    confirmButtonText = options.confirmButtonText;
                }
                $('.footer' + randomInt).prepend('<button class="col-6 rounded-0 btn btn-primary okay' + randomInt + '">' + confirmButtonText + '</button>');
            }

            $('.overlay' + randomInt).addClass('d-flex justify-content-center align-items-center');

            $(document).keyup(function (event) {
                if (event.which === 27) {
                    $('#' + relatedTargetId).removeAttr('style').keydown();
                    $('.overlay' + randomInt).addClass('animated ' + options.closeAnimateClass + ' faster');
                    setTimeout(function () {
                        $('.overlay' + randomInt).remove();
                    }, 500);
                }
            });
            $('.cancel' + randomInt).click(function () {
                $('#' + relatedTargetId).removeAttr('style').keydown();
                $('.overlay' + randomInt).addClass('animated ' + options.closeAnimateClass + ' faster');
                setTimeout(function () {
                    $('.overlay' + randomInt).remove();
                }, 500);
            });

            $('.okay' + randomInt).click(function () {
                $('#' + relatedTargetId).removeAttr('style').keydown();
                if (typeof options.okFunction === "function") {
                    options.okFunction();
                    $('.overlay' + randomInt).addClass('animated ' + options.closeAnimateClass + ' faster');
                    setTimeout(function () {
                        $('.overlay' + randomInt).remove();
                    }, 700);
                } else {
                    $('.overlay' + randomInt).addClass('animated ' + options.closeAnimateClass + ' faster');
                    setTimeout(function () {
                        $('.overlay' + randomInt).remove();
                    }, 700);
                }
            });
        };

        Alert.little = function (options) {

            let randomInt = getRandomInt(0, 999);

            if (typeof options.type !== "undefined" && typeof options.title !== "undefined" && typeof options.text !== "undefined") {

                const positions = [
                    'top-right',
                    'top-left',
                    'bottom-right',
                    'bottom-left'
                ];

                let selected_position = null;
                let positionClass = null;
                if (positions.indexOf(options.position) !== -1) {
                    selected_position = positions.indexOf(options.position);
                    positionClass = positions[selected_position];
                }else {
                    selected_position = "top-right";
                    positionClass = positions[selected_position];
                }
                console.log(positionClass);

                $('body').append('<div class="row"><div id="little" class="'+positionClass+' d-flex animated flipInX mr-lg-4 ml-lg-4 m-0 col-lg-4 col-12 row little' + randomInt + '">' +
                    '<div class="col-2 m-0 pr-0 head-icon' + randomInt + '"></div>' +
                    '<div class="col-10 pl-0 text' + randomInt + '" id="title">' + options.title + '</div>' +
                    '<div class="col-12 mt-2 text' + randomInt + '" id="text">' + options.text + '</div>' +
                    '</div></div>');

                if (options.type === "success") {
                    $('#little .head-icon' + randomInt).append('<i style="color: #86ff66" class="fas fa-check fa-2x"></i>');
                } else if (options.type === "warning") {
                    $('#little .head-icon' + randomInt).append('<i style="color: #fbbb14" class="fas fa-exclamation-triangle fa-2x"></i>');
                } else if (options.type === "error") {
                    $('#little .head-icon' + randomInt).append('<i style="color: #a4090b" class="fas fa-skull-crossbones fa-2x"></i>');
                } else if (options.type === "info") {
                    $('#little .head-icon' + randomInt).append('<i style="color: #12a0ff" class="fas fa-info-circle fa-2x"></i>');
                }

                let delay = null;
                if (typeof options.delay === "undefined" || options.delay === "") {
                    delay = 1500;
                } else {
                    delay = options.delay;
                }
                setTimeout(function () {
                    $('.little' + randomInt).removeClass('flipInX').addClass('fadeOutUpBig');
                    setTimeout(function () {
                        $('.little' + randomInt).remove();
                    }, 1000);
                }, delay);

            }
        };

        return Alert;

    }

    if (typeof (Alert) === "undefined") {
        window.Alert = defineAlert();
    }
    return Alert;
})(window);