import '../../molecule/BackgroundClip/BackgroundClip';
import '../Link';
import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {viewVariants} from '../../controller/ressources/views';
import {LitCoilConnectedEvent} from '../../controller/UpdateControllerConnectedEvent';
import style from './style.css';
import {ifDefined} from 'lit/directives/if-defined.js';
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

  @property()
  public rel?: string;

  /**
   * Type of styling
   */
  @property({reflect: true, type: Boolean})
  public disabled: boolean = false;

  render() {
    return this.href
      ? html`
          <iff-background-clip
            backgroundColor="theme"
            style="--iff-hover__font--color: black;"
          >
            <iff-link href=${this.href} rel=${ifDefined(this.rel)}>
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
          </iff-background-clip>
        `
      : html`<iff-background-clip
          backgroundColor="theme"
          style="--iff-hover__font--color: black;"
        >
          <button
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
            <slot name="suffix"></slot></button
        ></iff-background-clip>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button': Button;
  }
}
