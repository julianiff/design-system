import '../../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement, property, state} from 'lit/decorators.js';
import style from './style.css';

/**
 * Card to display articles
 *
 * @slot Slot to show buttons

 */
@customElement('iff-button-list')
export class ButtonList extends LitElement {
  static styles = [style];

  // set the event that gets fired
  @property({type: Boolean})
  public highlightActive?: boolean = true;

  @state()
  private buttonEffect: string =
    'inset 0 0 0 3px var(--iff-alias__background-color--secondary)';

  render() {
    this.highlightActive &&
      window.setTimeout(() => {
        this.buttonEffect = 'initial';
      }, 200);
    return html`
      <style>
        :host {
          --iff-button__effect--box-shadow: ${this.buttonEffect};
        }
      </style>

      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-button-list': ButtonList;
  }
}
