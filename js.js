let evenOddBtn = document.getElementById('even_odd');

evenOddBtn.addEventListener('click', function () {
  let getnum = Number(prompt('get number'));

  if (isNaN(getnum)) {
    alert('give me number');
  } else {
    function EvenOrOdd(number) {
      if (number % 2 === 0) {
        alert('even');
      } else {
        alert('odd');
      }
    }

    EvenOrOdd(getnum);
  }
});

let useradmin_btn = document.getElementById('admin');

useradmin_btn.addEventListener('click', function () {
  let user = prompt('get your user');
  let password = prompt('get your password ');

  if (user === 'admin' && password === '1234') {
    alert('hi admin');
  } else {
    alert('hi guest');
  }
});

let timebtn = document.getElementById('time');

timebtn.addEventListener('click', function () {
  let timenow = prompt('What time is it now?');

  let PmAm = prompt('PM or AM');

  if ((timenow.substr(0, 2) === '12' && PmAm === 'PM') || PmAm === 'pm') {
    alert('00:00');
  } else if (
    (timenow.substr(0, 2) === '11' && PmAm === 'PM') ||
    PmAm === 'pm'
  ) {
    alert('23:00');
  } else if (
    (timenow.substr(0, 2) === '10' && PmAm === 'PM') ||
    PmAm === 'pm'
  ) {
    alert('22:00');
  } else if ((timenow.substr(0, 2) === '9' && PmAm === 'PM') || PmAm === 'pm') {
    alert('21:00');
  } else if ((timenow.substr(0, 2) === '8' && PmAm === 'PM') || PmAm === 'pm') {
    alert('20:00');
  } else if ((timenow.substr(0, 2) === '7' && PmAm === 'PM') || PmAm === 'pm') {
    alert('19:00');
  } else if ((timenow.substr(0, 2) === '6' && PmAm === 'PM') || PmAm === 'pm') {
    alert('18:00');
  } else if ((timenow.substr(0, 2) === '1' && PmAm === 'PM') || PmAm === 'pm') {
    alert('01:00');
  } else if ((timenow.substr(0, 2) === '2' && PmAm === 'PM') || PmAm === 'pm') {
    alert('02:00');
  } else if ((timenow.substr(0, 2) === '3' && PmAm === 'PM') || PmAm === 'pm') {
    alert('03:00');
  } else if ((timenow.substr(0, 2) === '4' && PmAm === 'PM') || PmAm === 'pm') {
    alert('04:00');
  } else if ((timenow.substr(0, 2) === '5' && PmAm === 'PM') || PmAm === 'pm') {
    alert('05:00');
  } else if ((timenow.substr(0, 2) === '6' && PmAm === 'AM') || PmAm === 'am') {
    alert('06:00');
  } else if ((timenow.substr(0, 2) === '7' && PmAm === 'AM') || PmAm === 'am') {
    alert('07:00');
  } else if ((timenow.substr(0, 2) === '8' && PmAm === 'AM') || PmAm === 'am') {
    alert('08:00');
  } else if ((timenow.substr(0, 2) === '9' && PmAm === 'AM') || PmAm === 'am') {
    alert('09:00');
  } else if (
    (timenow.substr(0, 2) === '10' && PmAm === 'AM') ||
    PmAm === 'am'
  ) {
    alert('10:00');
  } else if (
    (timenow.substr(0, 2) === '11' && PmAm === 'AM') ||
    PmAm === 'am'
  ) {
    alert('11:00');
  } else if (
    (timenow.substr(0, 2) === '12' && PmAm === 'AM') ||
    PmAm === 'am'
  ) {
    alert('12:00');
  } else if ((timenow.substr(0, 2) === '1' && PmAm === 'AM') || PmAm === 'am') {
    alert('13:00');
  } else if ((timenow.substr(0, 2) === '2' && PmAm === 'AM') || PmAm === 'am') {
    alert('14:00');
  } else if ((timenow.substr(0, 2) === '3' && PmAm === 'AM') || PmAm === 'am') {
    alert('15:00');
  } else if ((timenow.substr(0, 2) === '4' && PmAm === 'AM') || PmAm === 'am') {
    alert('16:00');
  } else if ((timenow.substr(0, 2) === '5' && PmAm === 'AM') || PmAm === 'am') {
    alert('17:00');
  }
});

let numbers = [1, 2, 3, 4, 5];

function sumArray(arraysize) {
  let sum = 0;
  for (let i = 0; i < arraysize.length; i++) {
    sum = sum + arraysize[i];
    console.log(arraysize[i]);
  }
  console.log(sum);
  return sum;
}

console.log(sumArray(numbers));

let namesize = document.getElementById('nmae');

namesize.addEventListener('click', function () {
  let name1 = Array.from(prompt('name_1'));
  let name2 = Array.from(prompt('name_2'));

  if (name1.length == name2.length) {
    alert('saxelebi tolia');
  } else {
    alert('saxelebi toli araa');
  }
});

let array1 = [1, 2, 2, 3, 4, 4, 5];

let array2 = [1, 2, 3, 4, 5];

// function filterTwoArray(arry1, arry2) {
//   return arry1.filter(function (item) {
//     return arry2.includes(item);
//   });
// }

let filterTwoArray = array1.filter(function (item) {
  return array2.indexOf(item) > -1;
});

console.log(filterTwoArray);

// console.log(filterTwoArray(array1, array2));
