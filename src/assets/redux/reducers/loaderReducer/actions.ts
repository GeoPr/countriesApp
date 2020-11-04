export const loader_SHOW_LOADER = 'loader_SHOW_LOADER';
export const loader_HIDE_LOADER = 'loader_HIDE_LOADER';

interface loader_showLoader_T {
  type: typeof loader_SHOW_LOADER;
}
export const loader_showLoader = (): loader_showLoader_T => ({
  type: loader_SHOW_LOADER,
});

interface loader_hideLoader_T {
  type: typeof loader_HIDE_LOADER;
}
export const loader_hideLoader = (): loader_hideLoader_T => ({
  type: loader_HIDE_LOADER,
});

export type Loader_T = loader_showLoader_T | loader_hideLoader_T;
