var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './Text.css';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
let Text = class Text extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Type of styling
         */
        this.styling = 'paragraph';
        /**
         * Type of styling
         */
        this.textAlign = 'left';
        this.tag = 'p';
    }
    render() {
        const tag = document.createElement(this.tag);
        tag.classList.add(this.styling);
        tag.innerHTML = '<slot></slot>';
        return html `${tag}`;
    }
};
Text.styles = [style];
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Text.prototype, "styling", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Text.prototype, "textAlign", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Text.prototype, "tag", void 0);
Text = __decorate([
    customElement('iff-text')
], Text);
export { Text };
//# sourceMappingURL=Text.js.map