class Subject {
  private observers: Function[] = [];

  subscribe(fn: Function) {
    this.observers.push(fn);
  }

  notify(data: string) {
    this.observers.forEach(fn => fn(data));
  }
}

export {};
