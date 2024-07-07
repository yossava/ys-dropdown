# Searchable Dropdown Component

A customizable, searchable dropdown component for React applications, featuring sortable options, multiple or single select, and React portal support.

**Note: This package is still experimental and is being used for a technical test.**

## Getting Started

### Prerequisites

Make sure you have the following installed on your project:

- node: ">=18.17.0"
- react: "^18.3.1"
- react-dom: "^18.3.1"
- react-scripts: "5.0.1"
- tailwindcss: "^3.4.4",

### Installation

To install the component, you can use npm or yarn:

```bash
npm install ys-dropdown
```

or

```bash
yarn add ys-dropdown
```

Add to tailwind.config.js:

```bash
content: [
    ...
    "./node_modules/ys-dropdown/**/*.{js,jsx,ts,tsx}",
  ],
```

Add it to your project:

```bash
import { Dropdown } from "ys-dropdown";
```

## Development and Storybook

To play along with this component using Storybook, clone this git repository and run:

```bash
npm install
npm run storybook
```
