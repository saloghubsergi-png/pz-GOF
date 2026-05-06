interface Strategy {
  execute(a: number, b: number): number;
}

class Add implements Strategy {
  execute(a: number, b: number) {
    return a + b;
  }
}

class Multiply implements Strategy {
  execute(a: number, b: number) {
    return a * b;
  }
}

class Context {
  constructor(private strategy: Strategy) {}

  run(a: number, b: number) {
    return this.strategy.execute(a, b);
  }
}

export {};
