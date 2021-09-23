import '../atom/Title';
import { LitElement } from 'lit';
/**
 * Card to display articles
 *
 * @slot Slot to set title

 */
export declare class AnimatedContainer extends LitElement {
    static styles: import("lit").CSSResult;
    /**
     * The number of times the button has been clicked.
     */
    shifted: boolean;
    render(): import("lit-html").TemplateResult<1>;
    _toggle(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-animated-container': AnimatedContainer;
    }
}
//# sourceMappingURL=AnimatedContainer.d.ts.map