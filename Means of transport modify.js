const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var old_means_of_transport = document.getElementById("old_means_of_transport").value;
        var new_means_of_transport = document.getElementById("new_means_of_transport").value;
        if (old_means_of_transport && new_means_of_transport) {
            var sql_command = 'UPDATE Means_of_transport SET Means_of_transport = "' + new_means_of_transport +'" where Means_of_transport="' + old_means_of_transport + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("old_means_of_transport").value = "";
            document.getElementById("new_means_of_transport").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};