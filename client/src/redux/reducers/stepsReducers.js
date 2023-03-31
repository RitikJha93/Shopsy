export const stepsReducer = (state = { step: 0 }, action) => {
  switch (action.type) {
    case "INCREASE_STEP":
      return { step: state.step + 1 };
    case "DECREASE_STEP":
      if (state.step > 1) {
        return { step: state.step - 1 };
      } else {
        return { step: state.step };
      }
    default:
      return state;
  }
};
