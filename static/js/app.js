// select the filter button/form/tablebody
let schedbutton = d3.select("#datetime");
let form = d3.select("#form-id");
let tbody = d3.select("tbody");
//let clearButton = d3.select("#clear-btn")
let addButton = d3.select("#add-btn")
 //Create event handlers
//schedbutton.on("click", runEnter);
form.on("submit", runEnter);
//clearButton.on("click", );
addButton.on("click", runEnter);
//Default scheduled events
var data = [{
  eventDate: "5/1/2021",
  eventTime: "09:00",
  eventInfo: "First Day at UpClick",
  datetime: "Sat May 01 2021 09:05:15 GMT-0500 (Central Daylight Time)"
},
{
  eventDate: "5/1/2021",
  eventTime: "4:00",
  eventInfo: "Dinner @ Freshii",
  datetime: "Sat May 01 2021 04:05:15 GMT-0500 (Central Daylight Time)"
},
];
//sort function for table

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      if(sortOrder == -1){
          return b[property].localeCompare(a[property]);
      }else{
          return a[property].localeCompare(b[property]);
      }        
  }
}
//Complete event handler

function runEnter() {
//prevent page from refreshing
 
  d3.event.preventDefault();
    //select input from datetime entry
  let inputdate = d3.select("#datetime");
  let dateValue = new Date(inputdate.property("value"));
  let dateValueString = dateValue.toString();
  let inputEvent = d3.select("#eventinfo");
 //get the value of the input
  var yy = dateValue.getFullYear();
  var mm = dateValue.getMonth()+1;
  var dd = dateValue.getDate();
  var hh = dateValue.getHours();
  //console.log(hh);
  var ms = dateValue.getMinutes()+26;
  var x = mm + '/' + dd + '/' + yy;
  var y = hh + ':' + ms + ' ';
  //console.log(typeof(y));
  let eventValue = inputEvent.property("value");
  data.push({eventDate: (x),
    eventTime: (y),
    eventInfo: (eventValue),
    datetime: (dateValueString)
              });
  //console.log(data);
  let newData = data.sort(dynamicSort("datetime"));
  //console.log(newData);
  //clear table
  tbody.html("");
  //fill table
  newData.forEach((rowData) => { 
    let row = tbody.append("tr");
    Object.values(rowData).forEach((value) => {
      let cell = row.append("td");
      cell.text(value);
      
    });
  })
setAlert();
function setAlert () {
  //console.log(newData[1].datetime);
  myTime = new Date();
  //console.log(new Date);
  let i = 0;
  while (i < newData.length) {
   if ((Date.parse(myTime)) > (Date.parse(newData[i].datetime))){
    alert(((`You missed this appointment: ` + newData[i].eventInfo +  ` at ` + newData[i].datetime)))
   }else if ((Date.parse(myTime)) === (Date.parse(newData[i].datetime))){
      console.log((newData[i].datetime, "You have an event now!"));
   }else{
      alert((newData[i].eventInfo + 'is scheduled'));
    }
    i++}
  }}
