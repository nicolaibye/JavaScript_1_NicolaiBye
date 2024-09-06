import { createProductsHtml } from "../../ui/posts/createProductsHtml.js";
import { handleCartIconClick } from "../cart/handleCartIconClick.js";

export function filterProducts(products) {
  const searchInput = document.querySelector("#your_films_search");

  if (searchInput) {
    searchInput.addEventListener("input", handleFilter);
  }

  function handleFilter(event) {
    const filterValue = event.target.value.trim().toLowerCase();
    console.log(filterValue);

    const filterProducts = products.data.filter((product) => {
      if (
        product.title.toLowerCase().includes(filterValue) ||
        product.genre.toLowerCase().includes(filterValue) ||
        product.rating.toLowerCase().startsWith(filterValue)
      ) {
        return true;
      }
    });

    let wrappedFilterProducts = { data: filterProducts };
    createProductsHtml(".library_films", wrappedFilterProducts);
    handleCartIconClick();
  }
}
