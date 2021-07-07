import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import style from './style.css';

type gridOrientation = 'start' | 'end' | 'center';
type gridWidth = 'slim' | 'default' | 'full';
type gridHeight = 'default' | 'full';
type gridBackground = 'positive' | 'negative' | 'complement';
type spacerVariant = 'sm' | 'md' | 'lg' | 'component';

/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-grid-item')
export class GridItem extends LitElement {
  static styles = [style];

  /**
   * Orientation 'positive' | 'negative' | 'complement';
   */
  @property({reflect: true})
  public orientation: gridOrientation = 'start';

  /**
   * Orientation 'positive' | 'negative' | 'complement';
   */
  @property({reflect: true})
  public spacer: spacerVariant = 'sm';

  /**
   * Width
   */
  @property({reflect: true})
  public width: gridWidth = 'full';

  /**
   * Height
   */
  @property({reflect: true})
  public height?: gridHeight;

  /**
   * Background Color
   */
  @property({reflect: true})
  public background?: gridBackground;

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-grid-item': GridItem;
  }
}
