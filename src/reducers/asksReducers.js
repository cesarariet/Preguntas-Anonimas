const INITIAL_STATE = {
  asks: [],
  filteredAsks: [],
  loading: false,
  error: '',
};

export default function asksReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'get_asks':
      return {
        ...state,
        asks: action.payload,
        filteredAsks: action.payload,
        loading: false,
      };
    case 'filter_asks':
      return {
        ...state,
        filteredAsks: action.payload,
      };
    case 'create_ask':
      return {
        ...state,
        asks: state.asks.concat(action.payload),
        filteredAsks: state.asks.concat(action.payload),
        loading: false,
      };
    case 'loading':
      return { ...state, loading: true };
    case 'error':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
