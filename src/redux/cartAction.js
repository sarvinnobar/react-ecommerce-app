export function addToCart({ product }) {
  return {
    type: "Add-Item_To_Cart",
    item: {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      count: product.count,
    },
  };
}
export function removefromCart(id) {
  return {
    type: "Remove_Item_From_Cart",
    id: id,
  };
}
export function increment(id) {
  return {
    type: "Increment_Item",
    id: id,
  };
}
export function decrement(id) {
  return {
    type: "Decrement_Item",
    id: id,
  };
}
