import {LitElement, html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {
  SymetricalPosition,
  RandomPosition,
  InteractionContext,
} from './scripts';
import {WrapInCard} from './scripts/WrapInCard';
import style from './style.css';

const PLAYGROUND_TAG = 'iff-playground';

/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement(PLAYGROUND_TAG)
export class Playground extends LitElement {
  static styles = [style];

  @property()
  public rel?: string;

  /**
   * Type of styling
   */
  @property({reflect: true, type: Boolean})
  public disabled: boolean = false;

  render() {
    return html`<div class="playground">
      <slot @slotchange=${(e: Event) => this.mediateSlot(e)}></slot>
    </div> `;
  }

  private mediateSlot({target}: Event) {
    // const {name} = target as HTMLSlotElement;
    const isValidSlotElement = (target as HTMLSlotElement)
      .assignedNodes()
      .filter((item) => item.nodeName.includes('-'));

    // console.log(isValidSlotElement);
    new InteractionContext(new WrapInCard(isValidSlotElement)).setPosition();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    [PLAYGROUND_TAG]: Playground;
  }
}
