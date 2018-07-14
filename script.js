var races;
var results;
var drivers;
var driverStandings;

var racesReq = new XMLHttpRequest();
racesReq.onload = racesListener;
racesReq.open("get", "./f1db_json/races.json", true);
racesReq.send();
var resultsReq = new XMLHttpRequest();
resultsReq.onload = resultsListener;
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
    var racesDirty = races;
	races = {};
	for (var i = 0; i < racesDirty.length; i++) {
		races[racesDirty[i].raceId] = racesDirty[i];
	}
}
function resultsListener(e) {
    results = JSON.parse(this.responseText);
    var resultsDirty = results;
	results = {};
	for (var i = 0; i < resultsDirty.length; i++) {
		results[resultsDirty[i].resultId] = resultsDirty[i];
	}
}
function driversListener(e) {
    drivers = JSON.parse(this.responseText);
    var driversDirty = drivers;
	drivers = {};
	for (var i = 0; i < driversDirty.length; i++) {
		drivers[driversDirty[i].driverId] = driversDirty[i];
	}
}
function driverStandingsListener(e) {
    driverStandings = JSON.parse(this.responseText);
    var driverStandingsDirty = driverStandings;
	driverStandings = {};
	for (var i = 0; i < driverStandingsDirty.length; i++) {
		driverStandings[driverStandingsDirty[i].driverStandingsId] = driverStandingsDirty[i];
	}
}



var getAllDrivers = function(year)
{
	var driverSet = new Set();
	for(var key in driverStandings){
		if(driverStandings.hasOwnProperty(key)){
			if(races[driverStandings[key].raceId].year == year){
				driverSet.add(drivers[driverStandings[key].driverId]);
			}
		}
	}
	driverArray = Array.from(driverSet);
	return driverArray;
}

var getAllRaces = function(year)
{
	var raceSet = new Set();
	for(var key in races){
		if(races.hasOwnProperty(key)){
			if(races[key].year == year){
				raceSet.add(races[key]);
			}
		}
	}
	raceArray = Array.from(raceSet);
	raceArray.sort(function(race1,race2){
		date1 = race1.date.split('-');
		date2 = race2.date.split('-');
		y1 = parseInt(date1[0]);
		y2 = parseInt(date2[0]);
		if(y1 > y2){
			return 1;
		}
		else if(y2 > y1){
			return -1
		}
		m1 = parseInt(date1[1]);
		m2 = parseInt(date2[1]);
		if(m1 > m2){
			return 1;
		}
		else if(m2 > m1){
			return -1
		}
		d1 = parseInt(date1[2]);
		d2 = parseInt(date2[2]);
		if(d1 > d2){
			return 1;
		}
		else if(d2 > d1){
			return -1
		}
	});
	return raceArray;
}

var getDriverPointsArray = function(driver,year,raceArray)
{
	var pointArray = [0];
	for (var i = 0; i < raceArray.length; i++) {
		pointArray.push(0);
	}
	for(var key in driverStandings){
		if(driverStandings.hasOwnProperty(key)){
			if(races[driverStandings[key].raceId].year == year && driverStandings[key].driverId == driver.driverId){
				for (var i = 0; i < raceArray.length; i++) {
					if(driverStandings[key].raceId == raceArray[i].raceId){
						pointArray[i+1] = driverStandings[key].points;
					}
				}
			}
		}
	}
	for (var i = 2; i < pointArray.length; i++) {
		if(pointArray[i] == 0)
			pointArray[i] = pointArray[i-1]
	}
	return pointArray;
}

var getIndexArray = function(length)
{
	ra = [];
	for (var i = 0; i < length; i++) {
		ra.push(i);
	}
	return ra;
}



