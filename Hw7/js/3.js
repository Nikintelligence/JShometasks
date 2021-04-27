'use strict';


//  функция: //////////////
 function allBooks(arr, surname){
     arr = [arr];
     let newArr = [];
     for (let key in books){
         if(books[key].author === surname){
             newArr.push(books[key].title);
         }
     }
     return newArr;
 }
 // //////////////////////
 let books = [
      { author: 'Пушкин', title: 'Пир во время чумы'},
      { author: 'Толстой', title: 'Война и мир'},
      { author: 'Лермонтов', title: 'Тамань'},
      { author: 'Гончаров', title: 'Обломов'},
      { author: 'Лермонтов', title: 'Герой Нашего Времени'},
      { author: 'Пушкин', title: 'Руслан и Людмила'},
      { author: 'Лермонтов', title: 'И скучно, и грустно'},
  ];

 console.log("Пример пустого массива: ");
 console.log(allBooks(books, "Лер"));

 console.log("Пример массива существующего автора: ");
 console.log(allBooks(books, "Пушкин"));
