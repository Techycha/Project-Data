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
            var sql_command = 'SELECT * FROM Means_of_transport where Means_of_transport = "' + means_of_transport + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(res => res.json())
            .then(res => ResultSearch(res))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("means_of_transport").value = "";

            ResultSearch = (res) => {
                document.getElementById("ID_means_of_transport").innerHTML = res[0].ID_means_of_transport
                document.getElementById("Means_of_transport").innerHTML = res[0].Means_of_transport
                document.getElementById("Catalogue").innerHTML = res[0].Catalogue
            }
        }
        else {
            console.log("Unknows values")
        }
    };
};