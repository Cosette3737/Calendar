 // select the filter button/form/tablebody
let button = d3.select("#add-btn");
let form = d3.select("#form-id");
let tbody = d3.select("tbody");
let clearButton = d3.select("#clear-btn")
 //Create event handlers
button.on("click", runEnter);
form.on("submit", runEnter);
clearButton.on("click", );
var data = [{
  eventDate: "5/1/2021",
  eventTime: "9:00",
  eventInfo: "First Day at UpClick",
  datetime: "Fri Apr 09 2021 22:31:05 GMT-0500 (Central Daylight Time)"
},
{
  eventDate: "5/1/2021",
  eventTime: "4:00",
  eventInfo: "Dinner @ Freshii"
},
];

//Complete event handler
function runEnter() {
  
    //prevent page from refreshing
  d3.event.preventDefault();
    //select input from datetime entry
  let inputdate = d3.select("#eventdate");
  let dateValue = inputdate.property("value");
  console.log(dateValue);
  var parseDate = Date.parse(dateValue);
  console.log(parseDate);
  let inputTime = d3.select("#eventtime");
  //get the value of the input
  let timeValue = inputTime.property("value");
  console.log(timeValue);
  let inputEvent = d3.select("#eventinfo");
    //get the value of the input
  let eventValue = inputEvent.property("value");
  
  var dd = new Date(dateValue).getDate();
  var mm = new Date(dateValue).getMonth()+1;
  var yy = new Date(dateValue).getFullYear();
  var hh = new Date(timeValue).getHours();
  console.log(hh);
  var ms = new Date(timeValue).getMinutes();
  var x = yy + ',' + mm + ',' + dd + ' ' + hh + ':' + ms;
  console.log(x);
  var finaldate = new Date(x);
  console.log(finaldate);
  data.push({eventDate: (dateValue),
    eventTime: (timeValue),
    eventInfo: (eventValue)
              });
  //console.log(data)
    data.forEach((rowData) => { 
      let row = tbody.append("tr");
      Object.values(rowData).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
          });
        });
      };
