import { data } from "./emoji.js";

// let newData;
// function unic(params) {
//    newData = data.map((object) => ({...object, keywords: [...new Set(object.keywords.split(" "))].join(" ")}));
//    return newData;
//  }

function createCard(obj) {
  // let card = document.createElement("div"); // создание саммой карточки
  // card.setAttribute("class", "card");
  let container = document.querySelector(".container");  // обращение к контэниру
  let card = document.querySelector(".emoji_card");     // обращение к карточке
 
  let symbol = document.createElement("p"); // создание   symbol
  symbol.setAttribute("class", "emoji");  
  symbol.textContent = obj.symbol;

  let title = document.createElement("h2"); //создание  заголовка
  title.classList.add("emoji_name");                  // обращение уже к готовым стилям
  title.textContent = obj.title;

  let keywords = document.createElement("p"); // создание keywords
  keywords.classList.add("emoji_keyworsds");
  keywords.textContent = obj.keywords;

  card.append(symbol, title, keywords); //вставка созданного в Html

  container.append(card);
}

function reviewCard(arr) {

  arr.forEach(function (elem) {
    createCard(elem);
  })
 
  return arr;
}
reviewCard(data);
// console.log(reviewCard(data));
//createCard(data);



// function createHeader(obj) {
//   let header = document.querySelector("header")
//   //let imput = document.querySelector("form")

//   let h1 = document.createElement("h1");
//   h1.textContent = "Emoji Finder";

//   let p = document.createElement("p");
//   p.textContent = "Find emoji by keywords";

//   let imput = document.createElement("imput");
//   imput.textContent = imput;
  
//   header.append(h1,p,imput);
// }
// createHeader();