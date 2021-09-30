import {InteractionStrategy} from './Context';

interface PositionConfig {}

export abstract class PositionTemplate implements InteractionStrategy {
  protected nodeElements: Node[];
  protected config?: PositionConfig;

  public constructor(nodes: Node[]) {
    this.nodeElements = nodes;
    this.setConfig();
  }

  setConfig() {}
  position(): void {}
}
