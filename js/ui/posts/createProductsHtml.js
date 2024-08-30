export function createProductsHtml(container, products) {
  container.innerHTML = "";

  console.log("products", products);

  products.data.forEach((product) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("film_product");

    const movieImageLink = document.createElement("a");
    movieImageLink.href = `productDetails.html?id=${product.id}`;
    const movieImage = document.createElement("img");
    movieImage.classList.add("section_films_cover");
    movieImage.src = product.image.url;

    const movieInfoElement = document.createElement("div");
    movieInfoElement.classList.add("film_info_block");

    const movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie_title");
    movieTitle.textContent = product.title;

    const movieTags = document.createElement("p");
    movieTags.classList.add("copyright_1");
    movieTags.textContent = `${product.genre}  |  ${product.rating}  |  ${product.released}`;

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("copyright_1");
    movieDescription.textContent = product.description;

    const moviePrice = document.createElement("h2");
    moviePrice.textContent = "€" + 13;

    const movieButtonsElement = document.createElement("ul");
    const movieButtonOne = document.createElement("li");
    const movieButtonOneLink = document.createElement("a");
    movieButtonOneLink.href = "wishlist.html";
    const movieButtonOneIcon = document.createElement("i");
    movieButtonOneIcon.classList.add("fa-solid", "fa-heart", "film_icons");
    const movieButtonTwo = document.createElement("li");
    const movieButtonTwoLink = document.createElement("a");
    movieButtonTwoLink.href = "checkout/checkout.html";
    const movieButtonTwoIcon = document.createElement("i");
    movieButtonTwoIcon.classList.add("fa-solid", "fa-cart-plus", "film_icons");
    const movieButtonThree = document.createElement("li");
    const movieButtonThreeLink = document.createElement("a");
    movieButtonThreeLink.href = `productDetails.html?id=${product.id}`;
    const movieButtonThreeIcon = document.createElement("i");
    movieButtonThreeIcon.classList.add("fa-solid", "fa-ellipsis", "film_icons");

    movieImageLink.append(movieImage);
    movieButtonOneLink.append(movieButtonOneIcon);
    movieButtonOne.append(movieButtonOneLink);
    movieButtonTwoLink.append(movieButtonTwoIcon);
    movieButtonTwo.append(movieButtonTwoLink);
    movieButtonThreeLink.append(movieButtonThreeIcon);
    movieButtonThree.append(movieButtonThreeLink);
    movieButtonsElement.append(
      movieButtonOne,
      movieButtonTwo,
      movieButtonThree
    );
    movieInfoElement.append(
      movieTitle,
      movieTags,
      movieDescription,
      moviePrice,
      movieButtonsElement
    );
    movieElement.append(movieImageLink, movieInfoElement);
    container.append(movieElement);
  });
}
