document.addEventListener("DOMContentLoaded", function() {
    console.log('Your document is ready!');
});

let year = document.getElementById("year");
let month = document.getElementById("month");
let day = document.getElementById("day");

function nasa() {
    var request = new XMLHttpRequest();

    let formattedDate = getFormattedDate();
    console.log(formattedDate)   
    
    request.open('GET',
        'https://api.nasa.gov/planetary/apod?api_key=WOm4GMARpXmu2UghOrJklloUZuKS8TKhmbFwcjSZ&date=' +
        formattedDate, [true])
    
    request.send()
    
    request.onload = function() {
        var data = JSON.parse(this.response)
        if (request.status >= 200 && request.status < 400) {
            console.log('Loaded')
            console.log(data)
            document.getElementById("description").innerHTML = data.explanation
            document.getElementById("apod").setAttribute("src", data.url)
        } 
        else {
            console.log(data)
            $("#apod").empty();
            $("#description").empty();
            document.getElementById("errorMessage").innerHTML = data.msg
        }
    }
}

function getFormattedDate() {
    let chosenDate = year.value + "-" + month.value + "-" + day.value
    console.log(chosenDate)
    return chosenDate;
}