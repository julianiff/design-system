import '../../atom/Title/Title';
import '../../atom/Text';
import '../../atom/Link';
import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import style from './style.css';
import {ifDefined} from 'lit/directives/if-defined';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
@customElement('iff-sliding-text')
export class SlidingText extends LitElement {
  static styles = [style];

  @property({type: String})
  arialLabel?: String;

  render() {
    return html`
      <figure class="quote" aria-label="${ifDefined(this.arialLabel)}">
        <blockquote cite="" aria-hidden="true">
          <iff-title class="colored-text" fontSize="dynamic" textAlign="center">
            <slot name="top-behind">lead</slot>
          </iff-title>

          <div class="container">
            <p class="container__cut-text">
              <iff-title fontSize="dynamic" textAlign="center">
                <slot name="top-front">Julian Iff</slot></iff-title
              >
              <iff-title fontSize="dynamic" textAlign="center"
                ><slot name="bottom-behind">FullStack Engineer</slot></iff-title
              >
            </p>
          </div>

          <iff-title
            class="colored-text colored-text__second"
            fontSize="dynamic"
            textAlign="center"
          >
            <slot name="bottom-front"></slot>
          </iff-title>
        </blockquote>

        <figcaption aria-hidden="true">
          <cite>lets create digital products!</cite>
        </figcaption>
      </figure>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-sliding-text': SlidingText;
  }
}
