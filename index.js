
const table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
   /*  setTimeout(
        ()=>{
            const row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
    }, 1000)
 */
    (function(i) {
        setTimeout(function() { 
            /* table.rows[i].cells[i].style.backgroundColor = 'red';  */
            const row = table.rows[i];
    row.cells[i].style.backgroundColor =  i % 2 === 0 ? 'blue' : 'red';
        }, i * 1000);
    })(i);
}


const TIMEOUT_DEFAULT_DELAY_MS = 1000;
const NUMBER_PI = 3.14;

function rundomNumbers(num) {
    let num = +prompt('Введите число');

    if (num >= 10) {
        console.log('!')
    } else {
        console.log('try again')
    }
}

let num = '123033'; // берем в кавычки, чтобы обращаться к цифрам

let sum1 = num[0] + num[1] + num[2];
let sum2 = num[3] + num[4] + num[5];

if (Number(sum1) == Number(sum2)) {
	console.log('суммы равны');
} else {
	console.log('суммы не равны');
};




