import { fetchProductByID } from "../../api/products/fetchProductByID.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductHtmlByID } from "../../ui/posts/createProductHtmlByID.js";
import { getQueryParam } from "../../utils/getQueryParam.js";
import { trailerLinks } from "../../constants/trailerLinks.js";

export async function displayProductByID() {
  // get product id from url

  const id = getQueryParam("id");

  console.log(id);

  // if no id redirect to index

  if (!id) {
    window.location.href = "/";
  }

  const container = document.querySelector("#product_details");

  try {
    // if there is an id fetch product by id
    const product = await fetchProductByID(id);

    let matchingMovie = trailerLinks.find(
      (idTrailer) => idTrailer.id === product.data.id
    );

    if (matchingMovie) {
      product.trailerLink = matchingMovie.trailerLink;
    }

    createProductHtmlByID(container, product);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }

  // wrap everything in a try catch
}
