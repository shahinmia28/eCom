const filterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArr = action.payload.map((curElem) => curElem.price);
      let maxPrice = Math.max(...priceArr);
      let minPrice = Math.min(...priceArr);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: {
          ...state.filters,
          maxPrice: maxPrice,
          minPrice: minPrice,
          price: maxPrice,
        },
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VIEW":
      return {
        ...state,
        sort_view: action.payload,
      };

    case "SORTING_PRODUCTS":
      const { filter_products, sort_view } = state;

      let newSortData = [...filter_products].sort((a, b) => {
        switch (sort_view) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "a-z":
            return a.name.localeCompare(b.name);
          case "z-a":
            return b.name.localeCompare(a.name);
          default:
            return state;
        }
      });

      return {
        ...state,
        filter_products: newSortData,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };
    case "FILTER_PRODUCTS":
      let { all_products } = state;
      let tempFilterProducts = [...all_products];
      let { text, category, company, color, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.name.toLowerCase().includes(text)
        );
      }
      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.category.toLowerCase() === category.toLowerCase()
        );
      }
      if (company !== "all") {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.company.toLowerCase() === company.toLowerCase()
        );
      }
      if (color !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) =>
          curElem.colors.includes(color)
        );
      }
      if (price) {
        tempFilterProducts = tempFilterProducts.filter(
          (curElem) => curElem.price <= price
        );
      }

      return {
        ...state,
        filter_products: tempFilterProducts,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          company: "all",
          color: "all",
          maxPrice: state.filters.maxPrice,
          price: state.filters.maxPrice,
          minPrice: state.filters.minPrice,
        },
      };

    default:
      return state;
  }
};
export default filterReducer;

// switch (sort_view) {
//   case "lowest":
//     newSortData = filter_products.sort((a, b) => a.price - b.price);
//     break;
//   case "highest":
//     newSortData = filter_products.sort((a, b) => b.price - a.price);
//     break;
//   case "a-z":
//     newSortData = filter_products.sort((a, b) =>
//       a.name.localeCompare(b.name)
//     );
//     break;
//   case "z-a":
//     newSortData = filter_products.sort((a, b) =>
//       b.name.localeCompare(a.name)
//     );
//     break;
//   default:
//     return state;
// }

// const sortingProduct = (a, b) => {
//   switch (sort_view) {
//     case "lowest":
//       return a.price - b.price;
//     case "highest":
//       return b.price - a.price;
//     case "a-z":
//       return a.name.localeCompare(b.name);
//     case "z-a":
//       return b.name.localeCompare(a.name);
//     default:
//       return state;
//   }
// };
