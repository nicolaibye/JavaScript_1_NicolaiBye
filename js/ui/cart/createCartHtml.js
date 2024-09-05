import { clearCart, getTotalPrice } from "../../utils/cart.js";
import { displayMessage } from "../common/displayMessage.js";

export function createCartHtml(container, cart) {
  // if cart is empty display message
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Your cart is empty");
  }

  cart.forEach((cartProduct) => {
    const { id, title, genre, rating, released, price } = cartProduct;
    const cartProductContainer = document.createElement("div");
    cartProductContainer.classList.add("cart_item");

    const titleElement = document.createElement("h4");
    titleElement.textContent = title;

    const removeButton = document.createElement("button");
    removeButton.textContent = "x";
    removeButton.dataset.action = "remove";
    removeButton.dataset.id = id;

    cartProductContainer.append(titleElement);
    cartProductContainer.append(removeButton);
    container.append(cartProductContainer);
  });
  // else display cart

  const totalItems = document.createElement("p");
  totalItems.classList.add("total_items");
  totalItems.textContent = `Total items: ${cart.length}`;
  container.append(totalItems);

  const totalPrice = document.createElement("p");
  totalPrice.classList.add("total_price");
  totalPrice.textContent = `Total price: ${getTotalPrice(cart)}`;
  container.append(totalPrice);

  const button = confirmationButton();
  container.append(button);
}

function confirmationButton() {
  const button = document.createElement("button");
  button.classList.add("cta", "checkout_cta");
  button.textContent = "Confirm order";

  button.addEventListener("click", () => {
    clearCart();
    window.location.href = "/checkout/checkout_success.html";
  });
  return button;
}
