// var time = setInterval(stopWatch, 1000);
// var count = 0;
// var hr = 0;
// var min = 0;

// function stopWatch () {
//     count = count + 1;
//     if (count > 59) {
//         min = min + 1;
//         count = 0;
//     } if (min > 59) {
//         hr += 1;
//         min = 0;
//     } if (hr === 6) {
//         clearInterval(time);
//     }
//     console.log(`${hr}hr ${min}m ${count}s`);
// }


var time = setInterval(timer, 1000);
var hr = 2;
var min = 0;
var count = 0;

console.log(`${hr}hr ${min}m ${count}s`);

function timer () {
    count = count - 1;
    if (count < 0) {
        min = min - 1;
        count = 59;
    }
    if (min < 0) {
        hr -= 1;
        min = 59;
    }
    if (hr === 0 && min === 0 && count === 0) {
        clearInterval(time);
    }

    console.log(`${hr}hr ${min}m ${count}s`);
}