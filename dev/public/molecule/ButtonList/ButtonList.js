var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import '../../atom/Title';
import { LitElement, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import style from './style.css';
/**
 * Card to display articles
 *
 * @slot Slot to show buttons

 */
let ButtonList = class ButtonList extends LitElement {
    constructor() {
        super(...arguments);
        // set the event that gets fired
        this.highlightActive = true;
        this.buttonEffect = 'inset 0 0 0 3px var(--iff-alias__background-color--secondary)';
        this.buttonsOpacity = '75%';
    }
    render() {
        this.highlightActive &&
            window.setTimeout(() => {
                this.buttonEffect = 'initial';
                this.buttonsOpacity = 'initial';
            }, 200);
        return html `
      <style>
        :host {
          --iff-button__effect--box-shadow: ${this.buttonEffect};
          --iff-button__effect--opacity: ${this.buttonsOpacity};
        }
      </style>

      <slot></slot>
    `;
    }
};
ButtonList.styles = [style];
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], ButtonList.prototype, "highlightActive", void 0);
__decorate([
    state(),
    __metadata("design:type", String)
], ButtonList.prototype, "buttonEffect", void 0);
__decorate([
    state(),
    __metadata("design:type", String)
], ButtonList.prototype, "buttonsOpacity", void 0);
ButtonList = __decorate([
    customElement('iff-button-list')
], ButtonList);
export { ButtonList };
//# sourceMappingURL=ButtonList.js.map