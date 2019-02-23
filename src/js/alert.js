(function(window) {
	'use strict';
	function defineAlert() {
		var Alert = {};
		Alert.show = function (options) {
		    $('body').append('<div class="overlay d-flex">' +
                '<div class="col-lg-5 col-md-5 col-10 alert">' +
                    '<div class="head-icon col-12 text-center p-2"></div>' +
                    '<div class="head col-12 text-center p-2">'+options['title']+'</div>' +
                    '<div class="content col-12 p-2">'+options['text']+'</div>' +
                '</div>' +
            '</div>');
		    if (options['type'] === "success") {
		        $('.head-icon').append('<i style="color: green" class="fas fa-check fa-2x"></i>');
            }else if (options['type'] === "warning") {
                $('.head-icon').append('<i style="color: #fbbb14" class="fas fa-exclamation-triangle fa-2x"></i>');
            }else if (options['type'] === "error") {
                $('.head-icon').append('<i style="color: #a4090b" class="fas fa-skull-crossbones fa-2x"></i>');
            }
            $('.alert').append('<div class="footer text-center p-2 col-12"></div>');
		    if (options['showCancelButton'] === true) {
		        $('.footer').append('<button class="col-6 btn rounded-0 btn-danger cancel">'+options['cancelButtonText']+'</button>');
            }
            if (options['showConfirmButton'] === true) {
                $('.footer').prepend('<button class="col-6 rounded-0 btn btn-primary okay">'+options['confirmButtonText']+'</button>');
            }
            $(document).keyup(function(e) {
                if (e.keyCode === 27) {
                    $('.overlay').addClass('animated '+options['closeAnimateClass']);
                    setTimeout(function () {
                        $('.overlay').remove();
                    }, 1000);
                }
            });

            $('.overlay').addClass('d-flex justify-content-center align-items-center');
            $('.alert').addClass('animated '+options['openAnimateClass']);

            $('.cancel').click(function () {
                $('.overlay').addClass('animated '+options['closeAnimateClass']);
                setTimeout(function () {
                    $('.overlay').remove();
                }, 1000);
            });

            $('.okay').click(function () {
                $('.overlay').remove();
                Alert.show({
                    type: 'success',
                    title: 'Success',
                    text: 'Clicked Ok Button',
                    openAnimateClass: 'bounce',
                    closeAnimateClass: 'fadeOut',
                    showCancelButton:true,
                    showConfirmButton:false,
                    cancelButtonText: 'Close'
                })
            });

		};
		return Alert;
	}
	if (typeof(Alert) === "undefined") {
		window.Alert = defineAlert();
	}
	return Alert;
})(window);