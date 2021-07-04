import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import style from './Text.css';

type StylingVariation =
  | 'paragraph'
  | 'paragraph-slim'
  | 'paragraph-bold'
  | 'label';
export type TagVariation = 'p';
export type textAlignVars = 'left' | 'center' | 'right';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-text')
export class Text extends LitElement {
  static styles = [style];

  /**
   * Type of styling
   */
  @property({reflect: true})
  public styling: StylingVariation = 'paragraph';

  /**
   * Type of styling
   */
  @property({reflect: true})
  public textAlign: textAlignVars = 'left';

  @property()
  public tag: TagVariation = 'p';

  render() {
    const tag = document.createElement(this.tag);
    tag.classList.add(this.styling);
    tag.innerHTML = '<slot></slot>';

    return html`${tag}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-text': Text;
  }
}
