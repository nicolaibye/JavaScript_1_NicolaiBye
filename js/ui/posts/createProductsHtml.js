import { isIdInCart } from "../../utils/cart.js";

export function createProductsHtml(container, products) {
  let parent = container;
  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  parent.innerHTML = "";

  let productsArray = products.data;

  productsArray.forEach((product) => {
    const { id, title, image, description, genre, rating, released, price } =
      product;

    const movieElement = document.createElement("div");
    movieElement.classList.add("film_product");

    const movieImageLink = document.createElement("a");
    movieImageLink.href = `productDetails.html?id=${id}`;
    const movieImage = document.createElement("img");
    movieImage.classList.add("section_films_cover");
    movieImage.alt = `${title} cover`;
    movieImage.src = image.url;

    const movieInfoElement = document.createElement("div");
    movieInfoElement.classList.add("film_info_block");
    movieInfoElement.classList.add(`productInfo_${id}`);

    const movieHeading = document.createElement("div");
    const movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie_title");
    movieTitle.textContent = title;
    const movieTags = document.createElement("p");
    movieTags.classList.add("copyright_1");
    movieTags.textContent = `${genre}  |  ${rating}  |  ${released}`;

    movieHeading.append(movieTitle, movieTags);

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("copyright_1");
    movieDescription.textContent = description;

    const moviePrice = document.createElement("h2");
    moviePrice.textContent = "€" + Math.round(price * 0.085);

    const movieButtonsElement = document.createElement("ul");
    const movieButtonOne = document.createElement("li");
    const movieButtonOneLink = document.createElement("a");
    movieButtonOneLink.href = "wishlist.html";
    const movieButtonOneIcon = document.createElement("i");
    movieButtonOneIcon.classList.add("fa-solid", "fa-heart", "film_icons");

    const movieButtonTwo = document.createElement("li");
    const movieButtonTwoLink = document.createElement("a");
    movieButtonTwoLink.dataset.action = "cart";
    movieButtonTwoLink.dataset.id = id;
    movieButtonTwoLink.dataset.title = title;
    movieButtonTwoLink.dataset.image = image.url;
    movieButtonTwoLink.dataset.genre = genre;
    movieButtonTwoLink.dataset.rating = rating;
    movieButtonTwoLink.dataset.released = released;
    movieButtonTwoLink.dataset.price = price;
    movieButtonTwoLink.classList.add(
      "fa-solid",
      "fa-cart-plus",
      "film_icons",
      "cart_icon"
    );

    if (isIdInCart(id)) {
      movieButtonTwoLink.classList.add("active");
    }

    const movieButtonThree = document.createElement("li");
    const movieButtonThreeLink = document.createElement("a");
    movieButtonThreeLink.href = `productDetails.html?id=${id}`;
    const movieButtonThreeIcon = document.createElement("i");
    movieButtonThreeIcon.classList.add("fa-solid", "fa-ellipsis", "film_icons");

    movieImageLink.append(movieImage);
    movieButtonOneLink.append(movieButtonOneIcon);
    movieButtonOne.append(movieButtonOneLink);
    movieButtonTwo.append(movieButtonTwoLink);
    movieButtonThreeLink.append(movieButtonThreeIcon);
    movieButtonThree.append(movieButtonThreeLink);
    movieButtonsElement.append(
      movieButtonOne,
      movieButtonTwo,
      movieButtonThree
    );
    movieInfoElement.append(
      movieHeading,
      movieDescription,
      moviePrice,
      movieButtonsElement
    );
    movieElement.append(movieImageLink, movieInfoElement);
    parent.append(movieElement);
  });
}
