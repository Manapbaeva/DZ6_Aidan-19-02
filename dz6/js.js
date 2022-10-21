//Задача 1
let newdoc = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
let [elem1, elem2, ...arr] = newdoc;
alert(elem1 + ','+ elem2 + ',' +arr);

//Задача 2
let newdoc = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
newdoc.reverse();
let [elem1, elem2] = newdoc;
alert(elem1 + ','+ elem2);

//Задача 3
function func(a = 'Аноним') {
    alert('Привет, '+ a );
}

let name = 'you' ;
func();