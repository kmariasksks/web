export const addToCart = (deskData, amount) => ({
  type: 'ADD_TO_CART',
  payload: {
      deskData,
      amount,
  },
});

export const removeFromCart = (deskDataId) => ({
  type: 'REMOVE_FROM_CART',
  payload: deskDataId,
});

export const incrementAmount = (deskDataId) => ({
  type: 'INCREMENT_AMOUNT',
  payload:deskDataId,
});

export const decrementAmount = (deskDataId) => ({
  type: 'DECREMENT_AMOUNT',
  payload: deskDataId,
});