"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// swap function util for sorting algorithms takes input of 2 DOM elements with .style.height feature
function swap(el1, el2) {
  console.log('In swap()');
  var temp = el1.style.height;
  el1.style.height = el2.style.height;
  el2.style.height = temp;
} // Disables sorting buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it


function disableSortingBtn() {
  document.getElementById("b").disabled = true;
  document.getElementById("i").disabled = true;
  document.getElementById("m").disabled = true;
  document.getElementById("q").disabled = true;
  document.getElementById("s").disabled = true;
} // Enables sorting buttons used in conjunction with disable


function enableSortingBtn() {
  document.getElementById("b").disabled = false;
  document.getElementById("i").disabled = false;
  document.getElementById("m").disabled = false;
  document.getElementById("q").disabled = false;
  document.getElementById("s").disabled = false;
} // Disables size slider used in conjunction with enable, so that we can disable during sorting and enable buttons after it


function disableSizeSlider() {
  document.querySelector("#arr_sz").disabled = true;
} // Enables size slider used in conjunction with disable


function enableSizeSlider() {
  document.querySelector("#arr_sz").disabled = false;
} // Disables newArray buttons used in conjunction with enable, so that we can disable during sorting and enable buttons after it


function disableNewArrayBtn() {
  document.querySelector(".newArray").disabled = true;
} // Enables newArray buttons used in conjunction with disable


function enableNewArrayBtn() {
  document.querySelector(".newArray").disabled = false;
} // Used in async function so that we can so animations of sorting, takes input time in ms (1000 = 1s)


function waitforme(milisec) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve('');
    }, milisec);
  });
} // Selecting size slider from DOM


var arraySize = document.querySelector('#arr_sz'); // Event listener to update the bars on the UI

arraySize.addEventListener('input', function () {
  console.log(arraySize.value, _typeof(arraySize.value));
  createNewArray(parseInt(arraySize.value));
}); // Default input for waitforme function (260ms)

var delay = 260; // Selecting speed slider from DOM

var delayElement = document.querySelector('#speed_input'); // Event listener to update delay time 

delayElement.addEventListener('input', function () {
  console.log(delayElement.value, _typeof(delayElement.value));
  delay = 320 - parseInt(delayElement.value);
}); // Creating array to store randomly generated numbers

var array = []; // // Call to display bars right when you visit the site
// createNewArray();
// To create new array input size of array

function createNewArray() {
  var noOfBars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 60;
  // calling helper function to delete old bars from dom
  deleteChild(); // creating an array of random numbers 

  array = [];

  for (var i = 0; i < noOfBars; i++) {
    array.push(Math.floor(Math.random() * 250) + 1);
  }

  console.log(array); // select the div #bars element

  var bars = document.getElementById("bars"); // create multiple element div using loop and adding class 'bar col'

  for (var _i = 0; _i < noOfBars; _i++) {
    var bar = document.createElement("div");
    bar.style.height = "".concat(array[_i] * 2, "px");
    bar.classList.add('bar');
    bar.classList.add('flex-item');
    bar.classList.add("barNo".concat(_i));
    bars.appendChild(bar); // this.bars.css('transform', 'scaleX(-1)');
  } // $('#bars').css('transform', 'rotate(90deg)');

} // Helper function to delete all the previous bars so that new can be added


function deleteChild() {
  var bar = document.getElementById("bars");
  bar.innerHTML = '';
} // Selecting newarray button from DOM and adding eventlistener


var newArray = document.getElementById("n_array");
newArray.addEventListener("click", function () {
  console.log("From newArray " + arraySize.value);
  console.log("From newArray " + delay); // enableSortingBtn();
  // enableSizeSlider();

  createNewArray(arraySize.value);
});

