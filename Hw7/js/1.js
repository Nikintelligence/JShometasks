'use strict';

 function getObject(obj, from, to){
     let newObj = {}
     if (typeof from != 'number' || typeof to != 'number' || typeof obj != 'object'){
         return false;
     }
     for (let key in obj){
         if (obj[key].price >= from && obj[key].price < to) newObj[key] = obj[key];
     }
     return newObj;
 }

 let goods = {
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

 console.log(getObject(goods, 2000, 3000))
