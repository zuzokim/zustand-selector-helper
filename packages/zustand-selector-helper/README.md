# Zustand Selector Helper

A utility library for creating type-safe and efficient selectors with [Zustand](https://github.com/pmndrs/zustand). Write concise code with string-based selector keys while maintaining full TypeScript support.

[![npm version](https://img.shields.io/npm/v/@zuzokim/zustand-selector-helper.svg)](https://www.npmjs.com/package/@zuzokim/zustand-selector-helper)
[![license](https://img.shields.io/npm/l/@zuzokim/zustand-selector-helper.svg)](https://github.com/zuzokim/zustand-selector-helper/blob/main/packages/zustand-selector-helper/LICENSE)

## Features

- **Fully typed**: TypeScript support out of the box
- **Performance**: Efficient selectors that prevent unnecessary re-renders
- **Concise syntax**: Use string keys (`store('key')`) instead of selector functions (`store(state => state.key)`)
- **Flexibility**: Works with any Zustand store structure

## Installation

```bash
# npm
npm install @zuzokim/zustand-selector-helper

# yarn
yarn add @zuzokim/zustand-selector-helper

# pnpm
pnpm add @zuzokim/zustand-selector-helper
```

## Usage

### Example

https://github.com/user-attachments/assets/e166552a-aba4-4096-af2f-918f1f37c877

- see [React Example](https://github.com/zuzokim/zustand-selector-helper/blob/main/examples/react-example/src/App.tsx)

```bash
pnpm run dev
```

### How It Works

Under the hood, `zustand-selector-helper` uses Zustand's built-in `shallow` comparison function to optimize rendering. This means:

- Components only re-render when the selected state value actually changes
- Object equality is compared with shallow equality checking, not reference equality
- When selecting multiple properties, changes to any selected property will trigger a re-render

This allows you to write concise, performant selectors without manually implementing equality checks or memoization.

## Contributing

Contributions are always welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT License - see the [LICENSE](./LICENSE) file for details.
