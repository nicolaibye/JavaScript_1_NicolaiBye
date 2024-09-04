import { addToCart, isIdInCart, removeFromCart } from "../../utils/cart.js";

export function handleCartIconClick() {
  const cartIcon = document.querySelector("#cart_icon");

  cartIcon.addEventListener("click", respondToCartIconClick);

  function respondToCartIconClick(event) {


    const cartIcon = event.target;
    const { id, title, genre, rating, released, price } = cartIcon.dataset;

    if (isIdInCart(id)) {
      removeFromCart(id);
      cartIcon.classList.add("inactive");
      cartIcon.classList.remove("active");
    } else {
      addToCart(id, title, genre, rating, released, price);
      cartIcon.classList.remove("inactive");
      cartIcon.classList.add("active");
    }
  }
}
