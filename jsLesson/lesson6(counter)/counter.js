function makeCounter() {
    var count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}

//таким образом переменной doCount присваивается ссылка на вложенную функцию counter()
//и появляется доступ к переменной count
var doCount = makeCounter();
console.log(doCount()); // 1
console.log(doCount()); // 2
console.log(doCount()); // 3

// в данном случае мы выводим на консоль просто синтаксис функции makeCounter()
console.log(makeCounter()); //ƒ counter() {count = count + 1; return count;}
console.log(makeCounter()); //ƒ counter() {count = count + 1; return count;}
console.log(makeCounter()); //ƒ counter() {count = count + 1; return count;}

/*
1. Мы вызываем функцию makeCounter, которая создает функцию counter и возвращает ее вместе с окружением,
содержащим свободную переменную count. Другими словами, она создает замыкание.
Функция, возвращенная из makeCounter, сохраняется в doCount.

2. Вызываем функцию doCount. Это приводит к выполнению тела функции counter.

3. Обнаружив переменную count, мы ищем ее в окружении и получаем ее значение.
Переменная count увеличивается, новое значение сохраняется в окружении,
после чего функция возвращает это новое значение в точку вызова doCount.

4. Шаги 2 и 3 повторяются при каждом вызове doCount
 */