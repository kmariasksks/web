const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_TO_CART':
      const deskDataStoreId = state.cart.findIndex((item) => item.deskData.id === action.payload.deskData.id);

      if (deskDataStoreId !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[deskDataStoreId].amount += action.payload.amount;

        return {
          ...state,
          cart: updatedCart,
        };
      } else {

        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter((item) => item.deskData.id !== action.payload),
      };

    case 'INCREMENT_AMOUNT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.deskData.id === action.payload) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        }),
      };

    case 'DECREMENT_AMOUNT':
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.deskData.id === action.payload && item.amount > 1) {
            return {
              ...item,
              amount: item.amount - 1,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default cartReducer;