```js script
import { html } from '@open-wc/demoing-storybook';
import '../dist/iff-generic-card.js';

export default {
  title: 'IffGenericCard',
  component: 'iff-generic-card',
  options: { selectedPanel: "storybookjs/knobs/panel" },
};
```

# IffGenericCard

A component for...

## Features:

- a
- b
- ...

## How to use

### Installation

```bash
yarn add iff-generic-card
```

```js
import 'iff-generic-card/iff-generic-card.js';
```

```js preview-story
export const Simple = () => html`
  <iff-generic-card></iff-generic-card>
`;
```

## Variations

###### Custom Title

```js preview-story
export const CustomTitle = () => html`
  <iff-generic-card title="Hello World"></iff-generic-card>
`;
```
