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
import style from './Title.css';
/**
 * Text Styling Component
 *
 * @slot - This element has a slot
 */
let Title = class Title extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Type of textAlignation
         */
        this.textAlign = 'left';
        /**
         * Level of styling
         */
        this.level = 3;
    }
    render() {
        const tagName = `h${this.level}`;
        const tag = document.createElement(tagName);
        tag.innerHTML = '<slot></slot>';
        return html `${tag}`;
    }
};
Title.styles = [style];
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Title.prototype, "textAlign", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], Title.prototype, "fontSize", void 0);
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number)
], Title.prototype, "level", void 0);
__decorate([
    property(),
    __metadata("design:type", String)
], Title.prototype, "surplus", void 0);
Title = __decorate([
    customElement('iff-title')
], Title);
export { Title };
//# sourceMappingURL=Title.js.map