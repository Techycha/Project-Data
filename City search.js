const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var city_name = document.getElementById("city_name").value;
        if (city_name) {
            var sql_command = 'SELECT * FROM City where City_name = "' + city_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(res => res.json())
            .then(res => ResultSearch(res))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("city_name").value = "";

            ResultSearch = (res) => {
                document.getElementById("ID_city").innerHTML = res[0].ID_city
                document.getElementById("City_name").innerHTML = res[0].City_name
                document.getElementById("Postal_code").innerHTML = res[0].Postal_code
                document.getElementById("Catalogue").innerHTML = res[0].Catalogue
                document.getElementById("ID_country").innerHTML = res[0].ID_country
            }
        }
        else {
            console.log("Unknows values")
        }
    };
};