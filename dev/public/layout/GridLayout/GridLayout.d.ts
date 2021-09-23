import { LitElement } from 'lit';
export declare type layoutVariant = '1' | '1-1' | '1-1-1';
export declare type heightVariant = '25' | '50' | '75' | '100';
/**
 * An example element.
 *
 * @slot Slot for the content
 */
export declare class GridLayout extends LitElement {
    static styles: any[];
    /**
     * Layout: '1' | '1-1' | '1-1-1';
     */
    layout?: layoutVariant;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-grid-layout': GridLayout;
    }
}
//# sourceMappingURL=GridLayout.d.ts.map