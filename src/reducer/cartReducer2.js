const cartReducer = (state, action) => {
  switch (action.type) {
    // Add to cart
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      // existing product
      let existingProduct = state.cart.find(
        (curElem) => curElem.id === id + color
      );
      if (existingProduct) {
        let updatedProduct = state.cart.map((curElem) => {
          if (curElem.id === id + color) {
            let newAmount = curElem.amount + amount;
            if (newAmount >= curElem.max) {
              newAmount = curElem.max;
            }
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });
        return {
          ...state,
          cart: updatedProduct,
        };
      } else {
        let cartProduct = {
          id: id + color,
          color,
          amount,
          name: product.name,
          price: product.price,
          max: product.stock,
          image: product.image[0].url,
        };
        return {
          ...state,
          cart: [...state.cart, cartProduct],
        };
      }

    // remove item
    case "REMOVE_ITEM":
      let updateItem = state.cart.filter(
        (curElem) => curElem.id !== action.payload
      );
      return {
        ...state,
        cart: updateItem,
      };

    // clear cart
    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // set Decrement
    case "SET_DECREMENT":
      let decProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decAmount = curElem.amount - 1;

          if (decAmount <= 1) {
            decAmount = 1;
          }

          return {
            ...curElem,
            amount: decAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: decProduct,
      };

    // set Increment
    case "SET_INCREMENT":
      let incProduct = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let inAmount = curElem.amount + 1;

          if (inAmount >= curElem.max) {
            inAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: inAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: incProduct,
      };
    // CART_TOTAL_ITEM
    // case "CART_TOTAL_ITEM":
    //   let updateTotalItem = state.cart.reduce((initial, curElem) => {
    //     initial = initial + curElem.amount;
    //     return initial;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_item: updateTotalItem,
    //   };
    // CART_TOTAL_PRICE
    // case "CART_TOTAL_PRICE":
    //   let total_price = state.cart.reduce((initialVal, curElem) => {
    //     let { price, amount } = curElem;
    //     initialVal = initialVal + price * amount;
    //     return initialVal;
    //   }, 0);
    //   return {
    //     ...state,
    //     total_price,
    //   };

    // CART_ITEM_PRICE_TOTAL

    case "CART_ITEM_PRICE_TOTAL":
      let { total_item, total_price } = state.cart.reduce(
        (accum, curElem) => {
          let { price, amount } = curElem;

          accum.total_item = accum.total_item + amount;
          accum.total_price = accum.total_price + price * amount;
          return accum;
        },
        {
          total_item: 0,
          total_price: 0,
        }
      );
      return {
        ...state,
        total_item,
        total_price,
      };

    // default
    default:
      return state;
  }
};

export default cartReducer;
