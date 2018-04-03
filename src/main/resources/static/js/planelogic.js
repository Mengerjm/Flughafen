    function getData() {

        $.ajax({
            url : "http://localhost:8080/api/plane/",
            type : "get",
            success : function(data) {
                var planeList = "Dit zijn de planes: </br>";

                $.each(data, function(index, current) {
                    var niceString = "</br>" + current.name;
                    planeList = planeList + niceString;
                });

                $("#planes").html(planeList);
            }
        });
    }

    function postData() {
        // Get values from input texts.
        var planeInput = {
            planeBrand: $("#planeBrandInput").val(),
            fuel: Number($("#fuelInput").val()),
            fuelCapacity: Number($("#fuelCapacityInput").val())
        };
 }

        var newPlaneObject = {
            planeBrand : planeBrand
            fuel : fuel
            fuelCapacity : fuelCapacity
        };

        var newPlane = JSON.stringify(newPlaneObject);

        $.ajax({
            url : "http://localhost:8080/api/plane/",
            type : "post",
            data : newPlane,
            contentType : "application/json",
            success : function(data) {
                $("#name").val("");
                getData();
            }
        });
    }

    $(document).ready(function() {
        getData();
    });
