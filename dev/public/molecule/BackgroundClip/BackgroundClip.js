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
import style from './style.css';
/**
 * Card to display articles
 *
 * @slot slot for the full content

 */
let BackgroundClip = class BackgroundClip extends LitElement {
    render() {
        return html `<div class="clipped-background"><slot></slot></div>`;
    }
};
BackgroundClip.styles = [style];
__decorate([
    property({ reflect: true }),
    __metadata("design:type", Object)
], BackgroundClip.prototype, "backgroundColor", void 0);
BackgroundClip = __decorate([
    customElement('iff-background-clip')
], BackgroundClip);
export { BackgroundClip };
//# sourceMappingURL=BackgroundClip.js.map