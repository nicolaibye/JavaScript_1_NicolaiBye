import { createProductsHtml } from "../../ui/posts/createProductsHtml.js";
import { createProductsHtmlFilter } from "../../ui/posts/createProductsHtmlFilter.js";

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
        product.title.toLowerCase().startsWith(filterValue) ||
        product.genre.toLowerCase().includes(filterValue) ||
        product.rating.toLowerCase().startsWith(filterValue)
      ) {
        return true;
      }
    });
    console.log(filterProducts);
    createProductsHtmlFilter(".library_films", filterProducts);
  }
}
