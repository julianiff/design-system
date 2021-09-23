import { LitElement } from 'lit';
declare type gridOrientation = 'start' | 'end' | 'center';
declare type gridWidth = 'slim' | 'default' | 'full';
declare type gridHeight = 'default' | 'full';
declare type gridBackground = 'positive' | 'negative' | 'complement';
declare type spacerVariant = 'sm' | 'md' | 'lg' | 'component';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
export declare class GridItem extends LitElement {
    static styles: any[];
    /**
     * Orientation 'start' | 'end' | 'center';
     */
    orientation: gridOrientation;
    /**
     * Orientation 'sm' | 'md' | 'lg' | 'component';
     */
    spacer: spacerVariant;
    /**
     * Width
     */
    width: gridWidth;
    /**
     * Height
     */
    height?: gridHeight;
    /**
     * Background Polygon
     */
    polygon: Boolean;
    /**
     * Background Color
     */
    background?: gridBackground;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-grid-item': GridItem;
    }
}
export {};
//# sourceMappingURL=GridItem.d.ts.map