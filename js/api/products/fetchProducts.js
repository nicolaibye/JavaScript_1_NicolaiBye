import { productUrl } from "../../constants/api.js";

export async function fetchProducts() {
  const response = await fetch(productUrl);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("Error fetching products");
}
