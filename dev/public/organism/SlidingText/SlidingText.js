var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import '../../atom/Title/Title';
import '../../atom/Text';
import '../../atom/Link';
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './style.css';
import { ifDefined } from 'lit/directives/if-defined';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
let SlidingText = class SlidingText extends LitElement {
    render() {
        return html `
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
                ><slot name="bottom-behind"
                  >FullStack <br />Engineer</slot
                ></iff-title
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
};
SlidingText.styles = [style];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], SlidingText.prototype, "arialLabel", void 0);
SlidingText = __decorate([
    customElement('iff-sliding-text')
], SlidingText);
export { SlidingText };
//# sourceMappingURL=SlidingText.js.map