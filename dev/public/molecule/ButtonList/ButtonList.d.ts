import '../../atom/Title';
import { LitElement } from 'lit';
/**
 * Card to display articles
 *
 * @slot Slot to show buttons

 */
export declare class ButtonList extends LitElement {
    static styles: any[];
    highlightActive?: boolean;
    private buttonEffect;
    private buttonsOpacity;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-button-list': ButtonList;
    }
}
//# sourceMappingURL=ButtonList.d.ts.map