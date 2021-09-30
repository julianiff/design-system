export interface InteractionStrategy {
  position(): void;
}

export class InteractionContext {
  private strategy: InteractionStrategy;

  public constructor(strategy: InteractionStrategy) {
    this.strategy = strategy;
  }

  public setPosition(): void {
    this.strategy.position();
  }
}
