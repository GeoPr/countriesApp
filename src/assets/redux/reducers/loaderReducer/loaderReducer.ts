import { TActions } from './../rootReducer';
import { SHOW_LOADER, HIDE_LOADER } from './actionsTypes';
import * as actions from './actions';

interface IInitalState {
  isLoading: boolean;
}

type ActionsTypes = TActions<typeof actions>;

const initalState: IInitalState = { isLoading: false };

export const loaderReducer = (
  state: IInitalState = initalState,
  action: ActionsTypes,
): IInitalState => {
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
