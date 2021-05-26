const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var staff_name = document.getElementById("staff_name").value;
        if (staff_name) {
            var sql_command = 'SELECT * FROM Staff where Staff_name = "' + staff_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(res => res.json())
            .then(res => ResultSearch(res))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("staff_name").value = "";

            ResultSearch = (res) => {
                document.getElementById("ID_staff").innerHTML = res[0].ID_staff
                document.getElementById("Staff_name").innerHTML = res[0].Staff_name
                document.getElementById("Staff_first_name").innerHTML = res[0].Staff_first_name
                document.getElementById("Birthdate_staff").innerHTML = res[0].Birthdate_staff
                document.getElementById("Staff_phone_number").innerHTML = res[0].Staff_phone_number
                document.getElementById("Professional_email").innerHTML = res[0].Professional_email
                document.getElementById("Hire_date").innerHTML = res[0].Hire_date
            }
        }
        else {
            console.log("Unknows values")
        }
    };
};