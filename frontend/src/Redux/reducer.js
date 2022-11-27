import * as types from "./actionTypes";

const initialState = {
  data:[],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, action) => {
  const { payload, type } = action;
//   console.log(payload);

  switch (type) {
    case types.GET_CAPSULES_DATA_REQUEST:
      return { ...state, isLoading: true, isError: false };

    case types.GET_CAPSULES_DATA_SUCCESS:
      return { ...state, isLoading: false, isError: false, data: payload };

    case types.GET_CAPSULES_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true };

    default:
      return state;
  }
};
