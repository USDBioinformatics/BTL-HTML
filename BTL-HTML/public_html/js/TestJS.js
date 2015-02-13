
$.ajax({
    url: 'http://localhost:8080/BTL-REST/resources/tools/names',
    type: 'GET',
    data: {
        format: 'json'
    },
    success: function (resp) {
        $("#notificationBar").addClass("successMessage").html("<h1>Success!</h1>");
        $.each(resp, function (i, f) {
            var tool_div_row = "<div class='toolRow'>" + "<h2>" + f + "</h2>" + "</div>";
            $(tool_div_row).appendTo("#tools");
        });


