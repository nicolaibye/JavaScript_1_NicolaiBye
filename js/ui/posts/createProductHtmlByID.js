export function createProductHtmlByID(container, product) {
  container.innerHTML = "";

  console.log("product", product);

  const { id, title, image, description, genre, rating, released, price } =
    product.data;

  const backButton = document.createElement("button");
  backButton.classList.add("product_return");
  backButton.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  backButton.addEventListener("click", () => {
    window.history.back();
  });
  container.append(backButton);

  const productDetailsContainer = document.createElement("div");
  container.append(productDetailsContainer);

  const productContainer = document.createElement("div");
  productContainer.classList.add("product_container", `product_details_${id}`);
  productDetailsContainer.append(productContainer);

  const productFilmsDetails = document.createElement("div");
  productFilmsDetails.classList.add("product_films_details");
  productContainer.append(productFilmsDetails);

  const productImage = document.createElement("img");
  productImage.src = image.url;
  productFilmsDetails.append(productImage);

  const productDetails = document.createElement("div");
  productFilmsDetails.append(productDetails);

  const productTitle = document.createElement("h1");
  productTitle.textContent = title;
  productDetails.append(productTitle);

  const productTags = document.createElement("p");
  productTags.classList.add("copyright_2");
  productTags.textContent = `${genre}  |  ${rating}  |  ${released}`;
  productDetails.append(productTags);

  const productDescription = document.createElement("p");
  productDescription.textContent = description;
  productDetails.append(productDescription);

  const productKeyPeople = document.createElement("p");
  productKeyPeople.classList.add("copyright_2");
  productKeyPeople.textContent = `Director: Director HERE
    <br>Manuscript: Manuscript HERE
    <br>Cast: CAST HERE`;
  productDetails.append(productKeyPeople);

  const productPrice = document.createElement("h2");
  productPrice.textContent = `€${price}`;
  productDetails.append(productPrice);

  const productButtons = document.createElement("ul");
  productButtons.classList.add("product_buttons");
  productDetails.append(productButtons);

  const productButton1 = document.createElement("li");
  productButton1.innerHTML = `<a href="../wishlist.html" class="button">Wishlist <i class="fa-solid fa-heart film_icons"></i></a>`;
  productButtons.append(productButton1);

  const productButton2 = document.createElement("li");
  productButton2.innerHTML = `<a href="../checkout/checkout.html" class="button">Add to cart</a>`;
  productButtons.append(productButton2);

  const productButton3 = document.createElement("li");
  productButton3.innerHTML = `<a href="#" class="button">Trailer</a>`;
  productButtons.append(productButton3);

  const backgroundTrailer = document.createElement("iframe");
  backgroundTrailer.classList.add("youtube_trailer");
  backgroundTrailer.src = `${product.trailerLink}`;
  backgroundTrailer.allowFullscreen = true;
  productDetailsContainer.append(backgroundTrailer);
}

// <button onclick="history.back()" class="product_return"><i class="fa-solid fa-chevron-left"></i></button>
// <div>
//     <div class="product_container little_woman_product">
//         <div class="product_films_details">
//             <img src="../images/covers/little_woman_cover.jpg" alt="Little Women cover">
//             <div>
//                 <h1>Little Women</h1>
//                 <p class="copyright_2">Drama/Romance  |  A  |  2 h 15 m</p>
//                 <p>Jo March reflects back and forth on her life, telling the beloved story of the March sisters - four young women, each determined to live life on her own terms.</p>
//                 <p class="copyright_2">Director: Greta Gerwig
//                 <br>Manuscript: Greta Gerwig, Louisa May Alcott
//                 <br>Cast: Saoirse Ronan, Emma Watson, Florence Pugh</p>
//                 <h2>€10</h2>
//                 <ul>
//                     <li><a href="../wishlist.html" class="button">Wishlist <i class="fa-solid fa-heart film_icons"></i></a></li>
//                     <li><a href="../checkout/checkout.html" class="button">Add to cart</a></li>
//                     <li id="watch_trailer"><a href="#" class="button">Trailer</a></li>
//                 </ul>
//             </div>
//         </div>
//     </div>
//     <iframe src="https://www.youtube.com/embed/AST2-4db4ic?start=1&amp;end=149&autoplay=1&mute=1&loop=1&playlist=AST2-4db4ic" frameborder="0" allowfullscreen class=" youtube_trailer"></iframe>
// </div>
