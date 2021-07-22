import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {fromEvent} from 'rxjs';
import {tap} from 'rxjs/operators';

/**
 * An example element.
 *
 * @slot Slot for the content
 */
@customElement('iff-scroll-indicator')
export class ScrollIndicator extends LitElement {
  static styles = css``;

  connectedCallback() {
    super.connectedCallback();

    console.log(this.width);
    fromEvent(document, 'scroll')
      .pipe(tap({next: (_) => this.setScroll(this.width)}))
      .subscribe();
  }

  @property({type: Number})
  width: number = 5;

  private setScroll(input: number) {
    console.log(input);
    this.width = input + 1;
  }

  render() {
    return html`<div style="height: 300vh;">${this.width}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'iff-scroll-indicator': ScrollIndicator;
  }
}
