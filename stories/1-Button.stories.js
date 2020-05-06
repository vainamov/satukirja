import { withA11y } from '@storybook/addon-a11y';
import { action } from '@storybook/addon-actions';
import { withKnobs } from "@storybook/addon-knobs";
import { linkTo } from '@storybook/addon-links';

import MyButton from './MyButton';

export default {
  title: 'Button',
    component: MyButton,
  decorators: [withA11y, withKnobs],
};
              
export const Text = () => ({
  components: { MyButton },
  template: '<my-button @click="action">Hello Button</my-button>',
  methods: { action: action('clicked') },
});

export const Jsx = () => ({
  components: { MyButton },
  render(h) {
    return <my-button onClick={this.action}>With JSX</my-button>;
  },
  methods: { action: linkTo('clicked') },
});

export const Emoji = () => ({
  components: { MyButton },
  template: '<my-button @click="action">😀 😎 👍</my-button>',
  methods: { action: action('clicked') },
});