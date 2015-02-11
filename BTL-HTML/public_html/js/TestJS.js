document.addEventListener("DOMContentLoaded", function(event) {
    alert("TEST!");

    $.ajax({
        url: 'http://localhost:8080/BTL-REST/resources/tools',
        type: 'GET',
        success: function(resp) {
            alert(resp);
        }
    });

});

