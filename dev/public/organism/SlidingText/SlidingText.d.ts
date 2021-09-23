import '../../atom/Title/Title';
import '../../atom/Text';
import '../../atom/Link';
import { LitElement } from 'lit';
/**
 * Text Styling Component
 *
 * @slot - Slot of the element for the text
 */
export declare class SlidingText extends LitElement {
    static styles: any[];
    arialLabel?: String;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-sliding-text': SlidingText;
    }
}
//# sourceMappingURL=SlidingText.d.ts.map