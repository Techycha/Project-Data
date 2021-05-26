const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var means_of_transport = document.getElementById("means_of_transport").value;
        if (means_of_transport) {
            var sql_command = 'INSERT INTO means_of_transport(Means_of_transport, Catalogue) VALUES ("' + means_of_transport + '",true)'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("means_of_transport").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};