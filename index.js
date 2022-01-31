// 1) Вывод чисел от 25 до 0 (порядок уменьшения)

console.log('!!!!!1.1!!!!!');
let i = 25;
while(i >= 0) {
    console.log(i);
    i--;
}

console.log('!!!!!1.2!!!!!');
i = 25;
do {
    console.log(i);
    i--;
} while(i >= 0);

console.log('!!!!!1.3!!!!!');
for(i = 25; i >= 0; i--) {
    console.log(i);
}



// 2) Вывод чисел от 10 до 50, которые кратны 5
i = 10;
console.log('!!!!!2.1!!!!!');
while(i <= 20) {
    if(i % 5 === 0) {
        console.log(i);
    }
    i++;
}

i = 10;
console.log('!!!!!2.2!!!!!');
do {
    if(i % 5 === 0) {
        console.log(i);
    }
    i++;
} while(i <= 20);

console.log('!!!!!2.3!!!!!');
for(i = 10; i <= 20; i++) {
    if(i % 5 === 0) {
        console.log(i);
    }
}



// 3)  Найти сумму чисел в пределах от 1 до 100.
// проверка ответа. Я вспоминаю комбинаторику, сейчас осторожyо, ибо могу ошибиться!!
// (N(N+1))/2
// 50 * 101 = 5050 - то, что я должен получить
let summ = 0;

console.log('!!!!!3.1!!!!!');
i = 1
while(i <= 100) {
    summ += i;
    i++;
}
console.log(summ);

console.log('!!!!!3.2!!!!!');
i = 1;
summ = 0;
do {
    summ += i;
    i++;
} while(i <= 100);
console.log(summ);

console.log('!!!!!3.3!!!!!');
summ = 0;
for(i = 1; i <= 100; i++) {
    summ += i;
}
console.log(summ);



// 4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит
isWorking = true;
while(isWorking) {
    let request = prompt('4.1  Решите пример (2 + 2 * 2)');
    if(+request === 6) {
        isWorking = false;
    }
}

isWorking = true;
do {
    request = prompt('4.2  Решите пример (2 + 2 * 2)');
    if(+request === 6) {
        isWorking = false;
    } 
} while(isWorking);

isWorking = true;
for(; isWorking; ) {
    request = prompt('4.3  Решите пример (2 + 2 * 2)');
    if(+request === 6) {
        isWorking = 0;
    }
}