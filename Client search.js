const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var client_name = document.getElementById("client_name").value;
        if (client_name) {
            var sql_command = 'SELECT * FROM Client where Client_name = "' + client_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(res => res.json())
            .then(res => ResultSearch(res))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("client_name").value = "";

            ResultSearch = (res) => {
                document.getElementById("Client_name").innerHTML = res[0].Client_name
                document.getElementById("Client_first_name").innerHTML = res[0].Client_first_name
                document.getElementById("Birthdate_client").innerHTML = res[0].Birthdate_client
                document.getElementById("Client_phone_number").innerHTML = res[0].Client_phone_number
                document.getElementById("Client_email").innerHTML = res[0].Client_email
                document.getElementById("ID_delivery_address_client").innerHTML = res[0].ID_delivery_address_client
                document.getElementById("ID_personal_address_client").innerHTML = res[0].ID_personal_address_client
                document.getElementById("ID_staff").innerHTML = res[0].ID_staff
                document.getElementById("Sex").innerHTML = res[0].Sex
            }
        }
        else {
            console.log("Unknows values")
        }
    };
};