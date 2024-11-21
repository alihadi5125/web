window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  var player = GetPlayer();
var finalPoints = player.GetVar("Points")
console.log("Final Points:", finalPoints);
var userId = window.userId || "1111"; 
// WARNING: For POST requests, body is set to null by browsers.
var data = JSON.stringify({
  "user_id": userId,
  "level_id": 1,
  "score": 1,
  "lesson_id": 1,
  "percent_achieved": 70,
  "passing_score": 70,
  "unlock": false,
  "is_passed": true,
  "min_score": 1,
  "max_score": 1,
  "points": finalPoints,
  "max_points": 1,
  "test_attempted": true
});

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://member.pathtoarabic.co.uk/api/save-test-results");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.send(data);
}

};
