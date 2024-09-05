import { createCartHtml } from "../../ui/cart/createCartHtml.js";
import { getCart } from "../../utils/cart.js";
import { handleCartCountDisplay } from "./handleCartCountDisplay.js";
import { handleRemoveButtons } from "./handleRemoveButtons.js";

export function displayCart() {
    // get cart from local storage
    const cart = getCart();
    const container = document.querySelector("#cart_container");
    createCartHtml(container, cart);
    handleRemoveButtons();
    handleCartCountDisplay();
}