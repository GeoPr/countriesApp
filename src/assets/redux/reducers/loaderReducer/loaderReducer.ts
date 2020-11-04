import { TLoader, SHOW_LOADER, HIDE_LOADER } from './actions';
interface IInitalState {
  isLoading: boolean;
}

const initalState: IInitalState = { isLoading: false };

export const loaderReducer = (state: IInitalState = initalState, action: TLoader): IInitalState => {
  switch (action.type) {
    case SHOW_LOADER: {
      return { ...state, isLoading: true };
    }

    case HIDE_LOADER: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
