import { createContext, useReducer } from "react";
export const CartContext = createContext();

const initalState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingCart = state.cart.find(
        (item) => item.id === action.payload.id
      );

      const currentDate = new Date().toLocaleDateString();
      const currentTime = new Date().toLocaleTimeString();

      if (existingCart) {
        return {
          ...state,
          cart: state.cart.map((item) => {
            return item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                  isdate: currentDate,
                  istime: currentTime,
                }
              : item;
          }),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            {
              ...action.payload,
              quantity: 1,
              isdate: currentDate,
              istime: currentTime,
            },
          ],
        };
      }
    case "REMOVE_FROM_CART": {
      return {
        ...state,
        cart: state.cart.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    }
    case "INCREMENT_QUANTITY": {
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    }

    case "DECREMENT_QUANTITY": {
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload && item.quantity > 1
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Optional: Remove items with quantity 0
      };
    }
    case "CLEAR_CART": {
      return {
        ...state,
        cart: [],
      };
    }
    default:
      return state;
  }
};

export const ContextBox = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initalState);

  return (
    <>
      <CartContext.Provider value={{ cart: state.cart, dispatch }}>
        {children}
      </CartContext.Provider>
    </>
  );
};
