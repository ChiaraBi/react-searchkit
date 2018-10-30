import {
  RESULTS_LOADING,
  RESULTS_FETCH_SUCCESS,
  RESULTS_FETCH_ERROR,
  RESULTS_UPDATE_LAYOUT,
} from '@app/state/types';

const defaultState = {
  loading: false,
  data: {
    hits: [],
    total: 0,
    aggregations: {},
    layout: undefined,
  },
  error: {},
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RESULTS_LOADING:
      return {
        ...state,
        loading: true,
        data: {
          ...state.data,
          total: 0,
          hits: [],
          aggregations: {},
        },
      };
    case RESULTS_FETCH_SUCCESS:
      return {
        loading: false,
        data: {
          ...state.data,
          aggregations: action.payload.aggregations,
          hits: action.payload.hits,
          total: action.payload.total,
        },
        error: {},
      };
    case RESULTS_FETCH_ERROR:
      return {
        loading: false,
        data: {
          ...state.data,
          aggregations: {},
          hits: [],
          total: 0,
        },
        error: action.payload,
      };
    case RESULTS_UPDATE_LAYOUT:
      return {
        ...state,
        data: {
          ...state.data,
          layout: action.payload,
        },
      };
    default:
      return state;
  }
};
