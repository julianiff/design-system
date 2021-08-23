import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import style from './style.css';

export type layoutVariant = '1' | '1-1' | '1-1-1';
export type heightVariant = '25' | '50' | '75' | '100';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-grid-layout')
export class GridLayout extends LitElement {
  static styles = [style];

  /**
   * Layout: '1' | '1-1' | '1-1-1';
   */
  @property({reflect: true})
  public layout?: layoutVariant = '1-1';

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-grid-layout': GridLayout;
  }
}
