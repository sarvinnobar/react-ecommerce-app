const InitialState = {
  cart: [],
  total: 0,
};

export default function cartReducer(state = InitialState, action) {
  switch (action.type) {
    case "Add-Item_To_Cart":
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.item.id
      );
      if (itemIndex !== -1) {
        return {
          ...state,
          cart: state.cart.map((item, index) =>
            index === itemIndex
              ? { ...item, count: item.count + action.item.count }
              : item
          ),
          total: state.total + action.item.price,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.item, count: 1 }],
          total: state.total + action.item.price,
        };
      }
    case "Remove_Item_From_Cart":
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn("can't delete");
      }

      return {
        ...state,
        cart: newCart,
        total: state.total - state.cart[index].price,
      };
    case "Increment_Item":
      const productIndex = state.cart.findIndex(
        (item) => item.id === action.id
      );
      return {
        ...state,
        cart: state.cart.map((item, index) =>
          index === productIndex ? { ...item, count: item.count + 1 } : item
        ),
        total: state.total + state.cart[productIndex].price,
      };

    case "Decrement_Item":
      const productIndex2 = state.cart.findIndex(
        (item) => item.id === action.id
      );
      const foundProduct = state.cart[productIndex2];
      if (foundProduct.count > 1) {
        return {
          ...state,
          cart: state.cart.map((item, index) =>
            index === productIndex2 ? { ...item, count: item.count - 1 } : item
          ),
          total: state.total - state.cart[productIndex2].price,
        };
      } else {
        const index = state.cart.findIndex(
          (cartItem) => cartItem.id === action.id
        );
        let newCart = [...state.cart];
        if (foundProduct.count == 1) {
          newCart.splice(index, 1);
        } else {
          console.warn("can't delete");
        }

        return {
          ...state,
          cart: newCart,
          total: state.total - state.cart[productIndex2].price,
        };
      }
    default:
      return state;
  }
}
