export const calculatorReducer = (state = "", action) => {
  switch (action.type) {
    case "add":
      return state.concat(action.payload);
    case "result":
      try {
        return eval(state).toString();
      } catch (error) {
        return "Error";
      }
    case "del":
      return state.slice(0, state.length - 1);
    case "clear":
      return action.payload;
    case "err":
      return action.payload;
    default:
      return state;
  }
};
