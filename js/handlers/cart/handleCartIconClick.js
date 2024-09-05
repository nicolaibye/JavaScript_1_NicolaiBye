import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";
import { handleCartCountDisplay } from "./handleCartCountDisplay.js";

export function handleCartIconClick() {
  const cartIcons = document.querySelectorAll("a[data-action='cart']");

  cartIcons.forEach((cartIcon) => {
    cartIcon.addEventListener("click", respondToCartIconClick);

    function respondToCartIconClick(event) {
      const cartIcon = event.target;
      const { id, title, image, genre, rating, released, price } = cartIcon.dataset;

      if (isIdInCart(id)) {
        removeFromCart(id);
        cartIcon.classList.add("inactive");
        cartIcon.classList.remove("active");
      } else {
        addToCart(id, title, image, genre, rating, released, price);
        cartIcon.classList.remove("inactive");
        cartIcon.classList.add("active");
      }
      handleCartCountDisplay();
    }
  });
}
