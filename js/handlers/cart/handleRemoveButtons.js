import { removeFromCart } from "../../utils/cart.js";

export function handleRemoveButtons() {
  const removeButtons = document.querySelectorAll("[data-action='remove']");

  removeButtons.forEach((removeButton) => {
    const { id } = removeButton.dataset;
    removeButton.addEventListener("click", () => {
      removeFromCart(id);
      location.reload();
    });
  });

  // function respondToRemoveButton() {}
}
