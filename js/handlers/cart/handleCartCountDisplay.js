import { getCart } from "../../utils/cart.js";

export function handleCartCountDisplay() {
  const cartCount = document.querySelector("#cart_amount");
  const cart = getCart();

  if (cart.length === 0) {
    cartCount.style.display = "none";
  } else {
    cartCount.style.display = "block";
    cartCount.textContent = cart.length;
  }

}
