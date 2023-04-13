const API_URL = "https://emoji.ymatuhin.workers.dev/";
const input = document.querySelector("input");
// await без async работает только если есть type="module"
const data = await fetchData(API_URL);
const unicData = getUnicData(data);
let container = document.querySelector(".container");


// работает после получения данных с сервера ждет их потом отрабатывает
async function fetchData(url) {
  let response = await fetch(url);
  return response.json();
}







function getUnicData(data) {
  // функция  переберающая входящие данные и удаляет оставляя уникальные keywords
  const unicData = [];
  data.forEach((card) => {
    unicData.push({
      ...card,
      keywords: [...new Set(card.keywords.split(" "))].join(" "),
    });
  });
  return unicData;
}

function createCard(obj) {
  // функция создает одну карточку

  let card = document.createElement("div"); // создание саммой карточки
  card.classList.add("emoji_card");

  let symbol = document.createElement("p"); // создание   symbol
  symbol.setAttribute("class", "emoji");
  symbol.textContent = obj.symbol;

  let title = document.createElement("h2"); //создание  заголовка
  title.classList.add("emoji_name"); // обращение уже к готовым стилям
  title.textContent = obj.title;

  let keywords = document.createElement("p"); // создание keywords
  keywords.classList.add("emoji_keyworsds");
  keywords.textContent = obj.keywords;

  card.append(symbol, title, keywords); //вставка созданного в Html

  container.append(card);
}

function reviewCard(arr) {
  //функция перебора элементов из  передоваемого data она же и вызывает метот отрисовки createCard
  arr.forEach(function (elem) {
    createCard(elem);
  });

  //return arr;
}

function searchFilter(event) {
  // функция обработчик поисковой строки сравнение ввода с ключевыми словами карточек
  let value = event.target.value.toLowerCase().trim();
  let filterDate = unicData.filter(
    (card) =>
      card.title.toLowerCase().includes(value) ||
      card.keywords.toLowerCase().includes(value)
  );
  container.innerHTML = "";
  reviewCard(filterDate);
  console.dir(value);
  console.log("работаю");
}

(function main() { 
  // самовызывающаяся функция main точкa входа в програму
  reviewCard(unicData);
})();

input.addEventListener("input", searchFilter);






// function createCard(obj) {
//   // функция создает одну карточку
//   let card = document.createElement("div"); // создание саммой карточки
//   card.classList.add("card");

  // let textCard = document.createElement("div");
  // textCard.setAttribute("class", "textCard");

  // let image = document.createElement("img"); // создание картинки
  // image.setAttribute("class", "image");
  // image.src = obj.image;

  // let tname = document.createElement("h2"); //создание  заголовка name
  // tname.classList.add("name");
  // tname.textContent = obj.name;

  // let actor = document.createElement("p"); // создание остального текста текста
  // actor.classList.add("actor");
  // actor.textContent = `actor: ${obj.actor}`;

  // let gender = document.createElement("p");
  // gender.classList.add("gender");
  // gender.textContent = `gender: ${obj.gender}`;

  // let house = document.createElement("p");
  // house.classList.add("house");
  // house.textContent = `house: ${obj.house}`;

  // let wand = document.createElement("p");
  // wand.classList.add("wand");
  // wand.textContent = `wand: ${obj.wand.core ? obj.wand.core : "unknown"}`;

  // let alive = document.createElement("p");
  // alive.classList.add("alive");
  // alive.textContent = `alive: ${obj.alive}`;

  // textCard.append(tname, actor, gender, house, wand, alive); //вставка текста в textCard

  // card.append(image, textCard); // вставка кортинки и коробки с текстом в карточку

  // containerCard.append(card); //вставка созданного в Html
//}

