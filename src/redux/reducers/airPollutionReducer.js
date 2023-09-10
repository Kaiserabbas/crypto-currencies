// reducers/airPollutionReducer.js
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const airPollutionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_AIR_POLLUTION_SUCCESS':
      return { ...state, data: action.payload, loading: false, error: null };
    case 'FETCH_AIR_POLLUTION_FAILURE':
      return { ...state, data: null, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default airPollutionReducer;
