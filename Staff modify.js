const url = 'http://localhost:8080/';

var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

window.onload = function() {
    document.getElementById('sumbit-button').onclick = function() {
        var old_staff_name = document.getElementById("old_staff_name").value;
        var new_staff_name = document.getElementById("new_staff_name").value;
        var staff_first_name = document.getElementById("staff_first_name").value;
        var birthdate_staff = document.getElementById("birthdate_staff").value;
        var staff_phone_number = document.getElementById("staff_phone_number").value;
        var professional_email = document.getElementById("professional_email").value;
        var hire_date = document.getElementById("hire_date").value;
        if (old_staff_name && new_staff_name && staff_first_name && birthdate_staff && staff_phone_number && professional_email && hire_date) {
            var sql_command = 'UPDATE Staff SET Staff_name = "' + new_staff_name + '", Staff_first_name ="'+ staff_first_name + '", Birthdate_staff ="'+ birthdate_staff + '", Staff_phone_number ="'+ staff_phone_number + '", Professional_email ="'+ professional_email + '", Hire_date ="'+ hire_date + '" where Staff_name="' + old_staff_name + '"'
            var request = new Request(url, {
                method: 'POST',
                body: JSON.stringify({sqlRequest: sql_command}),
                headers: {"Content-type": "application/json; charset=UTF-8"}
            });
            fetch(request)
            .then(console.log('success'))
            .catch(error => alert("Erreur : " + error));
            document.getElementById("old_staff_name").value = "";
            document.getElementById("new_staff_name").value = "";
            document.getElementById("staff_first_name").value = "";
            document.getElementById("birthdate_staff").value = "";
            document.getElementById("staff_phone_number").value = "";
            document.getElementById("professional_email").value = "";
            document.getElementById("hire_date").value = "";
        }
        else {
            console.log("Unknows values")
        }
    };
};