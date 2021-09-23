import '../../molecule/BackgroundClip/BackgroundClip';
import '../Link';
import { LitElement } from 'lit';
import { viewVariants } from '../../controller/ressources/views';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
export declare class Button extends LitElement {
    static styles: any[];
    /**
     * Type of styling
     */
    event?: viewVariants;
    /**
     * Event Payload
     */
    eventPayload: string;
    href?: string;
    rel?: string;
    /**
     * Type of styling
     */
    disabled: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-button': Button;
    }
}
//# sourceMappingURL=Button.d.ts.map