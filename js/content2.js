// import fetch from 'node-fetch'

fetch('http://localhost:3000/Content2')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        appendData(data)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    console.log(data);
    let innerHtml;
    innerHtml = `<p class = "cn2-titleOne"> ${data.TitleLine1}</p>
    <p class = "cn2-titleTwo"> ${data.TitleLine2}</p>`
    document.querySelector("#heading2").innerHTML = innerHtml;
}


