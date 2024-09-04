import { displayProducts } from "./handlers/products/displayProducts.js";
import { displayProductByID } from "./handlers/products/displayProductByID.js";
import { displayCart } from "./handlers/cart/displayCart.js";

function router() {
  const { pathname } = window.location;

  console.log(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      break;
    case "/js_testing.html":
      displayProducts();
      break;
    case "/productDetails.html":
      displayProductByID();
      break;
      case "/checkout/checkout_js.html":
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
