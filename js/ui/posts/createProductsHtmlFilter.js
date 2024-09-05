export function createProductsHtmlFilter(container, products) {
  let parent = container;
  if (typeof container === "string") {
    parent = document.querySelector(container);
  }

  if (products.length === 0) {
    parent.innerHTML = `<p class="message error">No products matches your search</p>`;
    return;
  }

  parent.innerHTML = "";

  products.forEach((product) => {
    const { id, title, image, description, genre, rating, released, price } =
      product;

    const movieElement = document.createElement("div");
    movieElement.classList.add("film_product");

    const movieImageLink = document.createElement("a");
    movieImageLink.href = `productDetails.html?id=${id}`;
    const movieImage = document.createElement("img");
    movieImage.classList.add("section_films_cover");
    movieImage.src = image.url;

    const movieInfoElement = document.createElement("div");
    movieInfoElement.classList.add("film_info_block");
    movieInfoElement.classList.add(`productInfo_${id}`);

    const movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie_title");
    movieTitle.textContent = title;

    const movieTags = document.createElement("p");
    movieTags.classList.add("copyright_1");
    movieTags.textContent = `${genre}  |  ${rating}  |  ${released}`;

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("copyright_1");
    movieDescription.textContent = description;

    const moviePrice = document.createElement("h2");
    moviePrice.textContent = price;

    const movieButtonsElement = document.createElement("ul");
    const movieButtonOne = document.createElement("li");
    const movieButtonOneLink = document.createElement("a");
    movieButtonOneLink.href = "wishlist.html";
    const movieButtonOneIcon = document.createElement("i");
    movieButtonOneIcon.classList.add("fa-solid", "fa-heart", "film_icons");
    
    
    const movieButtonTwo = document.createElement("li");
    movieButtonTwo.dataset.action = "cart";
    movieButtonTwo.dataset.id = id;
    movieButtonTwo.dataset.title = title;
    movieButtonTwo.dataset.genre = genre;
    movieButtonTwo.dataset.rating = rating;
    movieButtonTwo.dataset.released = released;
    movieButtonTwo.dataset.price = price;
    const movieButtonTwoIcon = document.createElement("i");
    movieButtonTwoIcon.classList.add("fa-solid", "fa-cart-plus", "film_icons");
    
    
    const movieButtonThree = document.createElement("li");
    const movieButtonThreeLink = document.createElement("a");
    movieButtonThreeLink.href = `productDetails.html?id=${id}`;
    const movieButtonThreeIcon = document.createElement("i");
    movieButtonThreeIcon.classList.add("fa-solid", "fa-ellipsis", "film_icons");

    movieImageLink.append(movieImage);
    movieButtonOneLink.append(movieButtonOneIcon);
    movieButtonOne.append(movieButtonOneLink);
    movieButtonTwo.append(movieButtonTwoIcon);
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
    parent.append(movieElement);
  });
}
