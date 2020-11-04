export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';

interface TShowLoader {
  type: typeof SHOW_LOADER;
}
export const showLoader = (): TShowLoader => ({
  type: SHOW_LOADER,
});

interface THideLoader {
  type: typeof HIDE_LOADER;
}
export const hideLoader = (): THideLoader => ({
  type: HIDE_LOADER,
});

export type TLoader = TShowLoader | THideLoader;
