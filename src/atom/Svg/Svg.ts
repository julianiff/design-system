import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {ifDefined} from 'lit/directives/if-defined';

import style from './style.css';
/**
 * SVG in Image source
 *
 * @slot - Generic Slot for inline svg
 */
@customElement('iff-svg')
export class Svg extends LitElement {
  static styles = [style];

  /**
   * Source of the image
   */
  @property()
  public src?: string;

  render() {
    return html`<slot><img src="${ifDefined(this.src)}" /></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-svg': Svg;
  }
}
