import {LitElement, html, svg, nothing} from 'lit';
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
   * Background Polygon
   */
  @property({type: Boolean})
  public polygon: Boolean = false;

  /**
   * Background Color
   */
  @property({reflect: true})
  public background?: gridBackground;

  render() {
    return html` ${this.polygon
        ? svg` <div class="triangle-container">
        <svg height="500" width="1000">
          <polygon points="50,200 50,400 500,300 500, 100" class="triangle" />
        </svg>
      </div>`
        : nothing}

      <slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-grid-item': GridItem;
  }
}
