import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';

import style from './style.css';
/**
 * Card to display articles
 *
 * @slot slot for the full content

 */
@customElement('iff-background-clip')
export class BackgroundClip extends LitElement {
  static styles = [style];

  /**
   * BackgroundColor theme | white | black
   */
  @property({reflect: true})
  backgroundColor?: 'theme' | 'white' | 'black' | undefined;

  render() {
    return html`<div class="clipped-background"><slot></slot></div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-background-clip': BackgroundClip;
  }
}
