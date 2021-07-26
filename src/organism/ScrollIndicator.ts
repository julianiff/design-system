import {LitElement, html, css} from 'lit';
import {customElement} from 'lit/decorators.js';
import {styleMap} from 'lit/directives/style-map';
import {ScrollIndicatorController} from '../controller/scrollIndicatorController copy';

/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-scroll-indicator')
export class ScrollIndicator extends LitElement {
  static styles = css``;

  private scrollIndicatorController = new ScrollIndicatorController(this);

  render() {
    const styling = {
      width: `${this.scrollIndicatorController.width}` + '%',
      'background-color': 'green',
      height: '250vh',
    };
    return html`<div style=${styleMap(styling)}>
      ${this.scrollIndicatorController.width}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-scroll-indicator': ScrollIndicator;
  }
}
