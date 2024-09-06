import { fetchProducts } from "../../api/products/fetchProducts.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import { createProductsHtml } from "../../ui/posts/createProductsHtml.js";
import { handleCartCountDisplay } from "../cart/handleCartCountDisplay.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";

export async function displayProductsHome(container) {
    let parent = container;
    if (typeof container === "string") {
      parent = document.querySelector(container);
    }
  
    try {
      // get products from api
      const products = await fetchProducts();
      //   call function with posts array to create html
  
      createProductsHtml(parent, products);
      handleCartIconClick();
      handleCartCountDisplay();
    } catch (error) {
      console.error(error);
      await displayMessage(parent, "error", error.message);
    }
  }

  displayProductsHome("#latest_blockbusters_container");
  displayProductsHome("#indie_films_container");
  displayProductsHome("#upcoming_films_container");