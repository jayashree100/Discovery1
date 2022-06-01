fetch('http://localhost:3000/Content3')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // console.log(data[0].image);
        appendData(data)
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });


function appendData(data) {
    let card1;
    card1 = `<img class="onhover" src="${data[0].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[0].Title}</p>
    <p class="DescriptionOfCard onhover">${data[0].Description}</p>`
    document.querySelector("#card0").innerHTML = card1;

    let card2;
    card2 = `<img class="onhover" src="${data[1].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[1].Title}</p>
    <p class="DescriptionOfCard onhover">${data[1].Description}</p>`
    document.querySelector("#card1").innerHTML = card2;

    let card3;
    card3 = `<img class="onhover" src="${data[2].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[2].Title}</p>
    <p class="DescriptionOfCard onhover">${data[2].Description}</p>`
    document.querySelector("#card2").innerHTML = card3;

    let card4;
    card4 = `<img class="onhover" src="${data[3].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[3].Title}</p>
    <p class="DescriptionOfCard onhover">${data[3].Description}</p>`
    document.querySelector("#card3").innerHTML = card4;

    let card5;
    card5 = `<img class="onhover" src="${data[4].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[4].Title}</p>
    <p class="DescriptionOfCard onhover">${data[4].Description}</p>`
    document.querySelector("#card4").innerHTML = card5;

    let card6;
    card6 = `<img class="onhover" src="${data[5].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[5].Title}</p>
    <p class="DescriptionOfCard onhover">${data[5].Description}</p>`
    document.querySelector("#card5").innerHTML = card6;

    let card7;
    card7 = `<img class="onhover" src="${data[6].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[6].Title}</p>
    <p class="DescriptionOfCard onhover">${data[6].Description}</p>`
    document.querySelector("#card6").innerHTML = card7;

    let card8;
    card8 = `<img class="onhover" src="${data[7].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[7].Title}</p>
    <p class="DescriptionOfCard onhover">${data[7].Description}</p>`
    document.querySelector("#card7").innerHTML = card8;

    let card9;
    card9 = `<img class="onhover" src="${data[8].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[8].Title}</p>
    <p class="DescriptionOfCard onhover">${data[8].Description}</p>`
    document.querySelector("#card8").innerHTML = card9;

    let card10;
    card10 = `<img class="onhover" src="${data[9].image} "  width="350 px" height="450vh" alt=""/>
    <p class="TitleOfCard onhover">${data[9].Title}</p>
    <p class="DescriptionOfCard onhover">${data[9].Description}</p>`
    document.querySelector("#card9").innerHTML = card10;

}


