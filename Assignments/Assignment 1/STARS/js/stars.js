/**
 * Created by ABDO on 10/15/2015.
 */
function addFollowupAction (id){
    console.log("adding div");
    console.log("id = " + id);
    $('#action'+id).toggle("slow");
}

$(document).ready(function() {
    console.log("hahhaha");
    var state;

    $('select').material_select();

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15 // Creates a dropdown of 15 years to control year
    });
    var $input = $('.datepicker').pickadate()
    var picker = $input.pickadate('picker')
    picker.set('select', new Date())
    $('#studnets tbody tr td.userInfo').click(function(){
        console.log("cliked");
        var id = $(this).parent().attr("id");
        console.log("ID = " + id);
        addFollowupAction(id);
    });
});