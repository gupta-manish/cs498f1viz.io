var races;

var xmlReq = new XMLHttpRequest();
xmlReq.onload = reqListener;
xmlReq.open("get", "./f1db_json/races.json", true);
xmlReq.send();

function reqListener(e) {
    races = JSON.parse(this.responseText);
}



