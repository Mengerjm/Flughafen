$(document).ready(function() {

        $('#planeTable').DataTable( {
                "order": [[ 0, "asc" ]],
                "ajax": {
                        url: 'http://localhost:8080/api/plane',
                        dataSrc: ''
                    },
                "columns": [
                    { "data": "planeBrand" },
                    { "data": "fuel" },
                    { "data": "fuelCapacity" },
                    { "data": function( data, type, row){

                        var toReturn = "";

                        $.each(data.flightTable, function (index, current){
                            toReturn = toReturn + current.airportName + ", ";
                        });

                        return toReturn;

                    }}

                ]
         } );


    // Functionality for interaction when clicking on rows of the table
        $('#planeTable tbody').on( 'click', 'tr', function () {
            console.log("hallo ik heb geklikt");
            if ( $(this).hasClass('selected') ) {
                $(this).removeClass('selected');
            }
            else {
                deselect();
                $(this).addClass('selected');
                var table = $('#planeTable').DataTable();
                var data = table.row(this).data();
                console.log(data);
                apiGetSinglePlane(data.id);
                $('#myModal').modal('toggle');
            }
        });

} );

function getData() {
      var api = "http://localhost:8080/api/plane";
        $.get(api, function(data){
            if (data){
                setData(data);
            }
        });
}

function setData(data){
    $("#planeTable").DataTable().clear();
    $("#planeTable").DataTable().rows.add(data);
    $("#planeTable").DataTable().columns.adjust().draw();
}

// Get the data of a plane using an id
function apiGetSinglePlane(planeId){
    var api = "http://localhost:8080/api/plane/" + planeId;
    $.get(api, function(data){
        if (data){
            fillUpdateDiv(data);
        }
    });
}

// Fill the form with planedata when updating the plane
function fillUpdateDiv(plane){

    console.log(plane);
    $("#btndelete").attr('onclick', 'submitDelete(' + plane.planeId + ');');
    $("#btnsubmit").attr('onclick', 'submitEdit(' + plane.planeId + ');');
    document.getElementById("modal-title").innerHTML="Edit Plane information";
    $("#planeBrand").val(plane.planeBrand);
    $("#fuel").val(plane.fuel);
    $("#fuelCapacity").val(plane.fuelCapacity);

    $("#confirmbutton").css('display', 'inline-block');
    deleteID = plane.planeId;

    var elem = '<button type="button" class="btn btn-danger" onclick="submitDelete();">Confirm delete</button>';
    $('#confirmbutton').popover({
        animation:true,
        content:elem,
        html:true,
        container: myModal
    });
}

// Deselect all items in the table
function deselect(){
    $('#planeTable tr.selected').removeClass('selected');
   }

// Submit the edited data in the form to the database
function submitEdit(id){
// shortcut for filling the formData as a JavaScript object with the fields in the form
    console.log("Formdata");
    var formData = $("#planeForm").serializeArray().reduce(function(result, object){ result[object.name] = object.value; return result}, {});
    console.log(formData);
    var planeId = id;
    for(var key in formData){
        if(formData[key] == "" || formData == null) delete formData[key];
    }
    $.ajax({
        url:"/api/plane/" + id,
        type:"put",
        data: JSON.stringify(formData),
        contentType: "application/json; charset=utf-8",
        success: getData,
        error: function(error){
            displayError(error);
        }
    });
    deselect();
    $('#myModal').modal('toggle');
}

// Delete the plane in the database with the corresponding id
function submitDelete(){
    console.log("Deleting");
    var formData = $("#planeForm").serializeArray().reduce(function(result, object){ result[object.name] = object.value; return result}, {});
    var planeId = deleteID;
    $.ajax({
        url:"/api/plane/" + planeId,
        type:"delete",
        data: JSON.stringify(formData),
        success: getData,
        contentType: "application/json; charset=utf-8"
    });

    $('#myModal').modal('toggle');
    deselect();
}