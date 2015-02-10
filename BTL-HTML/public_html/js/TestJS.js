document.addEventListener("DOMContentLoaded", function(event) {
    alert("TEST!");

    $.ajax({
        url: 'http://206.176.2.147:8080/BTL-REST/resources/tools',
        type: 'GET',
        success: function(resp) {
            alert(resp);
        }
    });

});

