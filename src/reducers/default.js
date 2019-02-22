import { BASIC } from "../actions";

const initialState = {
  hello: "world"
};

export default (prevState = initialState, action) => {
  switch (action.type) {
    case BASIC:
      return {
        hello: action.payload
      };
    default:
      return prevState;
  }
};
