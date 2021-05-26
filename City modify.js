const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var old_city_name = document.getElementById("old_city_name").value;
        var new_city_name = document.getElementById("new_city_name").value;
        var postal_code = document.getElementById("postal_code").value;
        if (old_city_name && new_city_name && postal_code) {
            var sql_command = 'UPDATE City SET City_name = "' + new_city_name + '", Postal_code ="'+ postal_code + '" where City_name="' + old_city_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("old_city_name").value = "";
            document.getElementById("new_city_name").value = "";
            document.getElementById("postal_code").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};