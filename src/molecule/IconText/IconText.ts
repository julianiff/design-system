import '../../atom/Link';
import '../../atom/Text';
import '../../atom/Title';
import {LitElement, html, svg, nothing} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {LitCoilConnectedEvent} from '../../controller/UpdateControllerConnectedEvent';
import {viewVariants} from '../../controller/ressources/views';

import style from './style.css';
/**
 * Card to display articles
 *
 * @slot text - Slot to set text and styling
 * @slot  Set the text

 */
@customElement('iff-icon-text')
export class IconText extends LitElement {
  static styles = [style];

  // set the event that gets fired
  @property()
  public event?: viewVariants;

  // set the event that gets fired
  @property()
  public href?: string;

  // Set the position of the icon
  @property({reflect: true})
  public icon?: 'start' | 'end' | undefined;

  render() {
    return this.href
      ? html`<iff-link href=${this.href}>${this.setIconRender()}</iff-link>`
      : this.setIconRender();
  }

  private setIconRender() {
    return html`
      <div
        class="icon-text"
        @click=${() => {
          if (this.event) {
            const event = new LitCoilConnectedEvent(this.event);
            this.dispatchEvent(event);
          }
        }}
      >
        ${this.setIcon('start')}<slot name="text"
          ><iff-text styling="paragraph"><slot></slot></iff-text></slot
        >${this.setIcon('end')}
      </div>
    `;
  }

  private setIcon(position: string) {
    return this.icon === position ? arrow : nothing;
  }
}

const arrow = svg`<svg
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 5H8.2L5.1 1.9L6.5 0.5L12 6L6.5 11.5L5.1 10.1L8.2 7H0V5Z" />
</svg>`;

declare global {
  interface HTMLElementTagNameMap {
    'iff-icon-text': IconText;
  }
}
