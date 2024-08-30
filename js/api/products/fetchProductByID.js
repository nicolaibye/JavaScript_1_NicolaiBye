import { productUrl } from "../../constants/api.js";

export async function fetchProductByID(id) {
  const url = `${productUrl}/${id}`;

  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    return json;
  }

  throw new Error("Error fetching products");
}
