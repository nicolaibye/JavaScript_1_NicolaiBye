import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductsHtml } from "../../ui/posts/createProductsHtml.js";
import { trailerLinks } from "../../constants/trailerLinks.js";
import { filterProducts } from "./filterProducts.js";

export async function displayProducts() {
  const container = document.querySelector(".library_films");

  try {
    // get products from api
    const products = await fetchProducts();
    //   call function with posts array to create html

    // products.data.forEach(addTrailers);
    // function addTrailers(i) {
    //   products.trailerUrl = trailerLinks[0].trailerLink;
    // }

    products.data.forEach((idMovie) => {
      let matchingMovie = trailerLinks.find(
        (idTrailer) => idTrailer.id === idMovie.id
      );

      if (matchingMovie) {
        idMovie.trailerLink = matchingMovie.trailerLink;
      }
    });

    createProductsHtml(container, products);
    filterProducts(products);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
