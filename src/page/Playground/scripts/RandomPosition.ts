import {PositionTemplate} from './PositionTemplate';

export class RandomPosition extends PositionTemplate {
  setConfig() {
    this.config = {};
  }

  position(): void {
    this.nodeElements.map((item: any) => {
      item.style.position = 'absolute';
      item.style.left = `${Math.floor(Math.random() * 60)}%`;
      item.style.top = `${Math.floor(Math.random() * 60)}%`;
      item.style.backgroundColor = 'transparent';
      item.style.zIndex = '50';
    });
  }
}
