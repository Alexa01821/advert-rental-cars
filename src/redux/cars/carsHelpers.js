const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilledAll = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.cars = action.payload;
};

const handleFulfilledById = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.carById = action.payload;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export {
  handlePending,
  handleFulfilledAll,
  handleFulfilledById,
  handleRejected,
};
