var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map';
import { ScrollIndicatorController } from '../controller/scrollIndicatorController copy';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
let ScrollIndicator = class ScrollIndicator extends LitElement {
    constructor() {
        super(...arguments);
        this.scrollIndicatorController = new ScrollIndicatorController(this);
    }
    render() {
        const styling = {
            width: `${this.scrollIndicatorController.width}` + '%',
            'background-color': 'green',
            height: '250vh',
        };
        return html `<div style=${styleMap(styling)}>
      ${this.scrollIndicatorController.width}
    </div>`;
    }
};
ScrollIndicator.styles = css ``;
ScrollIndicator = __decorate([
    customElement('iff-scroll-indicator')
], ScrollIndicator);
export { ScrollIndicator };
//# sourceMappingURL=ScrollIndicator.js.map