import '../atom/Title';
import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {animate, fadeInSlow} from '@lit-labs/motion';
import {createRef, ref} from 'lit/directives/ref.js';

/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
@customElement('iff-animated-container')
export class AnimatedContainer extends LitElement {
  static styles = css`
    .hidden {
      opacity: 0;
    }

    .shifted {
      opacity: 100%;
    }
  `;

  connectedCallback() {
    super.connectedCallback();
    // Intersection Observer and then slow fade in of elements
    this.observer = new IntersectionObserver((entry) => {
      if (entry[0].intersectionRatio > 0) {
        this.activeAnimation = true;
      }
    });
  }

  @property({type: Boolean})
  shifted = false;

  @property({type: Boolean})
  activeAnimation = false;

  @property({type: Object})
  observer?: any;

  render() {
    const inputRef = createRef();
    this.observer.observe(this);

    return html`
      <div
        ${ref(inputRef)}
        class="hidden ${this.activeAnimation ? 'shifted' : ''}"
        ${this.activeAnimation
          ? animate({
              in: fadeInSlow,
            })
          : ''}
      >
        <slot></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-animated-container': AnimatedContainer;
  }
}
