var races;
var results;
var drivers;
var driverStandings;

var racesReq = new XMLHttpRequest();
racesReq.onload = racesListener;
racesReq.open("get", "./f1db_json/races.json", true);
racesReq.send();
var resultsReq = new XMLHttpRequest();
results.onload = resultsListener;
resultsReq.open("get", "./f1db_json/results.json", true);
resultsReq.send();
var driversReq = new XMLHttpRequest();
driversReq.onload = driversListener;
driversReq.open("get", "./f1db_json/drivers.json", true);
driversReq.send();
var driverStandingsReq = new XMLHttpRequest();
driverStandingsReq.onload = driverStandingsListener;
driverStandingsReq.open("get", "./f1db_json/driverStandings.json", true);
driverStandingsReq.send();

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



