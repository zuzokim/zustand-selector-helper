import { StoreApi, UseBoundStore } from 'zustand';
import { useShallow } from 'zustand/shallow';

type ExtractState<S> = S extends { getState: () => infer T } ? T : never;

/**
 * Creates a typed selector hook for a given Zustand store.
 *
 * @example
 * // Subscribe to the whole store
 * const store = useTypedSelector();
 *
 * @example
 * // Subscribe to specific keys
 * const store = useTypedSelector({ selectorKeys: ['fish', 'bears'] });
 *
 * @template T - State type
 * @template S - Store API type with state T
 * @param useStore - The original Zustand store hook
 */
const createTypedSelector = <T, S extends StoreApi<T>>(useStore: UseBoundStore<S>) => {
  type State = ExtractState<S>;

  return function <K extends readonly (keyof State)[]>(config?: { selectorKeys?: K }) {
    const { selectorKeys } = config ?? {};

    // When no selector keys provided, return the entire state
    if (!selectorKeys || selectorKeys.length === 0) {
      return useStore(state => state);
    }

    return useStore(
      useShallow(state => {
        const result = {} as Pick<State, (typeof selectorKeys)[number]>;
        for (const key of selectorKeys) {
          result[key] = state[key];
        }
        return result;
      }),
    );
  };
};

export default createTypedSelector;
