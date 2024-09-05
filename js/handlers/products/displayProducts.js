import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductsHtml } from "../../ui/posts/createProductsHtml.js";
import { filterProducts } from "./filterProducts.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.js";

export async function displayProducts() {
  const container = document.querySelector(".library_films");

  try {
    // get products from api
    const products = await fetchProducts();
    //   call function with posts array to create html

    createProductsHtml(container, products);
    filterProducts(products);
    handleCartIconClick();
    handleCartCountDisplay();
  } catch (error) {
    console.error(error);
    displayMessage(container, "error", error.message);
  }
}
