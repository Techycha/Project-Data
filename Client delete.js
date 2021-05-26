const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var client_name = document.getElementById("client_name").value;
        var client_first_name = document.getElementById("client_first_name").value;
        if (client_name && client_first_name) {
            var sql_command = 'DELETE FROM Client where Client_name = "' + client_name + '"and Client_first_name = "' + client_first_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("client_name").value = "";
            document.getElementById("client_first_name").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};