import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProductByID } from "./handlers/products/displayProductByID.js";
import { displayCart } from "./handlers/cart/displayCart.js";
import { displayProductsHome } from "./handlers/products/displayProductsHome.js";

function router() {
  const { pathname } = window.location;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      displayProductsHome();
      break;
    case "/library.html":
      displayProducts();
      break;
    case "/productDetails.html":
      displayProductByID();
      break;
      case "/checkout/checkout.html":
        displayCart();
  }
}

router();

// IIFE
// (function() {
//     const { pathname } = window.location;

//     console.log(pathname);

//     switch (pathname) {
//       case "/":
//       case "/index.html":
//         break;
//       case "/js_testing.html":
//         displayProducts();
//         break;
//       case "/productDetails.html":
//         displayProductByID();
//         break;
//     }
// })();
// Immediately Invoked Function Expression example