function bubble() {
  var ele, i, j, _i2;

  return regeneratorRuntime.async(function bubble$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log('In bubbe()');
          ele = document.querySelectorAll(".bar");
          i = 0;

        case 3:
          if (!(i < ele.length - 1)) {
            _context.next = 24;
            break;
          }

          console.log('In ith loop');
          j = 0;

        case 6:
          if (!(j < ele.length - i - 1)) {
            _context.next = 20;
            break;
          }

          console.log('In jth loop');
          ele[j].style.background = 'blue';
          ele[j + 1].style.background = 'blue';

          if (!(parseInt(ele[j].style.height) > parseInt(ele[j + 1].style.height))) {
            _context.next = 15;
            break;
          }

          console.log('In if condition');
          _context.next = 14;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 14:
          swap(ele[j], ele[j + 1]);

        case 15:
          ele[j].style.background = 'cyan';
          ele[j + 1].style.background = 'cyan';

        case 17:
          j++;
          _context.next = 6;
          break;

        case 20:
          ele[ele.length - 1 - i].style.background = 'green';

        case 21:
          i++;
          _context.next = 3;
          break;

        case 24:
          ele[0].style.background = 'green';

          for (_i2 = 0; _i2 < ele.length; _i2++) {
            ele[_i2].style.background = 'cyan';
          }

        case 26:
        case "end":
          return _context.stop();
      }
    }
  });
}

var bubSortbtn = document.getElementById("b");
bubSortbtn.addEventListener('click', function _callee() {
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(bubble());

        case 2:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function insertion() {
  var ele, i, j, key, k, _i3;

  return regeneratorRuntime.async(function insertion$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log('In insertion()');
          ele = document.querySelectorAll(".bar"); // color

          ele[0].style.background = 'green';
          i = 1;

        case 4:
          if (!(i < ele.length)) {
            _context3.next = 26;
            break;
          }

          console.log('In ith loop');
          j = i - 1;
          key = ele[i].style.height; // color

          ele[i].style.background = 'blue';
          _context3.next = 11;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 11:
          if (!(j >= 0 && parseInt(ele[j].style.height) > parseInt(key))) {
            _context3.next = 21;
            break;
          }

          console.log('In while loop'); // color

          ele[j].style.background = 'blue';
          ele[j + 1].style.height = ele[j].style.height;
          j--;
          _context3.next = 18;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 18:
          // color
          for (k = i; k >= 0; k--) {
            ele[k].style.background = 'green';
          }

          _context3.next = 11;
          break;

        case 21:
          ele[j + 1].style.height = key; // color

          ele[i].style.background = 'green';

        case 23:
          i++;
          _context3.next = 4;
          break;

        case 26:
          for (_i3 = 0; _i3 < ele.length; _i3++) {
            ele[_i3].style.background = 'cyan';
          }

        case 27:
        case "end":
          return _context3.stop();
      }
    }
  });
}

var inSortbtn = document.getElementById("i");
inSortbtn.addEventListener('click', function _callee2() {
  return regeneratorRuntime.async(function _callee2$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(insertion());

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
});

function selection() {
  var ele, i, min_index, j, _i4;

  return regeneratorRuntime.async(function selection$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          console.log('In selection()');
          ele = document.querySelectorAll(".bar");
          i = 0;

        case 3:
          if (!(i < ele.length)) {
            _context5.next = 25;
            break;
          }

          console.log('In ith loop');
          min_index = i; // Change color of the position to swap with the next min

          ele[i].style.background = 'blue';
          j = i + 1;

        case 8:
          if (!(j < ele.length)) {
            _context5.next = 17;
            break;
          }

          console.log('In jth loop'); // Change color for the current comparision (in consideration for min_index)

          ele[j].style.background = 'red';
          _context5.next = 13;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 13:
          if (parseInt(ele[j].style.height) < parseInt(ele[min_index].style.height)) {
            console.log('In if condition height comparision');

            if (min_index !== i) {
              // new min_index is found so change prev min_index color back to normal
              ele[min_index].style.background = 'cyan';
            }

            min_index = j;
          } else {
            // if the currnent comparision is more than min_index change is back to normal
            ele[j].style.background = 'cyan';
          }

        case 14:
          j++;
          _context5.next = 8;
          break;

        case 17:
          _context5.next = 19;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 19:
          swap(ele[min_index], ele[i]); // change the min element index back to normal as it is swapped 

          ele[min_index].style.background = 'cyan'; // change the sorted elements color to green

          ele[i].style.background = 'green';

        case 22:
          i++;
          _context5.next = 3;
          break;

        case 25:
          for (_i4 = 0; _i4 < ele.length; _i4++) {
            ele[_i4].style.background = 'cyan';
          }

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  });
}

var selectionSortbtn = document.getElementById("s");
selectionSortbtn.addEventListener('click', function _callee3() {
  return regeneratorRuntime.async(function _callee3$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(selection());

        case 2:
        case "end":
          return _context6.stop();
      }
    }
  });
});

