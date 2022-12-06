import { createContext, useReducer, useContext, useEffect } from "react";
import reducer from "../reducer/cartReducer2";

const cartContext = createContext();

const getLocalData = () => {
  let localCartData = localStorage.getItem("userSelectData");
  // if (localCartData === []) {
  //   return [];
  // } else {
  //   return JSON.parse(localCartData);
  // }
  const parsedData = JSON.parse(localCartData);
  if (!Array.isArray(parsedData)) return [];

  return parsedData;
};
const initialState = {
  cart: getLocalData(),
  total_item: "",
  total_price: "",
  shipping_fee: 20000,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  // clear cart
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  // setDecrement and setIncrement
  const setDecrement = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };
  const setIncrement = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };
  useEffect(() => {
    // dispatch({ type: "CART_TOTAL_ITEM" });
    // dispatch({ type: "CART_TOTAL_PRICE" });
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("userSelectData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <cartContext.Provider
      value={{
        ...state,
        addToCart,
        removeItem,
        clearCart,
        setDecrement,
        setIncrement,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(cartContext);
};
