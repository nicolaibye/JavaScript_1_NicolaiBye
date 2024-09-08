import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProductByID } from "./handlers/products/displayProductByID.js";
import { displayCart } from "./handlers/cart/displayCart.js";
import { displayProductsHome } from "./handlers/products/displayProductsHome.js";
import { handleCartCountDisplay } from "./handlers/cart/handleCartCountDisplay.js";

function router() {
  const { pathname } = window.location;

  switch (pathname) {
    case "/JavaScript_1_NicolaiBye/":
    case "/JavaScript_1_NicolaiBye/index.html":
      displayProductsHome("#latest_blockbusters_container");
      displayProductsHome("#indie_films_container");
      displayProductsHome("#upcoming_films_container");
      break;
    case "/JavaScript_1_NicolaiBye/library.html":
      displayProducts();
      break;
    case "/JavaScript_1_NicolaiBye/productDetails.html":
      displayProductByID();
      break;
    case "/JavaScript_1_NicolaiBye/about.html":
    case "/JavaScript_1_NicolaiBye/contact.html":
    case "/JavaScript_1_NicolaiBye/wishlist.html":
    case "/JavaScript_1_NicolaiBye/productDetails.html":
    case "/JavaScript_1_NicolaiBye/your_films.html":
    case "/JavaScript_1_NicolaiBye/profile.html":
      handleCartCountDisplay();
      break;
    case "/JavaScript_1_NicolaiBye/checkout/checkout.html":
      displayCart();
  }
}

router();
