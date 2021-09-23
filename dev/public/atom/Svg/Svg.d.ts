import { LitElement } from 'lit';
/**
 * SVG in Image source
 *
 * @slot - Generic Slot for inline svg
 */
export declare class Svg extends LitElement {
    static styles: any[];
    /**
     * Source of the image
     */
    src?: string;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-svg': Svg;
    }
}
//# sourceMappingURL=Svg.d.ts.map