import '../../atom/Link';
import '../../atom/Text';
import '../../atom/Title';
import { LitElement } from 'lit';
import { viewVariants } from '../../controller/ressources/views';
import { targetVariations } from '../../atom/Link/Link';
/**
 * Card to display articles
 *
 * @slot text - Slot to set text and styling
 * @slot  Set the text

 */
export declare class IconText extends LitElement {
    static styles: any[];
    event?: viewVariants;
    href?: string;
    target?: targetVariations;
    icon?: 'start' | 'end' | undefined;
    render(): import("lit-html").TemplateResult<1>;
    private setIconRender;
    private setIcon;
}
declare global {
    interface HTMLElementTagNameMap {
        'iff-icon-text': IconText;
    }
}
//# sourceMappingURL=IconText.d.ts.map