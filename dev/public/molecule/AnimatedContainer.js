var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import '../atom/Title';
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
let AnimatedContainer = class AnimatedContainer extends LitElement {
    constructor() {
        super(...arguments);
        // Intersection Observer and then slow fade in of elements
        /**
         * The number of times the button has been clicked.
         */
        this.shifted = false;
    }
    render() {
        return html `
      <div
        @mouseenter=${this._toggle}
        @mouseleave=${this._toggle}
        class="box ${this.shifted ? 'shifted' : ''}"
      >
        <slot></slot>
      </div>
    `;
    }
    _toggle() {
        this.shifted = !this.shifted;
    }
};
AnimatedContainer.styles = css `
    .box {
      transform: translateX(0px);
    }

    .shifted {
      transform: translateX(-5px);
    }
  `;
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], AnimatedContainer.prototype, "shifted", void 0);
AnimatedContainer = __decorate([
    customElement('iff-animated-container')
], AnimatedContainer);
export { AnimatedContainer };
//# sourceMappingURL=AnimatedContainer.js.map