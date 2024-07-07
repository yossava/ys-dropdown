# Searchable Dropdown Component

A customizable, searchable dropdown component for React applications, featuring sortable options, multiple or single select, and React portal support.

**Note: This package is still experimental and is being used for a technical test.**

## Getting Started

### Prerequisites

Make sure you have the following installed on your project:

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

## Props

| Prop           | Type      | Description                                                                                               | Default   |
| -------------- | --------- | --------------------------------------------------------------------------------------------------------- | --------- |
| `options`      | `array`   | An array of options to display in the dropdown. Each option should be an object with `value` and `label`. | `[]`      |
| `isMultiple`   | `boolean` | Allow multiple options to be selected.                                                                    | `true`    |
| `usePortal`    | `boolean` | Render dropdown using React Portals.                                                                      | `false`   |
| `enableSearch` | `boolean` | Enable search functionality in the dropdown.                                                              | `true`    |
| `outlined`     | `boolean` | Apply outlined style to the dropdown.                                                                     | `true`    |
| `label`        | `string`  | Label for the dropdown.                                                                                   | `"Label"` |
| `id`           | `string`  | ID for the dropdown element.                                                                              | `""`      |
| `order`        | `string`  | Sorting order of the options (e.g., `"asc"` for ascending, `"desc"` for descending).                      | `"asc"`   |
