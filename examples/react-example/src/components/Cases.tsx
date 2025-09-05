import { useColorFlash } from '../hooks/useColorFlash';
import { useRenderCount } from '../hooks/useRenderCount';
import { useStore, useBaseStore } from '../store';
import { useShallow } from 'zustand/shallow';

//Subscribe to bears only via selector pattern
export function BearSelectorPatternCase() {
  const bears = useBaseStore(state => state.bears);
  const renderCount = useRenderCount();
  const bgColor = useColorFlash(renderCount);

  return (
    <>
      <div
        className="grid-content"
        style={{
          backgroundColor: bgColor,
        }}
      >
        bears 🐻: {bears}
      </div>
      <div className="grid-footer">
        renderCount(<strong>{renderCount}</strong>)
      </div>
    </>
  );
}

//Subscribe to fish only via selector pattern
export function FishSelectorPatternCase() {
  const fish = useBaseStore(state => state.fish);
  const renderCount = useRenderCount();
  const bgColor = useColorFlash(renderCount);

  return (
    <>
      <div
        className="grid-content"
        style={{
          backgroundColor: bgColor,
        }}
      >
        fish 🐟: {fish}
      </div>
      <div className="grid-footer">
        renderCount(<strong>{renderCount}</strong>)
      </div>
    </>
  );
}

// Subscribe to fish only via selectorKeys
export function FishWithSelectorKeysCase() {
  const store = useStore({
    selectorKeys: ['fish'],
  });
  const renderCount = useRenderCount();
  const bgColor = useColorFlash(renderCount);

  return (
    <>
      <div
        className="grid-content"
        style={{
          backgroundColor: bgColor,
        }}
      >
        fish 🐟: {store.fish}
      </div>
      <div className="grid-footer">
        renderCount(<strong>{renderCount}</strong>)
      </div>
    </>
  );
}

// Subscribe to fish and trees only via selectorKeys
export function FishAndTreesWithSelectorKeysCase() {
  const store = useStore({
    selectorKeys: ['fish', 'trees'],
  });
  const renderCount = useRenderCount();
  const bgColor = useColorFlash(renderCount);

  return (
    <>
      <div
        className="grid-content"
        style={{
          backgroundColor: bgColor,
        }}
      >
        fish 🐟: {store.fish}, trees 🌳: {store.trees}
      </div>
      <div className="grid-footer">
        renderCount(<strong>{renderCount}</strong>)
      </div>
    </>
  );
}

// Subscribe to the entire store states
export function SubscribeEntireStoreCase() {
  const store = useStore();
  const renderCount = useRenderCount();
  const bgColor = useColorFlash(renderCount);

  return (
    <>
      <div
        className="grid-content"
        style={{
          backgroundColor: bgColor,
        }}
      >
        fish 🐟: {store.fish}, trees 🌳: {store.trees}
      </div>
      <div className="grid-footer">
        renderCount(<strong>{renderCount}</strong>)
      </div>
    </>
  );
}

// Subscribe to fish and trees with zustand selector pattern with useShallow
export function SelectorPatternWithUseShallowCase() {
  const { fish, trees } = useBaseStore(
    useShallow(state => {
      return {
        fish: state.fish,
        trees: state.trees,
      };
    }),
  );
  const renderCount = useRenderCount();
  const bgColor = useColorFlash(renderCount);

  return (
    <>
      <div
        className="grid-content"
        style={{
          backgroundColor: bgColor,
        }}
      >
        fish 🐟: {fish}, trees 🌳: {trees}
      </div>
      <div className="grid-footer">
        renderCount(<strong>{renderCount}</strong>)
      </div>
    </>
  );
}

// // Subscribe to fish and trees with zustand selector pattern without useShallow
// export function SelectorPatternWithoutUseShallowCase() {
//   const { fish, trees } = useBaseStore((state) => ({
//     fish: state.fish,
//     trees: state.trees,
//   }));

//   const renderCount = useRenderCount();
//   const bgColor = useColorFlash(renderCount);

//   return (
//     <>
//       <div
//         className="grid-content"
//         style={{
//           backgroundColor: bgColor,
//         }}
//       >
//         fish 🐟: {fish}, trees 🌳: {trees}
//       </div>
//       <div className="grid-footer">
//         renderCount(<strong>{renderCount}</strong>)
//       </div>
//     </>
//   );
// }
