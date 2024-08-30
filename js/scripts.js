import { createProduct } from "/js/product.js";

const article = document.querySelector(".library_films");
const movie = await fetch(
  "https://v2.api.noroff.dev/square-eyes/352ba432-5b5d-4ccc-9aba-f2704c500cf3"
).then((response) => response.json());
console.log(movie);

// Convert NOK to EUR price
function convertNOK(movie, currency) {
  const nokPrice = movie.data.price;
  const eurPrice = nokPrice * currency;
  return eurPrice;
}
console.log(convertNOK(movie, 0.5));

// const movie = {
//     title: "Godzilla: King of the Monsters",
//     genre: "Sci-Fi/Action",
//     ageLimit: "12+",
//     runTime: "2 h 12 m",
//     description: "The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.",
//     price: "€10",
//     href: "products/godzilla_kingofthemonsters_product.html",
//     image: "images/covers/godzilla_kingofthemonsters_cover.jpg"
//   };

// get new price could be done by taking the alleged norwegian price and multiply it by the exchange rate then clean up the desimals to make it a 2 numbered price.

createProduct(movie, article);