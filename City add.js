const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var city_name = document.getElementById("city_name").value;
        var postal_code = document.getElementById("postal_code").value;
        if (city_name && postal_code) {
            var sql_command = 'INSERT INTO City(City_name, Postal_code, Catalogue, ID_country) VALUES ("' + city_name + '",' + postal_code + ',true,1)'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("city_name").value = "";
            document.getElementById("postal_code").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};