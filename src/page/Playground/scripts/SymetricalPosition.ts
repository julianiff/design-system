import {PositionTemplate} from './PositionTemplate';

export class SymetricalPosition extends PositionTemplate {
  setConfig() {
    this.config = {};
  }

  position(): void {
    const amountOfElements = this.nodeElements.length;
    const maxWidth = 90;
    const maxHeight = 80;

    this.nodeElements.map((item: any, index) => {
      console.log(Math.floor(Math.random() * amountOfElements));
      item.style.position = 'absolute';
      item.style.left = `${(maxWidth / amountOfElements) * (index + 1)}%`;
      item.style.top = `${(maxHeight / amountOfElements) * (index + 1)}%`;
      item.style.zIndex = '50';
    });
  }
}