function merge(ele, low, mid, high) {
  var n1, n2, left, right, _i5, _i6, i, j, k, _i7;

  return regeneratorRuntime.async(function merge$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          console.log('In merge()');
          console.log("low=".concat(low, ", mid=").concat(mid, ", high=").concat(high));
          n1 = mid - low + 1;
          n2 = high - mid;
          console.log("n1=".concat(n1, ", n2=").concat(n2));
          left = new Array(n1);
          right = new Array(n2);
          _i5 = 0;

        case 8:
          if (!(_i5 < n1)) {
            _context7.next = 18;
            break;
          }

          _context7.next = 11;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 11:
          console.log('In merge left loop');
          console.log(ele[low + _i5].style.height + ' at ' + (low + _i5)); // color

          ele[low + _i5].style.background = 'orange';
          left[_i5] = ele[low + _i5].style.height;

        case 15:
          _i5++;
          _context7.next = 8;
          break;

        case 18:
          _i6 = 0;

        case 19:
          if (!(_i6 < n2)) {
            _context7.next = 29;
            break;
          }

          _context7.next = 22;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 22:
          console.log('In merge right loop');
          console.log(ele[mid + 1 + _i6].style.height + ' at ' + (mid + 1 + _i6)); // color

          ele[mid + 1 + _i6].style.background = 'yellow';
          right[_i6] = ele[mid + 1 + _i6].style.height;

        case 26:
          _i6++;
          _context7.next = 19;
          break;

        case 29:
          _context7.next = 31;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 31:
          i = 0, j = 0, k = low;

        case 32:
          if (!(i < n1 && j < n2)) {
            _context7.next = 40;
            break;
          }

          _context7.next = 35;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 35:
          console.log('In merge while loop');
          console.log(parseInt(left[i]), parseInt(right[j])); // To add color for which two r being compared for merging

          if (parseInt(left[i]) <= parseInt(right[j])) {
            console.log('In merge while loop if'); // color

            if (n1 + n2 === ele.length) {
              ele[k].style.background = 'green';
            } else {
              ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height = left[i];
            i++;
            k++;
          } else {
            console.log('In merge while loop else'); // color

            if (n1 + n2 === ele.length) {
              ele[k].style.background = 'green';
            } else {
              ele[k].style.background = 'lightgreen';
            }

            ele[k].style.height = right[j];
            j++;
            k++;
          }

          _context7.next = 32;
          break;

        case 40:
          if (!(i < n1)) {
            _context7.next = 50;
            break;
          }

          _context7.next = 43;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 43:
          console.log("In while if n1 is left"); // color

          if (n1 + n2 === ele.length) {
            ele[k].style.background = 'green';
          } else {
            ele[k].style.background = 'lightgreen';
          }

          ele[k].style.height = left[i];
          i++;
          k++;
          _context7.next = 40;
          break;

        case 50:
          if (!(j < n2)) {
            _context7.next = 60;
            break;
          }

          _context7.next = 53;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 53:
          console.log("In while if n2 is left"); // color

          if (n1 + n2 === ele.length) {
            ele[k].style.background = 'green';
          } else {
            ele[k].style.background = 'lightgreen';
          }

          ele[k].style.height = right[j];
          j++;
          k++;
          _context7.next = 50;
          break;

        case 60:
          for (_i7 = 0; _i7 < ele.length; _i7++) {
            ele[_i7].style.background = 'cyan';
          }

        case 61:
        case "end":
          return _context7.stop();
      }
    }
  });
}

function mergeSort(ele, l, r) {
  var m;
  return regeneratorRuntime.async(function mergeSort$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          console.log('In mergeSort()');

          if (!(l >= r)) {
            _context8.next = 4;
            break;
          }

          console.log("return cause just 1 elemment l=".concat(l, ", r=").concat(r));
          return _context8.abrupt("return");

        case 4:
          m = l + Math.floor((r - l) / 2);
          console.log("left=".concat(l, " mid=").concat(m, " right=").concat(r), _typeof(m));
          _context8.next = 8;
          return regeneratorRuntime.awrap(mergeSort(ele, l, m));

        case 8:
          _context8.next = 10;
          return regeneratorRuntime.awrap(mergeSort(ele, m + 1, r));

        case 10:
          _context8.next = 12;
          return regeneratorRuntime.awrap(merge(ele, l, m, r));

        case 12:
        case "end":
          return _context8.stop();
      }
    }
  });
}

