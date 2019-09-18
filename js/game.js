const numDivs = 36;
const maxHits = 10;

let hits = 0;
let firstHitTime = 0;
var div = {};

function round() {
  let divSelector = randomDivId();
  $(divSelector).addClass("target");
  $(divSelector).text(hits + 1);
  div.obj = divSelector;
  //if (hits == 0) {
    //firstHitTime = getTimestamp();
  //}  
  console.log(firstHitTime);
 

  if (hits == maxHits) {
    endGame();
  }
}

function endGame() {
  $("#container").addClass("d-none");
  let totalPlayedMillis = getTimestamp() - firstHitTime;
  let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
  $("#total-time-played").text(totalPlayedSeconds);

  $("#win-message").removeClass("d-none");
}

function handleClick(event) {
  if ($(event.target).hasClass("target")) {
    hits = hits + 1;
    $(event.target).removeClass("target");
    var divSelector = div.obj;
    $(divSelector).empty();
    round();
  } else {
    $(event.target).addClass('miss');
    function clearDiv() {
      $(event.target).removeClass('miss');
    }
    setTimeout(clearDiv, 1000);
  }
}

function init() {
  $("#AllField").addClass("d-none");
  function show() {
    $("#AllField").removeClass("d-none");
    $("#button-start").addClass('d-none');
    firstHitTime = getTimestamp();
  }
  $("#button-start").click(show);
  round();

  $(".game-field").click(handleClick);
  $("#button-reload").click(function() {
    location.reload();
    show();
  });
}

$(document).ready(init);
