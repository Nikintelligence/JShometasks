'use strict';

function compare(a, b) {
     if (a.title < b.title){
       return -1;
     }
     if (a.title > b.title){
       return 1;
     }
     return 0;
   }

    books = [
        { author: 'Пушкин', title: 'Пир во время чумы'},
        { author: 'Толстой', title: 'Война и мир'},
        { author: 'Лермонтов', title: 'Тамань'},
        { author: 'Гончаров', title: 'Обломов'},
        { author: 'Лермонтов', title: 'Герой Нашего Времени'},
        { author: 'Пушкин', title: 'Руслан и Людмила'},
        { author: 'Лермонтов', title: 'И скучно, и грустно'},
    ];

   console.log(books.sort(compare));
