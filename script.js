
// ЛЕСТНИЦА //
var amount = +prompt('Введите количество символов')
var sym1 = prompt('Введите символ отступов');
var sym2 = prompt('Введите конечный символ');

for (let i = 0; i < amount; i++) {
    console.log(sym2);
    sym2 = sym1 + sym2;
}
console.log(sym2);
// ЛЕСТНИЦА //
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// ВОЗВЕДЕНИЯ В СТЕПЕНЬ //
var num1 = +prompt('Введите число');
var num2 = +prompt('Введите степень числа');
let a = 1;
for (let i = 0; i < num2; i++) {
    a = a * num1;
}
alert();
// ВОЗВЕДЕНИЯ В СТЕПЕНЬ //

