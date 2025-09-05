import { create } from 'zustand';
import { createTypedSelector } from 'zustand-selector-helper';

export interface Store {
  bears: number;
  fish: number;
  trees: number;
  increaseBears: () => void;
  increaseFish: () => void;
  increaseTrees: () => void;
  increaseAll: () => void;
  reset: () => void;
}

export const useBaseStore = create<Store>(set => ({
  bears: 0,
  fish: 0,
  trees: 0,
  increaseBears: () => set(state => ({ bears: state.bears + 1 })),
  increaseFish: () => set(state => ({ fish: state.fish + 1 })),
  increaseTrees: () => set(state => ({ trees: state.trees + 1 })),
  increaseAll: () =>
    set(state => ({
      bears: state.bears + 1,
      fish: state.fish + 1,
      trees: state.trees + 1,
    })),
  reset: () => set(() => ({ bears: 0, fish: 0, trees: 0 })),
}));

export const useStore = createTypedSelector(useBaseStore);
