import { clearCart, getTotalPrice } from "../../utils/cart.js";
import { displayMessage } from "../common/displayMessage.js";

export function createCartHtml(container, cart) {
  // if cart is empty display message
  if (cart.length === 0) {
    return displayMessage(container, "warning", "Your cart is empty");
  }

  cart.forEach((cartProduct) => {
    const { id, title, genre, image, rating, released, price } = cartProduct;
    const cartProductContainer = document.createElement("div");
    cartProductContainer.classList.add("checkout_overview_product");

    const productImage = document.createElement("img");
    productImage.src = image;
    productImage.alt = `${title} cover`;
    productImage.classList.add("checkout_picture");

    const cartProductDetails = document.createElement("div");
    cartProductDetails.classList.add("checkout_details_product");


    const titleElement = document.createElement("h2");
    titleElement.textContent = title;
    const genreElement = document.createElement("p");
    genreElement.textContent = `${genre}  |  ${rating}  |  ${released}`;

    const removeButton = document.createElement("button");
    removeButton.classList.add("remove_button");
    removeButton.textContent = "X";
    removeButton.dataset.action = "remove";
    removeButton.dataset.id = id;

    const priceElement = document.createElement("h2");
    priceElement.textContent = "€" + Math.round(price * 0.085);
    priceElement.classList.add("checkout_single_price_product");

    const divideLine = document.createElement("hr");

    cartProductDetails.append(titleElement, genreElement);
    cartProductContainer.append(productImage);
    cartProductContainer.append(cartProductDetails);
    cartProductContainer.append(priceElement);
    container.append(cartProductContainer);
    container.append(removeButton);
    container.append(divideLine);
  });
  // else display cart

  const totalItems = document.createElement("p");
  totalItems.textContent = `Items: ${cart.length}`;
  container.append(totalItems);

  const totalPriceNumber = getTotalPrice(cart) * 0.085;

  const totalPrice = document.createElement("p");
  totalPrice.classList.add("checkout_single_price_product");
  totalPrice.textContent = `Total: €${totalPriceNumber.toFixed(0)}`;
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

{/* 
    <hr>
    <div class="checkout_overview_product">
        <img src="../images/covers/godzilla_kingofthemonsters_cover.jpg" alt="Godzilla: King of the Monsters cover" class="checkout_picture">
        <div class="checkout_details_product">
            <h2>Godzilla: King of the Monsters</h2>
            <p>Sci-Fi/Action  |  12+  |  2 h 12 m</p>
            <p class="copyright_2">Online code</p>
        </div>
        <div class="counter checkout_amount_product">
            <span class="down" onClick='decreaseCount(event, this)'>-</span>
            <input type="text" value="1">
            <span class="up" onClick='increaseCount(event, this)'>+</span>
        </div>
        <h2 class="checkout_single_price_product pink_color">€6</h2>
        <h2 class="checkout_total_price_product pink_color">€6</h2>
    </div>
    <hr>
    <div class="checkout_overview_product">
        <img src="../images/covers/all_of_us_strangers_cover.jpg" alt="All of Us Strangers cover" class="checkout_picture">
        <div class="checkout_details_product">
            <h2>All of Us Strangers</h2>
            <p>Romance  |  12+  |  1 h 45 m</p>
            <p class="copyright_2">Online code</p>
        </div>
        <div class="counter checkout_amount_product">
            <span class="down" onClick='decreaseCount(event, this)'>-</span>
            <input type="text" value="2">
            <span class="up" onClick='increaseCount(event, this)'>+</span>
        </div>
        <h2 class="checkout_single_price_product">€10</h2>
        <h2 class="checkout_total_price_product">€20</h2>
    </div>    
    <hr>
    <div class="checkout_overview_product">
        <img src="../images/covers/after_yang_cover.png" alt="After Yang cover" class="checkout_picture">
        <div class="checkout_details_product">
            <h2>After Yang</h2>
            <p>Drama/Sci-Fi  |  9  |  1 h 36 m</p>
            <p class="copyright_2">Online code</p>
        </div>
        <div class="counter checkout_amount_product">
            <span class="down" onClick='decreaseCount(event, this)'>-</span>
            <input type="text" value="1">
            <span class="up" onClick='increaseCount(event, this)'>+</span>
        </div>
        <h2 class="checkout_single_price_product">€10</h2>
        <h2 class="checkout_total_price_product">€10</h2>
    </div>
    <hr>
<div class="checkout_main_grid checkout_line">
    <p class="checkout_amount_text_product">Items</p>
    <p class="checkout_amount_product">4</p>
    <p class="checkout_single_price_product">Total</p>
    <h2 class="checkout_total_price_product">€36</h2>
    <a href="../checkout/checkout_shipping.html" class="cta checkout_cta">checkout</a>
</div>
</section> */}