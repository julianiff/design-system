var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import '../../atom/Link';
import '../../atom/Text';
import '../../atom/Title';
import { LitElement, html, svg, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitCoilConnectedEvent } from '../../controller/UpdateControllerConnectedEvent';
import { ifDefined } from 'lit/directives/if-defined';
import style from './style.css';
/**
 * Card to display articles
 *
 * @slot text - Slot to set text and styling
 * @slot  Set the text

 */
let IconText = class IconText extends LitElement {
    render() {
        return this.href
            ? html `<iff-link href=${this.href} target=${ifDefined(this.target)}
          >${this.setIconRender()}</iff-link
        >`
            : this.setIconRender();
    }
    setIconRender() {
        return html `
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
    setIcon(position) {
        return this.icon === position ? arrow : nothing;
    }
};
IconText.styles = [style];
__decorate([
    property(),
    __metadata("design:type", String)
], IconText.prototype, "event", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], IconText.prototype, "href", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], IconText.prototype, "target", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", Object)
], IconText.prototype, "icon", void 0);
IconText = __decorate([
    customElement('iff-icon-text')
], IconText);
export { IconText };
const arrow = svg `<svg
  viewBox="0 0 12 12"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path d="M0 5H8.2L5.1 1.9L6.5 0.5L12 6L6.5 11.5L5.1 10.1L8.2 7H0V5Z" />
</svg>`;
//# sourceMappingURL=IconText.js.map