const url = 'http://localhost:8080/';


var request = new Request(url, {
    method: 'POST',
    body: JSON.stringify({sqlRequest: "SHOW DATABASES"}),
    headers: {"Content-type": "application/json; charset=UTF-8"}
});

fetch(request)
.then(res => res.json())
.then(res => console.log(res))
.catch(error => alert("Erreur : " + error));