const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var staff_name = document.getElementById("staff_name").value;
        var staff_first_name = document.getElementById("staff_first_name").value;
        if (staff_name && staff_first_name) {
            var sql_command = 'DELETE FROM Staff where Staff_name = "' + staff_name + '"and Staff_first_name = "' + staff_first_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("staff_name").value = "";
            document.getElementById("staff_first_name").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};