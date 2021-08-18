import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {textAlignVars} from '../Text/Text';
import style from './Title.css';

export type HLevel = 1 | 2 | 3 | 4;
export type surPlus = 'giganto';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
@customElement('iff-title')
export class Title extends LitElement {
  static styles = [style];

  /**
   * Type of textAlignation
   */
  @property({reflect: true})
  public textAlign: textAlignVars = 'left';

  /**
   * Type of textAlignation
   */
  @property({reflect: true})
  public fontSize?: String;

  /**
   * Level of styling
   */
  @property({type: Number})
  public level: HLevel = 3;

  /**
   * Level of styling
   */
  @property()
  public surplus?: surPlus;

  render() {
    const tagName = `h${this.level}`;
    const tag = document.createElement(tagName);
    tag.innerHTML = '<slot></slot>';

    return html`${tag}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-title': Title;
  }
}
