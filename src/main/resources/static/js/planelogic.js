    function getData() {

        $.ajax({
            url : "http://localhost:8080/api/plane/",
            type : "get",
            success : function(data) {
                var writerList = "Dit zijn de planes: </br>";

                $.each(data, function(index, current) {
                    var niceString = "</br>" + current.name;
                    writerList = writerList + niceString;
                });

                $("#planes").html(planeList);
            }
        });
    }

    function postData() {
        // Get values from input texts.
        var inputName = $("#name").val();

        if(inputName == "") {
            $("#errorMessage").val("Dat ging niet goed, sorry Rick.")
            return;
        }

        var newWriterObject = {
            name : inputName
        };

        var newWriter = JSON.stringify(newWriterObject);

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
