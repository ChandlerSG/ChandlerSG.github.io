// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  function applyAndRender() {
    applyFilter(reddify);
    applyFilterNoBackground(decreaseBlue);
    applyFilterNoBackground(increaseGreenByBlue)
  }


  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    var row = image[i];
    for (var j = 0; j < row.length; j++) {
      var rgbString = row[j];

      var rgbNumbers = rgbStringToArray(rgbString);

      filterFunction(rgbNumbers);

      rgbString = rgbArrayToString(rgbNumbers);
      row[j] = rgbString;

    }
  }



}


// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var backgroundColor = image[0][0];
  for (var a = 0; a < image.length; a++) {
    for (var i = 0; i < image[a].length; i++) {
      var rgbString = image[a][i];

      if (rgbString !== backgroundColor) {
        var rgbNumbers = rgbStringToArray(rgbString);
        filterFunction(rgbNumbers);
        rgbString = rgbArrayToSting(rgbNumbers);
        image[a][i] = rgbString;
      }
    }
  }



}


// TODO 5: Create the keepInBounds function
function keepInBounds(num) {

  var max = Math.max(num, 0);
  var min = Math.min(max, 255);

  return min;
}
console.log(keepInBounds(-30));
console.log(keepInBounds(300));
console.log(keepInBounds(127));


// TODO 3: Create reddify function
function reddify(array) {
  array[RED] = 200
}


// TODO 6: Create more filter functions
function decreaseBlue(array) {
  array[GREEN] = keepInBounds(array[BLUE] - 50)
}
function increaseGreenByBlue(array) {
  array[GREEN] = keepInBounds(array[BLUE] + array[GREEN])
}


// CHALLENGE code goes below here
