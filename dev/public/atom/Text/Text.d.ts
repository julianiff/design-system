import { LitElement } from 'lit';
declare type StylingVariation = 'lead' | 'paragraph' | 'paragraph-slim' | 'paragraph-bold' | 'label';
export declare type TagVariation = 'p';
export declare type textAlignVars = 'left' | 'center' | 'right';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
export declare class Text extends LitElement {
    static styles: any[];
    /**
     * Type of styling
     */
    styling: StylingVariation;
    /**
     * Type of styling
     */
    textAlign: textAlignVars;
    tag: TagVariation;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-text': Text;
    }
}
export {};
//# sourceMappingURL=Text.d.ts.map