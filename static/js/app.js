// from data.js
var tableData = data;
var inputElement = "";
//YOUR CODE HERE
//function to append data from each list item into data
function myFunction(item) {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");

    if (inputDate === item.datetime || inputDate =="") {
        if (inputCity === item.city || inputCity =="") {
            if (inputState === item.state || inputState =="") {
                if (inputCountry === item.country || inputCountry =="") {
                    if (inputShape === item.shape || inputShape =="") {
                        row.append('td').text(item.datetime);
                        row.append('td').text(item.city);
                        row.append('td').text(item.state);
                        row.append('td').text(item.country);
                        row.append('td').text(item.shape);
                        row.append('td').text(item.durationMinutes);
                        row.append('td').text(item.comments);
                    }
                }
            }
        }
    }

}
// Select the submit button
var submit = d3.select("#submit");
var clear = d3.select("clear");
submit.on("click", function () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node and get value
    inputDate = d3.select("#datetime").property("value");
    inputCity = d3.select("#city").property("value");
    inputState = d3.select("#state").property("value");
    inputCountry = d3.select("#country").property("value");
    inputShape = d3.select("#shape").property("value");

    tableData.forEach(myFunction);
});
