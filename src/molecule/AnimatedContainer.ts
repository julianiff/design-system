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
      transform: rotate3d(0);
    }

    .shifted {
      transform: rotate3d(1, 1, 0, 10deg);
    }
  `;

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
        ${flip({properties: ['transform', 'box-shadow']})}
      >
        <slot></slot>
      </div>
    `;
  }

  _toggle(e: any) {
    console.log('ehr', e);
    this.shifted = !this.shifted;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-animated-container': AnimatedContainer;
  }
}
