const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

export { handlePending, handleRejected, handleFulfilled };
