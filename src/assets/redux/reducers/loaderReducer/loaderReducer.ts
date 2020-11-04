import { Loader_T, loader_SHOW_LOADER, loader_HIDE_LOADER } from './actions';
interface IInitalState {
  isLoading: boolean;
}

const initalState: IInitalState = { isLoading: false };

export const loaderReducer = (
  state: IInitalState = initalState,
  action: Loader_T,
): IInitalState => {
  switch (action.type) {
    case loader_SHOW_LOADER: {
      return { ...state, isLoading: true };
    }

    case loader_HIDE_LOADER: {
      return { ...state, isLoading: false };
    }

    default:
      return state;
  }
};
