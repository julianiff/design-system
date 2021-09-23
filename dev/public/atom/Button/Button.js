var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import '../../molecule/BackgroundClip/BackgroundClip';
import '../Link';
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { LitCoilConnectedEvent } from '../../controller/UpdateControllerConnectedEvent';
import style from './style.css';
import { ifDefined } from 'lit/directives/if-defined';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
let Button = class Button extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Event Payload
         */
        this.eventPayload = 'payload';
        /**
         * Type of styling
         */
        this.disabled = false;
    }
    render() {
        return this.href
            ? html `
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
            : html `<iff-background-clip
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
};
Button.styles = [style];
__decorate([
    property(),
    __metadata("design:type", String)
], Button.prototype, "event", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Button.prototype, "eventPayload", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Button.prototype, "href", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Button.prototype, "rel", void 0);
__decorate([
    property({ reflect: true, type: Boolean }),
    __metadata("design:type", Boolean)
], Button.prototype, "disabled", void 0);
Button = __decorate([
    customElement('iff-button')
], Button);
export { Button };
//# sourceMappingURL=Button.js.map