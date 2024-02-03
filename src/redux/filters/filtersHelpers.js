const handleFulfilled = (state, action) => {
  state.filters = action.payload;
};

export { handleFulfilled };