var mergeSortbtn = document.getElementById("m");
mergeSortbtn.addEventListener('click', function _callee4() {
  var ele, l, r;
  return regeneratorRuntime.async(function _callee4$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          ele = document.querySelectorAll('.bar');
          l = 0;
          r = parseInt(ele.length) - 1; // disableSortingBtn();
          // disableSizeSlider();
          // disableNewArrayBtn();

          _context9.next = 5;
          return regeneratorRuntime.awrap(mergeSort(ele, l, r));

        case 5:
        case "end":
          return _context9.stop();
      }
    }
  });
});

function partitionLomuto(ele, l, r) {
  var i, j, k;
  return regeneratorRuntime.async(function partitionLomuto$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          console.log('In partitionLomuto()');
          i = l - 1; // color pivot element

          ele[r].style.background = 'red';
          j = l;

        case 4:
          if (!(j <= r - 1)) {
            _context10.next = 23;
            break;
          }

          console.log('In partitionLomuto for j'); // color current element

          ele[j].style.background = 'yellow'; // pauseChamp

          _context10.next = 9;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 9:
          if (!(parseInt(ele[j].style.height) < parseInt(ele[r].style.height))) {
            _context10.next = 19;
            break;
          }

          console.log('In partitionLomuto for j if');
          i++;
          swap(ele[i], ele[j]); // color 

          ele[i].style.background = 'orange';
          if (i != j) ele[j].style.background = 'orange'; // pauseChamp

          _context10.next = 17;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 17:
          _context10.next = 20;
          break;

        case 19:
          // color if not less than pivot
          ele[j].style.background = 'pink';

        case 20:
          j++;
          _context10.next = 4;
          break;

        case 23:
          i++; // pauseChamp

          _context10.next = 26;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 26:
          swap(ele[i], ele[r]); // pivot height one

          console.log("i = ".concat(i), _typeof(i)); // color

          ele[r].style.background = 'pink';
          ele[i].style.background = 'green'; // pauseChamp

          _context10.next = 32;
          return regeneratorRuntime.awrap(waitforme(delay));

        case 32:
          // color
          for (k = 0; k < ele.length; k++) {
            if (ele[k].style.background != 'green') ele[k].style.background = 'cyan';
          }

          return _context10.abrupt("return", i);

        case 34:
        case "end":
          return _context10.stop();
      }
    }
  });
}

function quickSort(ele, l, r) {
  var pivot_index, i;
  return regeneratorRuntime.async(function quickSort$(_context11) {
    while (1) {
      switch (_context11.prev = _context11.next) {
        case 0:
          console.log('In quickSort()', "l=".concat(l, " r=").concat(r), _typeof(l), _typeof(r));

          if (!(l < r)) {
            _context11.next = 11;
            break;
          }

          _context11.next = 4;
          return regeneratorRuntime.awrap(partitionLomuto(ele, l, r));

        case 4:
          pivot_index = _context11.sent;
          _context11.next = 7;
          return regeneratorRuntime.awrap(quickSort(ele, l, pivot_index - 1));

        case 7:
          _context11.next = 9;
          return regeneratorRuntime.awrap(quickSort(ele, pivot_index + 1, r));

        case 9:
          _context11.next = 12;
          break;

        case 11:
          if (l >= 0 && r >= 0 && l < ele.length && r < ele.length) {
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
          }

        case 12:
          for (i = 0; i < ele.length; i++) {
            ele[i].style.background = 'cyan';
          }

        case 13:
        case "end":
          return _context11.stop();
      }
    }
  });
}

var quickSortbtn = document.getElementById("q");
quickSortbtn.addEventListener('click', function _callee5() {
  var ele, l, r;
  return regeneratorRuntime.async(function _callee5$(_context12) {
    while (1) {
      switch (_context12.prev = _context12.next) {
        case 0:
          ele = document.querySelectorAll('.bar');
          l = 0;
          r = ele.length - 1; // disableSortingBtn();
          // disableSizeSlider();
          // disableNewArrayBtn();

          _context12.next = 5;
          return regeneratorRuntime.awrap(quickSort(ele, l, r));

        case 5:
        case "end":
          return _context12.stop();
      }
    }
  });
});