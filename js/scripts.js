import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProductByID } from "./handlers/products/displayProductByID.js";
import { displayCart } from "./handlers/cart/displayCart.js";
import { displayProductsHome } from "./handlers/products/displayProductsHome.js";
import { handleCartCountDisplay } from "./handlers/cart/handleCartCountDisplay.js";

function router() {
  const { pathname } = window.location;

  switch (pathname) {
    case "/":
    case "/index.html":
      displayProductsHome("#latest_blockbusters_container");
      displayProductsHome("#indie_films_container");
      displayProductsHome("#upcoming_films_container");
      break;
    case "/library.html":
      displayProducts();
      break;
    case "/productDetails.html":
      displayProductByID();
      break;
    case "/about.html":
    case "/contact.html":
    case "/wishlist.html":
    case "/productDetails.html":
    case "/your_films.html":
    case "/profile.html":
      handleCartCountDisplay();
      break;
    case "/checkout/checkout.html":
      displayCart();
  }
}

router();
