/**
 * Created by ABDO on 10/23/2015.
 */
$(document).ready(function() {
    console.log("heheheehhe");

    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    var $input = $('.datepicker').pickadate()
    var picker = $input.pickadate('picker')
    picker.set('select', new Date())
});