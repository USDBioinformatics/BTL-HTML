$(document).ready(function () {

    $('#allNames').on('click', function (e) {
        callRest($(this).data("url"));
    });

    $('#allBets').on('click', function (e) {
        callRest($(this).data("url"));
    });

    $('#allBridges').on('click', function (e) {
        callRest($(this).data("url"));
    });

    function callRest(RestUrl, type) {
        $.ajax({
            url: RestUrl,
            type: 'GET',
            data: {
                format: 'json'
            },
            success: function (resp) {
                console.log("REST RESPONSE: " + resp);
                $("#notificationBar").empty(); //clears tool data currently displayed
                $("#tools").empty(); //clears tool data currently displayed
                $("#notificationBar").addClass("successMessage").html("<h1>Success!</h1>");
                
                $.each(resp, function (i, f) {
                    var tool_div_row = "<div class='toolRow'>" + "<h2>" + f + "</h2>" + "</div>";
                    $(tool_div_row).appendTo("#tools");
                });
            }
        });
    }
    ;

});