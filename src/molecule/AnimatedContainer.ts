import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
//@ts-ignore
import {flip} from '@lit-labs/motion';

/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
@customElement('iff-animated-container')
export class AnimatedContainer extends LitElement {
  static styles = css`
    .box {
      transform: translateX(0px);
    }

    .shifted {
      transform: translateX(-5px);
    }
  `;

  // Intersection Observer and then slow fade in of elements
  /**
   * The number of times the button has been clicked.
   */
  @property({type: Boolean})
  shifted = false;

  render() {
    return html`
      <div
        @mouseenter=${this._toggle}
        @mouseleave=${this._toggle}
        class="box ${this.shifted ? 'shifted' : ''}"
        ${flip({properties: ['transform', 'opacity']})}
      >
        <slot></slot>
      </div>
    `;
  }

  _toggle() {
    this.shifted = !this.shifted;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-animated-container': AnimatedContainer;
  }
}
