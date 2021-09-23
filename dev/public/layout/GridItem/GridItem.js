var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, svg, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from './style.css';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
let GridItem = class GridItem extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * Orientation 'start' | 'end' | 'center';
         */
        this.orientation = 'start';
        /**
         * Orientation 'sm' | 'md' | 'lg' | 'component';
         */
        this.spacer = 'sm';
        /**
         * Width
         */
        this.width = 'full';
        /**
         * Background Polygon
         */
        this.polygon = false;
    }
    render() {
        return html ` ${this.polygon
            ? svg `<div class="svg-container"><div class="triangle-container">
        <svg class="scaling" viewBox="75 0 400 500">
          <polygon points="50,200 50,400 500,300 500, 100" class="triangle" />
        </svg>
      </div></div>`
            : nothing}

      <slot></slot>`;
    }
};
GridItem.styles = [style];
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], GridItem.prototype, "orientation", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], GridItem.prototype, "spacer", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], GridItem.prototype, "width", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], GridItem.prototype, "height", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], GridItem.prototype, "polygon", void 0);
__decorate([
    property({ reflect: true }),
    __metadata("design:type", String)
], GridItem.prototype, "background", void 0);
GridItem = __decorate([
    customElement('iff-grid-item')
], GridItem);
export { GridItem };
//# sourceMappingURL=GridItem.js.map