console.log("Hello world! Product script check!");

export function createProduct(movie, parent) {
  const movieElement = document.createElement("div");
  movieElement.classList.add("film_product");

  const movieImageLink = document.createElement("a");
  movieImageLink.href = movie.href;
  const movieImage = document.createElement("img");
  movieImage.classList.add("section_films_cover");
  movieImage.src = movie.data.image.url;

  const movieInfoElement = document.createElement("div");
  movieInfoElement.classList.add("film_info_block");

  const movieTitle = document.createElement("h2");
  movieTitle.textContent = movie.data.title;

  const movieTags = document.createElement("p");
  movieTags.classList.add("copyright_1");
  movieTags.textContent = `${movie.data.genre}  |  ${movie.data.rating}  |  ${movie.data.released}`;

  const movieDescription = document.createElement("p");
  movieDescription.classList.add("copyright_1");
  movieDescription.textContent = movie.data.description;

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
  movieButtonThreeLink.href = movie.href;
  const movieButtonThreeIcon = document.createElement("i");
  movieButtonThreeIcon.classList.add("fa-solid", "fa-ellipsis", "film_icons");

  movieImageLink.append(movieImage);
  movieButtonOneLink.append(movieButtonOneIcon);
  movieButtonOne.append(movieButtonOneLink);
  movieButtonTwoLink.append(movieButtonTwoIcon);
  movieButtonTwo.append(movieButtonTwoLink);
  movieButtonThreeLink.append(movieButtonThreeIcon);
  movieButtonThree.append(movieButtonThreeLink);
  movieButtonsElement.append(movieButtonOne, movieButtonTwo, movieButtonThree);
  movieInfoElement.append(
    movieTitle,
    movieTags,
    movieDescription,
    moviePrice,
    movieButtonsElement
  );
  movieElement.append(movieImageLink, movieInfoElement);
  parent.append(movieElement);
}
