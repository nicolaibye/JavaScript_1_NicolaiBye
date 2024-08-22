export function createProduct(movie, parent) {
    
    const movieElement = document.createElement("div");
    movieElement.classList.add("film_product");

    const movieImageLink = document.createElement("a");
    movieImageLink.href = "${movie.href}"
    const movieImage = document.createElement("img");
    movieImage.classList.add("section_films_cover");

    const movieInfoElement = document.createElement("div");
    movieInfoElement.classList.add("film_info_block");
    
    const movieTitle = document.createElement("h2");
    movieTitle.textContent = movie.title;

    const movieTags = document.createElement("p");
    movieTags.classList.add("copyright_1");
    movieTags.textContent = "${movie.genre}  |  ${movie.ageLimit}  |  ${movie.runTime}";

    const movieDescription = document.createElement("p");
    movieDescription.classList.add("copyright_1")
    movieTags.textContent = movie.description;

    const moviePrice = document.createElement("h2");
    moviePrice.textContent = movie.price;

    const movieButtonsElement = document.createElement("ul");
    const movieButtonOne = document.createElement("li");
    const movieButtonOneLink = document.createElement("a");
    movieButtonOneLink.href = "wishlist.html";
    const movieButtonOneIcon = document.createElement("i");
    movieButtonOneIcon.classList.add("fa-solid fa-heart film_icons");
    const movieButtonTwo = document.createElement("li");
    const movieButtonTwoLink = document.createElement("a");
    movieButtonTwoLink.href = "checkout/checkout.html";
    const movieButtonTwoIcon = document.createElement("i");
    movieButtonTwoIcon.classList.add("fa-solid fa-cart-plus film_icons");
    const movieButtonThree = document.createElement("li");
    const movieButtonThreeLink = document.createElement("a");
    movieButtonThreeLink.href = "${movie.href}";
    const movieButtonThreeIcon = document.createElement("i");
    movieButtonThreeIcon.classList.add("fa-solid fa-ellipsis film_icons");

    movieImageLink.append(movieImage)
    movieButtonOneLink.append(movieButtonOneIcon)
    movieButtonOne.append(movieButtonOneLink)
    movieButtonTwoLink.append(movieButtonTwoIcon)
    movieButtonTwo.append(movieButtonTwoLink)
    movieButtonThreeLink.append(movieButtonThreeIcon)
    movieButtonThree.append(movieButtonThreeLink)
    movieButtonsElement.append(movieButtonOne, movieButtonTwo, movieButtonThree)
    movieInfoElement.append(movieTitle, movieTags, movieDescription, moviePrice, movieButtonsElement)
    movieElement.append(movieImageLink, movieInfoElement)
    parent.append(movieElement);

}

const article = document.querySelector('.library_films');
createProduct(movie, article);

    export function renderPost(post, parent) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        const postTitle = document.createElement('h2');
        postTitle.textContent = post.title;
        const postBody = document.createElement('p');
        postBody.textContent = post.body;
        postElement.append(postTitle, postBody)
        parent.append(postElement);
      }
      
      export function renderPosts(posts) {
        const article = document.querySelector('article');
        posts.forEach(post => renderPost(post, article));
      };

<div class="film_product first">
    <a href="products/godzilla_kingofthemonsters_product.html"><img src="images/covers/godzilla_kingofthemonsters_cover.jpg" alt="Godzilla: King of the Monsters cover" class="section_films_cover"></a>
    <div class="film_info_block">
        <h2>Godzilla: King of the Monsters</h2>
        <p class="copyright_1">Sci-Fi/Action  |  12+  |  2 h 12 m</p>
        <p class="copyright_1">The crypto-zoological agency Monarch faces off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah.</p>
        <h2>€10</h2>
        <ul>
            <li><a href="wishlist.html"><i class="fa-solid fa-heart film_icons"></i></a></li>
            <li><a href="checkout/checkout.html"><i class="fa-solid fa-cart-plus film_icons"></i></a></li>
            <li><a href="products/godzilla_kingofthemonsters_product.html"><i class="fa-solid fa-ellipsis film_icons"></i></a></li>
        </ul>
    </div>
</div>