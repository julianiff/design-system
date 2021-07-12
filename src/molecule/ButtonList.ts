import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
@customElement('iff-button-list')
export class ButtonList extends LitElement {
  static styles = css`
    :host {
      display: flex;
      flex-wrap: wrap;
    }
    ::slotted(*) {
      --iff-card__padding--top-bottom: var(--iff__dimension--015);
      --iff-card__padding--left-right: var(--iff__dimension--015);
      margin: var(--iff-alias__spacer, var(--iff__spacer--xs));
    }
  `;

  render() {
    return html`<slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button-list': ButtonList;
  }
}
