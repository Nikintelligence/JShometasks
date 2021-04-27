'use strict';

function searchProduct(obj, title, countToCart){
     if (typeof obj != 'object' || typeof title != 'string' || typeof countToCart != 'number') return false;
     for (let key in obj){
         if (obj[key].title === title){
             if (obj[key].count >= countToCart){
                 obj[key].count -= countToCart;
                 return true;
             }
             else if (obj[key].count < countToCart){
                 console.log("Нет столько товаров");
                 return false;
             }
         }
     }
 }

 goods = {
      piano: {
          title: "Пианино",
          price: 3000,
          count: 25
      },
      guitar: {
          title: "Гитара",
          price: 1200,
          count: 40
      },
      drum: {
          title: "Барабаны",
          price: 2700,
          count: 12
      },
      flute: {
          title: "Флейта",
          price: 900,
          count: 50
      },
      harp: {
          title: "Арфа",
          price: 3400,
          count: 5
      }
  };

 searchProduct(goods, "Флейта", 55);
