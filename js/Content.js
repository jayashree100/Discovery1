// import fetch from 'node-fetch'

fetch('http://localhost:3000/Content1')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    console.log(data);
    let innerHtml;
    innerHtml = `<p class = "titleOne"> ${data.TitleLine1}</p>
    <p class = "titleTwo"> ${data.TitleLine2}</p>
    <p class = "description"> ${data.Description}</p>
    <img class = "image1" src = "${data.image1}"/>
    <img class = "image2" src = "${data.image2}"/> 
    <img class = "imageBg" src = "${data.imageBg}"/>`
    document.querySelector("#content2").innerHTML = innerHtml;
}


