import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductsHtml } from "../../ui/posts/createProductsHtml.js";

export async function displayProducts() {
  console.log("DOM fully loaded and parsed");

  const container = document.querySelector(".library_films");

  try {
    // get products from api
    const products = await fetchProducts();
    //   call function with posts array to create html
    createProductsHtml(container, products);
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
