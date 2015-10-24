function addFollowupAction (id){
    console.log("adding div");
    console.log("id = " + id);
    $('#action'+id).toggle("slow");
}

function constructRecord(i,json){
    var tr;
    tr = $('<tr id="'+ i +'"/>');
    tr.append("<td>" + json[i].First_Name + "</td>");
    tr.append("<td>" + json[i].Last_Name + "</td>");
    tr.append("<td>" + json[i].Gender + "</td>");
    tr.append("<td>" + json[i].Program + "</td>");
    tr.append("<td>" + json[i].GPA + "</td>");
    tr.append("<td>" + json[i].Course + "</td>");
    tr.append("<td>" + json[i].Semester + "</td>");
    tr.append("<td>" + json[i].AtRiskCategory + "</td>");
    return tr;
}

function constructDiv(i){
    var division = $('<tr id="action'+i+'" style="display: none;" />');
    //division.append('<td>');
    //division.append('<div class="followUpAction" />');
    division.append('<form>');
    division.append('<label>Browser Select</label>');
    division.append('<select class="browser-default">');
    division.append('	<option value="" disabled selected>Choose your option</option>');
    division.append('<option value="1">Option 1</option>');
    division.append('<option value="2">Option 2</option>');
    division.append('<option value="3">Option 3</option>');
    division.append('</select>');
    division.append('<input type="date" class="datepicker">');
    division.append('</form>');
    //division.append('</td>');

    return division;
}

/**
 * Created by ABDO on 10/15/2015.
 */
$(document).ready(function() {
    console.log("hahhaha");
    var state;

//    $('.container').hide();
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

    /*
    var intTable;

    /*GET JSON*/
    /*
    $.getJSON("dummy.json",
        function (json) {
            var tr, division;

            for (var i = 0; i < json.length; i++) {
                tr = constructRecord(i,json);
                $('tbody').append(tr);

                division = constructDiv(i);
                $('tbody').append(division);

            }
        })
        .done(function() {
            //console.log( "second success" );
            $('#studnets').DataTable({
                "paging":   false,
                "ordering": false,
                "info":     false
            });
            intTable = $('#studnets').DataTable();

            $('#studnets tbody tr').click(function(){
                console.log("cliked");
                var id = $(this).attr("id");
                console.log("ID = " + id);
                addFollowupAction(id);
            });
        });

    /*End of GET JSON*/

});