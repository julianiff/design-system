import { html, fixture, expect } from '@open-wc/testing';

import { IffGenericCard } from '../src/IffGenericCard.js';
import '../iff-generic-card.js';

describe('IffGenericCard', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el: IffGenericCard = await fixture(html`
      <iff-generic-card></iff-generic-card>
    `);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el: IffGenericCard = await fixture(html`
      <iff-generic-card></iff-generic-card>
    `);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el: IffGenericCard = await fixture(html`
      <iff-generic-card title="attribute title"></iff-generic-card>
    `);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el: IffGenericCard = await fixture(html`
      <iff-generic-card></iff-generic-card>
    `);

    await expect(el).shadowDom.to.be.accessible();
  });
});
