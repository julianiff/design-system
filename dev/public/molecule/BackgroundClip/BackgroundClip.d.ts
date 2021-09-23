import { LitElement } from 'lit';
/**
 * Card to display articles
 *
 * @slot slot for the full content

 */
export declare class BackgroundClip extends LitElement {
    static styles: any[];
    /**
     * BackgroundColor theme | white | black
     */
    backgroundColor?: 'theme' | 'white' | 'black' | undefined;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-background-clip': BackgroundClip;
    }
}
//# sourceMappingURL=BackgroundClip.d.ts.map