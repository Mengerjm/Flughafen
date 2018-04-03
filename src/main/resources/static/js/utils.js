var baseUrl = "http://localhost:8080/api/"
//var baseUrl ="/api/";

$(document).ready(function(){
console.log("doc ready");

$('#modalButton').click(activateModal);

function activateModal (){
$('#myModalInput').modal('toggle');
}

$("#addButton").click(function() {


        var jsonObject = {
            planeBrand: $("#planeBrandInput").val(),
            fuel: Number($("#fuelInput").val()),
            fuelCapacity: Number($("#fuelCapacityInput").val())
        };

        console.log(JSON.stringify(jsonObject));

        $.ajax({
                 contentType : "application/json",
                 // waar moet hij de request op uitvoeren
                 url : baseUrl+"plane",
                 // type actie
                 type : "post",
                 data: JSON.stringify(jsonObject),
                 // als de actie lukt, voer deze functie uit
                 success: function(data){ // so the data is the bulb of the response of the Spring Boot REST controller
                      console.log(data);
                 }
             });

             updateTable();
             $('#myModalInput').modal('toggle');
      });

});


var updateTable = function(){
  console.log("ik start update");

    $('#planeTable').DataTable().ajax.reload();
 }


$("#updateButton").click(function() {
console.log("ik klik de update knop");
  updateTable();
     });


function createPlaneString(plane){
   result ="<tr><td>"+plane.planeBrand+"</td><td>"+plane.fuel+"</td><td>"+plane.fuelCapacity+"</td></tr>";

   return result;
   }