const handleFulfilledAll = (state, action) => {
  state.cars = action.payload;
};

const handleFulfilledById = (state, action) => {
  state.carById = action.payload;
};

export { handleFulfilledAll, handleFulfilledById };
