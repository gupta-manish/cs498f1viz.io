var races;
var results;
var drivers;
var driverStandings;

var xmlReq = new XMLHttpRequest();
xmlReq.onload = racesListener;
xmlReq.open("get", "./f1db_json/races.json", true);
xmlReq.send();
xmlReq.onload = resultsListener;
xmlReq.open("get", "./f1db_json/results.json", true);
xmlReq.send();
xmlReq.onload = driversListener;
xmlReq.open("get", "./f1db_json/drivers.json", true);
xmlReq.send();
xmlReq.onload = driverStandingsListener;
xmlReq.open("get", "./f1db_json/driverStandings.json", true);
xmlReq.send();

function racesListener(e) {
    races = JSON.parse(this.responseText);
}
function resultsListener(e) {
    results = JSON.parse(this.responseText);
}
function driversListener(e) {
    drivers = JSON.parse(this.responseText);
}
function driverStandingsListener(e) {
    driverStandings = JSON.parse(this.responseText);
}



