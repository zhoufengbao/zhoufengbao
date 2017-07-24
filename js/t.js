
var callback = function(){
  // Handler when the DOM is fully loaded
var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
var firstDate = new Date('3/6/2017');
var secondDate = new Date();

var diffDays = Math.floor(Math.abs((secondDate.getTime() - firstDate.getTime())/(oneDay)));

document.getElementById('days').innerHTML = diffDays
};

if (
    document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
) {
  callback();
} else {
  document.addEventListener("DOMContentLoaded", callback);
}
