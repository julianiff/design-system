import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import style from './style.css';

const PLAYGROUND_TAG = 'iff-playground-item';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement(PLAYGROUND_TAG)
export class PlaygroundItem extends LitElement {
  static styles = [style];

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [PLAYGROUND_TAG]: PlaygroundItem;
  }
}
