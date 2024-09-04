const CART_KEY = "cart";

function saveToCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function getCart() {
    return JSON.parse(localStorage.getItem(CART_KEY)) || [];
}

export function isIdInCart(id) {
    const cart = getCart();
    return cart.some((product) => String(product.id) === String(id));
}

export function addToCart(id, title, genre, rating, released, price) {
    const newProduct = { id, title, genre, rating, released, price };
    const cart = getCart();
    cart.push(newProduct);
    saveToCart(cart);
}

export function removeFromCart(id) {
    const cart = getCart();
    const newCart = cart.filter((product) => product.id !== id);
    saveToCart(newCart);
}

export function clearCart() {
    // saveToCart([]);
    localStorage.removeItem(CART_KEY);
}

export function getTotalPrice(cart) {
    const total = cart.reduce((accumulator, cart) => accumulator + cart.price, 0); 
    return total;
  }