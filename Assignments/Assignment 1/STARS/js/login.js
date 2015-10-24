/**
 * Created by ABDO on 10/24/2015.
 */
$(document).ready(function() {
    $('#modal1').openModal({
        dismissible: false,
        complete: function () {
            $('.container').show();
        }
    });
});