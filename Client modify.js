const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var old_client_name = document.getElementById("old_client_name").value;
        var new_client_name = document.getElementById("new_client_name").value;
        var client_first_name = document.getElementById("client_first_name").value;
        var birthdate_client = document.getElementById("birthdate_client").value;
        var client_phone_number = document.getElementById("client_phone_number").value;
        var client_email = document.getElementById("client_email").value;
        var sex = document.getElementById("sex").value;
        if (old_client_name && new_client_name && client_first_name && birthdate_client && client_phone_number && client_email && sex) {
            var sql_command = 'UPDATE Client SET Client_name = "' + new_client_name + '", Client_first_name ="'+ client_first_name + '", Birthdate_client ="'+ birthdate_client + '", Client_phone_number ="'+ client_phone_number + '", Client_email ="'+ client_email + '", Sex ="'+ sex + '" where Client_name="' + old_client_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("old_client_name").value = "";
            document.getElementById("new_client_name").value = "";
            document.getElementById("client_first_name").value = "";
            document.getElementById("birthdate_client").value = "";
            document.getElementById("client_phone_number").value = "";
            document.getElementById("client_email").value = "";
            document.getElementById("sex").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};