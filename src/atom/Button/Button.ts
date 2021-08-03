import '../Link';
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {viewVariants} from '../../controller/ressources/views';
import {LitCoilConnectedEvent} from '../../controller/UpdateControllerConnectedEvent';
import style from './style.css';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-button')
export class Button extends LitElement {
  static styles = [style];

  /**
   * Type of styling
   */
  @property()
  public event?: viewVariants;

  /**
   * Event Payload
   */
  @property()
  public eventPayload: string = 'payload';

  @property()
  public href?: string;

  /**
   * Type of styling
   */
  @property({reflect: true, type: Boolean})
  public disabled: boolean = false;

  render() {
    return this.href
      ? html`
          <iff-link href=${this.href}>
            <div
              class="button"
              @click=${() => {
                if (this.event) {
                  const event = new LitCoilConnectedEvent(this.event);
                  this.dispatchEvent(event);
                }
              }}
            >
              <slot name="prefix"></slot>
              <slot></slot>
              <slot name="suffix"></slot>
            </div>
          </iff-link>
        `
      : html`<button
          class="button"
          @click=${() => {
            if (this.event) {
              const event = new LitCoilConnectedEvent(this.event);
              this.dispatchEvent(event);
            }
          }}
        >
          <slot></slot>
        </button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button': Button;
  }
}
