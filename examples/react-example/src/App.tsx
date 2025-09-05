import {
  BearSelectorPatternCase,
  FishSelectorPatternCase,
  FishWithSelectorKeysCase,
  FishAndTreesWithSelectorKeysCase,
  SubscribeEntireStoreCase,
  SelectorPatternWithUseShallowCase,
} from './components/Cases';
import { useStore } from './store';

export default function App() {
  const { increaseAll, increaseFish, increaseBears, increaseTrees } = useStore({
    selectorKeys: ['increaseAll', 'increaseFish', 'increaseBears', 'increaseTrees'],
  });

  const increaseBearsAndTrees = () => {
    increaseBears();
    increaseTrees();
  };

  const reset = () => {
    window?.location?.reload();
  };

  return (
    <div className="app-container">
      <h1>zustand-selector-helper Demo</h1>
      <p>Click the buttons to see the difference between the cases.</p>

      <div className="grid">
        <div className="grid-item">
          <div className="grid-header">state ={'>'} state.bears</div>
          <BearSelectorPatternCase />
        </div>

        <div className="grid-item">
          <div className="grid-header">state ={'>'} state.fish</div>
          <FishSelectorPatternCase />
        </div>
        <div className="grid-item">
          <div className="grid-header">
            state ={'>'} state.fish, state ={'>'} state.trees + useShallow
          </div>
          <SelectorPatternWithUseShallowCase />
        </div>

        <div className="grid-item selector-keys">
          <div className="grid-header">selectorKeys : [{`'fish'`}]</div>
          <FishWithSelectorKeysCase />
        </div>
        <div className="grid-item selector-keys">
          <div className="grid-header">
            selectorKeys : [{`'fish'`}, {`'trees'`}]
          </div>
          <FishAndTreesWithSelectorKeysCase />
        </div>
        <div className="grid-item selector-keys">
          <div className="grid-header">
            entire store <s>without selectorKeys</s>
          </div>
          <SubscribeEntireStoreCase />
        </div>
      </div>

      <div className="button-container">
        <button onClick={increaseBears} className="button">
          Increase bears 🐻
        </button>
        <button onClick={increaseFish} className="button">
          Increase fish 🐟
        </button>
        <button onClick={increaseAll} className="button">
          Increase all 🐻 🐟 🌳
        </button>
        <button onClick={increaseBearsAndTrees} className="button">
          Increase bears 🐻, trees 🌳
        </button>
        <button onClick={reset} className="button">
          Reset
        </button>
      </div>
    </div>
  );
}
