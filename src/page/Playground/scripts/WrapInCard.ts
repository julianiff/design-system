import {PositionTemplate} from './PositionTemplate';

export class WrapInCard extends PositionTemplate {
  setConfig() {
    this.config = {};
  }

  position(): void {
    this.nodeElements.map((item) => {
      const tag = document.createElement('iff-playground-item');
      console.log('nodes', item.parentNode);
      // tag.innerHTML = `${item}`;
      // item.parentNode?.appendChild(tag);

      // tag.innerHTML = `${item}`;
    });
  }
}
